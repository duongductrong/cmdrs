"use client";

import * as React from "react";

import Button from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/tw";
import { withPreventDefault } from "@/primitives/event";
import Badge from "./badge";
import CheckIcon from "./icons/check-icon";
import ChevronsUpDownIcon from "./icons/chevrons-up-down-icon";
import XIcon from "./icons/x-icon";
import { ScrollArea } from "./scroll-area";

const getAddOrRemoveValues = (data: string[], currentValue: string) => {
  const index = data.findIndex((value) => value === currentValue);

  if (index !== -1) {
    return data.filter((value) => value !== currentValue);
  }

  return [...data, currentValue];
};

const getActiveOption = (
  optionValue: string,
  currentValue: string | string[]
) => {
  if (Array.isArray(currentValue)) {
    return currentValue.includes(optionValue);
  }

  return optionValue === currentValue;
};

export interface ComboboxOption<TValue = string> {
  label: string;
  value: TValue;
}

export interface ComboboxProps {
  options?: ComboboxOption[];
  value?: string | string[];
  emptyLabel?: string;
  placeholder?: string;
  multiple?: boolean;
  closeOnSelect?: boolean;
  onChange?: (val: string | string[]) => void;
}

const Combobox = React.forwardRef<
  React.ElementRef<typeof Button>,
  ComboboxProps
>(
  (
    {
      placeholder,
      emptyLabel,
      options,
      value: defaultValue,
      multiple,
      closeOnSelect,
      onChange,
    },
    ref
  ) => {
    const targetRef = React.useRef<HTMLButtonElement>(null);
    const contentRef =
      React.useRef<React.ElementRef<typeof PopoverContent>>(null);

    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState<string | string[]>(() => {
      if (!multiple) {
        return defaultValue || "";
      }

      return defaultValue || [];
    });

    const [value, setValue] = onChange
      ? [defaultValue, onChange]
      : [state, setState];

    // const [target, { width }] = useElementSize();

    const handleClose = () => {
      setOpen(!closeOnSelect);
    };

    const handleSelect = (currentValue: string) => {
      if (!multiple && !Array.isArray(value)) {
        setValue?.(currentValue === value ? "" : currentValue);
        handleClose();
        return;
      }

      if (multiple && Array.isArray(value)) {
        setValue(getAddOrRemoveValues(value, currentValue));
        handleClose();
        return;
      }

      throw new Error(
        "The value should be a type not_multiple=string or multiple=string[]"
      );
    };

    React.useImperativeHandle(ref, targetRef as any);

    const labelsMap = React.useMemo(
      () =>
        options?.reduce(
          (combinedOptions, curOption) => ({
            ...combinedOptions,
            [curOption.value]: curOption.label,
          }),
          {} as Record<string, string>
        ),
      [options]
    );

    const renderSelectedValue = React.useMemo(() => {
      if (!multiple && !Array.isArray(value)) {
        return value
          ? options?.find((option) => option.value === value)?.label
          : placeholder;
      }

      return Array.isArray(value)
        ? value.map((curValue) => (
            <Badge variant="secondary" key={curValue}>
              {labelsMap?.[curValue]}
              <XIcon
                className="ml-1 h-3 w-3 text-muted-foreground cursor-pointer"
                onClick={withPreventDefault((e) => {
                  handleSelect(curValue);
                })}
              />
            </Badge>
          ))
        : [];
    }, [value]);

    React.useEffect(() => {
      if (targetRef.current) {
        targetRef.current.addEventListener("resize", () => {
          console.log("resize");
        });
      }
    }, [targetRef.current]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <ScrollArea viewportClassName="max-h-[200px]">
            <Button
              ref={targetRef}
              type="button"
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="h-auto w-full justify-between px-2 hover:bg-transparent cursor-text"
            >
              <span className="flex w-full flex-1 flex-wrap gap-1">
                {renderSelectedValue}
              </span>
              <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </ScrollArea>
        </PopoverTrigger>
        <PopoverContent ref={contentRef} className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={placeholder} className="h-9" />
            <CommandEmpty>{emptyLabel ?? "No option found."}</CommandEmpty>
            <ScrollArea viewportClassName="max-h-[300px]">
              <CommandGroup>
                {options?.map((option) => {
                  const isActive = getActiveOption(option.value, value ?? "");

                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      className={isActive ? "hidden" : ""}
                      onSelect={handleSelect}
                    >
                      {option.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

export default Combobox;
