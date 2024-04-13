import React from "react";
import { Paper } from "@mui/material";
import { useThemeModeContext } from "~/providers/ThemeProvider/hooks";

export type MainProps = { children: React.ReactNode };

const MAIN_SX = {
  display: "flex",
  width: "100%",
  overflowY: "auto",
  padding: "0 1.75rem",
  flexFlow: "column nowrap",
  marginLeft: { xs: 0, sm: 2 },
};

const Main = ({ children }: MainProps) => {
  const { menuAnchorEl, hideMenu } = useThemeModeContext();
  return (
    <Paper component="main" sx={MAIN_SX}>
      {children}
    </Paper>
  );
};

export default Main;
