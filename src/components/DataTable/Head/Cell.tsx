import React from "react";
import { TableCell } from "@mui/material";


const HeaderCell: React.FC<{ column: any }> = ({ column }) => {
  return (
    <TableCell {...column.getHeaderProps()}>
      {column.render("Header")}
    </TableCell>
  );
};

export default HeaderCell;
