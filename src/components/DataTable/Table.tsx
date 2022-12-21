import { Table as MuiTable } from "@mui/material";


const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MuiTable>{children}</MuiTable>;
};

export default Table;
