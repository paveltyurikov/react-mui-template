import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeModeContext } from "./context";
import { useDefaultTheme } from "./hooks";
import { useVisibility } from "~/hooks";
import useAnchorEl from "~/hooks/useAnchorEl";
export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const {
    anchorEl: menuAnchorEl,
    open: isMenuOpened,
    hide: hideMenu,
    show: showMenu,
  } = useAnchorEl();
  const { theme, toggleMode, mode } = useDefaultTheme();

  return (
    <ThemeModeContext.Provider
      value={{ mode, toggleMode, menuAnchorEl, showMenu, hideMenu }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
