import { createTheme, Theme } from "@mui/material/styles";


export const iconBtnMenuToggleTheme = (theme: Theme) =>
  createTheme(theme, {
    components: {
      MuiMenu: {
        defaultProps: {
          transformOrigin: { horizontal: "right", vertical: "top" },
          anchorOrigin: { horizontal: "right", vertical: "bottom" },
        },
      },
    },
  });

export default iconBtnMenuToggleTheme;
