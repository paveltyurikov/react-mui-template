import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

export const navigationTheme = (theme: Theme, isMenuOpen: boolean) => {
  return createTheme(theme, {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            position: "relative",
            overflowY: "auto",
            padding: "0 .3rem 0 0",
            [theme.breakpoints.down("sm")]: {
              display: isMenuOpen ? "block" : "none",
              position: "fixed",
              top: "4.25rem",
              left: ".4rem",
              height: "calc(100vh - 4.5rem)",
              width: "calc(100vw - .8rem)",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            height: "5rem",
            width: "5rem",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            margin: "0.25rem",
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: ".5rem",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            maxHeight: "50%",
            minHeight: "50%",
            display: "flex",
            flexFlow: "column wrap",
            whiteSpace: "wrap",
            maxWidth: "5rem",
            width: "5rem",
            lineHeight: "1rem",
            textAlign: "center",
            "&>.MuiTypography-body1": {
              fontSize: ".75rem",
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            maxHeight: "50%",
            minHeight: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: "1.75rem",
          },
        },
      },
    },
  } as ThemeOptions);
};
