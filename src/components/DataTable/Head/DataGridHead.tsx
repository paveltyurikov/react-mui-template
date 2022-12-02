import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import useDataGridContext from "../Provider/useDataGridContext";


const DataGridHead = ({ headerGroups }: { headerGroups: any[] }) => {
  return (
    <TableHead>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <TableCell
              {...column.getHeaderProps()}
            >
              {column.render("Header")}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
};

const TableHeadContainer = () => {
  const { headerGroups } = useDataGridContext();
  return <DataGridHead headerGroups={headerGroups} />;
};

export default TableHeadContainer;
