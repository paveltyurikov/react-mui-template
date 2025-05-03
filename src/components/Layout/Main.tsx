import { ReactNode } from "react";
import { Paper } from "@mui/material";

export type MainProps = { children: ReactNode };

const MAIN_SX = {
  display: "flex",
  width: "100%",
  overflowY: "auto",
  padding: "0 1.75rem",
  flexFlow: "column nowrap",
  marginLeft: { xs: 0, sm: 2 },
};

const Main = ({ children }: MainProps) => {
  return (
    <Paper component="main" sx={MAIN_SX}>
      {children}
    </Paper>
  );
};

export default Main;
