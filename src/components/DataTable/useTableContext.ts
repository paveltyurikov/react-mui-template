import { useContext } from "react";
import DataGridContext from "./context";


export const useTableContext = () => {
  const value = useContext(DataGridContext);
  if (value === undefined) {
    throw Error("useTableContext must be used within DataGridContext");
  }
  return value;
};

export default useTableContext;
