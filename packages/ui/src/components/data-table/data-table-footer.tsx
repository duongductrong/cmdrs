"use client";

import { cn } from "@/lib/tw";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Pagination } from "../pagination";
import { useDataTableBase } from "./use-data-table-base";

export interface DataTableFooterProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * {page}: current page
   * {totalRecords}: total records
   * {totalPages}: total pages
   * {from}: from entry
   * {to}: to entry
   */
  info?: string;
}

const DataTableFooter = forwardRef<ElementRef<"div">, DataTableFooterProps>(
  (
    {
      className,
      info = "Showing {from}-{to} of {totalRecords} entries",
      ...props
    },
    ref
  ) => {
    const { pagination, table } = useDataTableBase();

    const infoContent = info
      .replace(
        /{from}/,
        (pagination.pageIndex * pagination.pageSize + 1).toString() ?? ""
      )
      .replace(
        /{to}/,
        ((pagination.pageIndex + 1) * pagination.pageSize).toString() ?? ""
      )
      .replace(/{totalPages}/, pagination.totalPages.toString() ?? "")
      .replace(/{totalRecords}/, pagination.totalRecords.toString() ?? "")
      .replace(/{page}/, (pagination.pageIndex + 1).toString() ?? "");

    return (
      <div
        ref={ref}
        {...props}
        className={cn("mt-4 flex items-center", className)}
      >
        <div className="flex items-center text-sm">{infoContent}</div>

        {/* <div className="flex items-center space-x-2 ml-auto">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRightIcon className="h-4 w-4" />
          </Button>
        </div> */}
        <Pagination
          currentPage={Number(pagination?.pageIndex)}
          totalPages={pagination.totalPages}
          setCurrentPage={(page) => table?.setPageIndex(page)}
          className="ml-auto"
        />
      </div>
    );
  }
);

export default DataTableFooter;
