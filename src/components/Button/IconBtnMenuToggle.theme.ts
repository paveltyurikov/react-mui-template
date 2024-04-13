import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

export const iconBtnMenuToggleTheme = (currentTheme: Theme) => {
  return createTheme(currentTheme, {
    components: {
      MuiMenu: {
        defaultProps: {
          transformOrigin: { horizontal: "right", vertical: "top" },
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        },
      },
    },
  } as ThemeOptions);
};
