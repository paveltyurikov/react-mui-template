import { createTheme, Theme } from "@mui/material/styles";


export const postListTheme = (theme: Theme) =>
  createTheme(theme, {
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
        styleOverrides: {
            root:{
                color: 'inherit'
            }
        },
      },
    },
  });
