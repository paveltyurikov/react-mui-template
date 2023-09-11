import React from "react";
import AuthProvider from "~/apps/auth/components/AuthProvider";
import QueryClientProvider from "../QueryClientProvider";
import SnackbarsProvider from "../SnackbarsProvider";
import ThemeProvider from "../ThemeProvider";


const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SnackbarsProvider>
          <AuthProvider>{children}</AuthProvider>
        </SnackbarsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AllProviders;
