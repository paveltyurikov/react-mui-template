// @ts-nocheck
import React from "react";
import { Skeleton } from "@mui/material";
import { useFlexLayout, useTable } from "react-table";
import { DataGridProps } from "../types";
import DataGridContext from "./context";


const DataGridProvider: React.FC<
  Omit<DataGridProps, "theme"> & {
    isLoading?: boolean;
    children: React.ReactNode;
  }
> = ({ isLoading, data, columns, children }) => {
  const tableData = React.useMemo(
    () => (isLoading ? Array(8).fill({}) : data),
    [data, isLoading]
  );
  const tableColumns = React.useMemo(
    () =>
      isLoading
        ? columns.map((column) => ({
            ...column,
            Cell: <Skeleton width="90%" />,
          }))
        : columns,
    [isLoading, columns]
  );
  const tableInstance = useTable(
    { columns: tableColumns, data: tableData },
    useFlexLayout
  );
  return (
    <DataGridContext.Provider value={{ ...tableInstance }}>
      {children}
    </DataGridContext.Provider>
  );
};

export default DataGridProvider;
