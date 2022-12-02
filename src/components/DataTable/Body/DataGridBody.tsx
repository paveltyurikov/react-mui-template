import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import useDataGridContext from "../Provider/useDataGridContext";


const DataGridBody: React.FC = () => {
  const { getTableBodyProps, prepareRow, rows } = useDataGridContext();
  return (
    <TableBody {...getTableBodyProps()}>
      {rows.map((row: any) => {
        prepareRow(row);
        return (
          <TableRow {...row.getRowProps()}>
            {row.cells.map((cell: any) => {
              return (
                <TableCell {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default DataGridBody;
