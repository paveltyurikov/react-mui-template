import { createTheme, ThemeOptions, PaletteMode } from "@mui/material/styles";

export const DEFAULT_THEME_OVERRIDES: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
        },
      },
    },
  },
};

export const getDefaultTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
    },
    ...DEFAULT_THEME_OVERRIDES,
  });
