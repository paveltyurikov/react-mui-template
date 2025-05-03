import { ReactNode } from "react";
import QueryClientProvider from "../QueryClientProvider";
import SnackbarsProvider from "../SnackbarsProvider";
import ThemeProvider from "../ThemeProvider";

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SnackbarsProvider>{children}</SnackbarsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
