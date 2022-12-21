import React from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import DataGridContext from "./context";
import { DataGridProps } from "./types";


const TableProvider: React.FC<
  Omit<DataGridProps, "theme"> & {
    isLoading?: boolean;
    children: React.ReactNode;
  }
> = ({ isLoading, data, columns, children }) => {
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataGridContext.Provider value={{ ...tableInstance, isLoading, data }}>
      {children}
    </DataGridContext.Provider>
  );
};

export default TableProvider;
