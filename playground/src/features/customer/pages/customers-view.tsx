"use client";

import { DataTable } from "@cmdrs/ui";

export const description = "A collection of health charts.";

export default function CustomersView() {
  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email", size: 300 },
    { accessorKey: "phone", header: "Phone" },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={[
          ...Array.from({ length: 100 }, (_, i) => ({
            name: `Customer ${i + 1}`,
            email: `customer${i + 1}@example.com`,
            phone: `123-456-789${i % 10}`,
          })),
        ]}
      />
    </div>
  );
}
