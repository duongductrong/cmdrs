"use client";

import Button from "@/components/button";
import { useDataTableBase } from "../use-data-table-base";
import XIcon from "@/components/icons/x-icon";

export interface DataTableResetFilterProps {
  label?: string;
}

const DataTableResetFilter = ({
  label = "Reset",
}: DataTableResetFilterProps) => {
  const { table } = useDataTableBase();

  if (!table.getState().columnFilters.length) return null;

  return (
    <Button
      className="h-9 px-2 lg:px-3"
      variant="ghost"
      onClick={() => table.resetColumnFilters()}
    >
      {label}
      <XIcon className="ml-2 size-4" />
    </Button>
  );
};

export default DataTableResetFilter;
