import React from "react";
import { QueryClientProvider as Provider } from "react-query";
import queryClient from "./queryClient";


const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
