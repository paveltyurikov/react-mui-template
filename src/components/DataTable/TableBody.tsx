import React from "react";
import {
  Skeleton,
  TableBody as MuiTableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import useTableContext from "./useTableContext";


const TableBody: React.FC = ({ getRowModel, isLoading }: any) => {
  return (
    <MuiTableBody>
      {getRowModel().rows.map((row: any) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell: any) => {
              return (
                <TableCell key={cell.id}>
                  {isLoading ? (
                    <Skeleton width="90%" />
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

const TableBodyContainer: React.FC = () => {
  // @ts-ignore
  const { getRowModel, isLoading } = useTableContext();
  // @ts-ignore
  return <TableBody getRowModel={getRowModel} isLoading={isLoading} />;
};

export default TableBodyContainer;
