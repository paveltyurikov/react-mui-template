import { createContext } from "react";


const DataGridContext = createContext<{ isLoading?: boolean; data: any[] }>({
  isLoading: false,
  data: [],
});

export default DataGridContext;
