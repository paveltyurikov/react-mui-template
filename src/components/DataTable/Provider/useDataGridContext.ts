import { useContext } from "react";
import DataGridContext from "./context";


export const useDataGridContext = () => {
  const value = useContext(DataGridContext);
  if (value === undefined) {
    throw Error("useDataGridContext must be used within DataGridContext");
  }
  return value;
};

export default useDataGridContext;
