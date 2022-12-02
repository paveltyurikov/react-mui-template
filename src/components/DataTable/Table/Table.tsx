import {Table as MuiTable} from "@mui/material";
import useDataGridContext from "../Provider/useDataGridContext";


const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getTableProps } = useDataGridContext();
  return (
    <MuiTable  {...getTableProps()}>
      {children}
    </MuiTable>
  );
};

export default Table;
