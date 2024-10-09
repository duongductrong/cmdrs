"use client";

import { PlusMiniIcon } from "@cmdrs/icons";
import {
  ButtonGroup,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  Input,
  Label,
} from "@cmdrs/ui";
import { Dialog } from "@cmdrs/ui";
import {
  Button,
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
    { accessorKey: "status", header: "Status" },
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
    <section>
      <div className="mb-4 flex items-center">
        <h2 className="text-2xl font-medium">Customers</h2>
        <div className="ml-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                Add Customer <PlusMiniIcon className="size-4 text-black ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Add Customer</DialogHeader>
              {/* <DialogDescription>
                Add a new customer to the system.
              </DialogDescription> */}
              <div className="grid grid-cols-2 gap-4">
                <Label>
                  First name
                  <Input placeholder="First name" className="mt-4" />
                </Label>
                <Label>
                  Last name
                  <Input placeholder="Last name" className="mt-4" />
                </Label>
              </div>
              <Label>
                Phone
                <Input placeholder="Email" className="mt-4" />
              </Label>
              <Label>
                Email
                <Input placeholder="Email" className="mt-4" />
              </Label>

              <div className="flex items-center gap-4 justify-end">
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="default">Add</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
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

              <DataTableDateRangeFilter
                column="createdAt"
                placeholder="Select created date"
              />
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
            status: i % 2 === 0 ? "active" : "inactive",
          })),
        ]}
        rowSelection={rowsSelection}
        onRowSelectionChange={setRowsSelection}
        rowSelectionEnable
      />
    </section>
  );
}
