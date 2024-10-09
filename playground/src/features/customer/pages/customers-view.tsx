"use client";

import {
  ColumnDef,
  DataTable,
  DataTableDateRangeFilter,
  DataTableFacetedFilter,
  DataTableSearcher,
  DataTableStacked,
  DataTableToolbar,
  useDataTableRowsSelection,
} from "@cmdrs/ui";

export const description = "A collection of health charts.";

export default function CustomersView() {
  const columns: ColumnDef<any>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email", size: 300 },
    { accessorKey: "phone", header: "Phone" },
    {
      accessorKey: "createdAt",
      header: "createdAt",
      size: 300,
      cell: ({ row }) => row.original.createdAt.toISOString(),
      enableSorting: false,
    },
  ];

  const { rowsSelection, setRowsSelection } = useDataTableRowsSelection();

  return (
    <div>
      <DataTable
        header={
          <DataTableToolbar>
            <DataTableSearcher placeholder="Search..." isGlobal />

            <DataTableStacked>
              <DataTableFacetedFilter
                column="status"
                label="Status"
                options={[
                  {
                    label: "Active",
                    value: "active",
                  },
                  {
                    label: "Inactive",
                    value: "inactive",
                  },
                ]}
              />

              <DataTableDateRangeFilter column="createdAt" />
            </DataTableStacked>
          </DataTableToolbar>
        }
        columns={columns}
        data={[
          ...Array.from({ length: 100 }, (_, i) => ({
            name: `Customer ${i + 1}`,
            email: `customer${i + 1}@example.com`,
            phone: `123-456-789${i % 10}`,
            createdAt: new Date(),
          })),
        ]}
        rowSelection={rowsSelection}
        onRowSelectionChange={setRowsSelection}
        rowSelectionEnable
      />
    </div>
  );
}
