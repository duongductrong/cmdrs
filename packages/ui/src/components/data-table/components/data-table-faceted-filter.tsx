"use client";

import React, { ReactNode } from "react";
import Badge from "@/components/badge";
import Button from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import Separator from "@/components/separator";
import { cn } from "@/lib/tw";
import { useDataTableBase } from "../use-data-table-base";

export interface DataTableFacetedFilterProps<TData, TValue> {
  column: string;
  label?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  emptyText?: ReactNode;
  clearText?: string;

  showsSize?: number;
  showsLabel?: string;
}

function DataTableFacetedFilter<TData, TValue>({
  column,
  label,
  options,
  showsSize = 2,
  showsLabel = "{size} selected",
  emptyText = "No results found.",
  clearText = "Clear filters",
}: DataTableFacetedFilterProps<TData, TValue>) {
  const { table } = useDataTableBase();

  const _column = table.getColumn(column);
  const facets = _column?.getFacetedUniqueValues();
  const selectedValues = new Set(_column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 border-dashed">
          {/* <PlusCircledIcon className="mr-2 h-4 w-4" /> */}
          plus circle icon
          {label}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > showsSize ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {showsLabel.replace(
                      /{size}/,
                      selectedValues.size.toString()
                    )}
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={label} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      _column?.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      {/* <CheckIcon className={cn("h-4 w-4")} /> */}
                      Check icon
                    </div>
                    {option.icon && (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => _column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    {clearText}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default DataTableFacetedFilter;
