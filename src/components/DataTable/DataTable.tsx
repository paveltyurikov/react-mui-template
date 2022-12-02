import React from "react";
import DataGridBody from "./Body/DataGridBody";
import DataGridHead from "./Head/DataGridHead";
import DataGridProvider from "./Provider/DataGridProvider";
import Table from "./Table/Table";
import { DataGridProps } from "./types";


const DataTable: React.FC<DataGridProps> = ({ columns, data, isLoading }) => {
  return (
    <DataGridProvider isLoading={isLoading} columns={columns} data={data}>
      <Table>
        <DataGridHead />
        <DataGridBody />
      </Table>
    </DataGridProvider>
  );
};

export default DataTable;
