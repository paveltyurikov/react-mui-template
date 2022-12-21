import React from "react";
import { TableCell, TableHead as MUITableHead, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import useTableContext from "./useTableContext";


const TableHead = ({ getHeaderGroups }: { getHeaderGroups: () => any[] }) => {
  return (
    <MUITableHead>
      {getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <TableCell key={header.id} colSpan={header.colSpan}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MUITableHead>
  );
};

const TableHeadContainer = () => {
  // @ts-ignore
  const { getHeaderGroups } = useTableContext();
  return <TableHead getHeaderGroups={getHeaderGroups} />;
};

export default TableHeadContainer;
