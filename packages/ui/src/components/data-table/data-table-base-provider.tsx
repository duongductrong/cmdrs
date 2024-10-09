"use client";

import { PaginationState, Table } from "@tanstack/react-table";
import { ReactNode, createContext, useMemo } from "react";
import { useDeepCompareMemoize } from "../use-deep";

export interface DataTableBaseContextState {
  pagination: {
    pageIndex: number;
    pageSize: number;
    totalRecords: number;
    totalPages: number;
  };
  setPagination: (state: PaginationState) => void;
  table: Table<any>;
}

export interface DataTableBaseProviderProps extends DataTableBaseContextState {
  children: ReactNode;
}

export const DataTableBaseContext = createContext<DataTableBaseContextState>(
  {} as DataTableBaseContextState
);

const DataTableBaseProvider = ({
  children,
  table,
  pagination,
  setPagination,
}: DataTableBaseProviderProps) => {
  const values = useMemo<DataTableBaseContextState>(
    () => ({ table, pagination, setPagination }),
    useDeepCompareMemoize([pagination, table, table.getState(), setPagination])
  );

  return (
    <DataTableBaseContext.Provider value={values}>
      {children}
    </DataTableBaseContext.Provider>
  );
};

export default DataTableBaseProvider;
