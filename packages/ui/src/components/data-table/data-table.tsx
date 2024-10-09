import { lazy, Suspense } from "react";
import { DataTableBase, DataTableBaseProps } from "./data-table-base";
import { DataTableFooterProps } from "./data-table-footer";

const DataTableFooter = lazy(() => import("./data-table-footer"));

export interface DataTableProps<TData, TColumn>
  extends Omit<DataTableBaseProps<TData, TColumn>, "footer"> {
  footer?: Pick<DataTableFooterProps, "info">;
}

const DataTable = <TData, TColumn>({
  footer,
  coloredTableHead = true,
  ...props
}: DataTableProps<TData, TColumn>) => (
  <DataTableBase
    {...props}
    footer={
      <Suspense>
        <DataTableFooter {...footer} />
      </Suspense>
    }
    coloredTableHead={coloredTableHead}
  />
);

export default DataTable;
