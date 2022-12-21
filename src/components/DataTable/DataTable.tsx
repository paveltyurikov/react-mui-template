import React from "react";
import Table from "./Table";
import TableBody from "./TableBody";
import DataGridHead from "./TableHead";
import TableProvider from "./TableProvider";
import { DataGridProps } from "./types";


const DataTable: React.FC<DataGridProps> = ({ columns, data, isLoading }) => {
  return (
    <TableProvider isLoading={isLoading} columns={columns} data={data}>
      <Table>
        <DataGridHead />
        <TableBody />
      </Table>
    </TableProvider>
  );
};

export default DataTable;
