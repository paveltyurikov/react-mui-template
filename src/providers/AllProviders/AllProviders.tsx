import React from "react";
import QueryClientProvider from "../QueryClientProvider";
import SnackbarsProvider from "../SnackbarsProvider";
import ThemeProvider from "../ThemeProvider";


const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SnackbarsProvider>{children}</SnackbarsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
