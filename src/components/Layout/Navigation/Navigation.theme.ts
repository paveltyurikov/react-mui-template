import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";


export const navigationTheme = (currentTheme: Theme) => {
  return createTheme(currentTheme, {
    components: {
      MuiPaper: {
        styleOverrides: {
          rounded: ({ theme }) => ({
            borderRadius: theme.spacing(2),
          }),
          root: ({ theme }) => ({
            minWidth: 300,
            transform: `translate(${theme.spacing(1)},0)`,
          }),
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            height: "3.25rem",
            padding: theme.spacing(0, 3),
          }),
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&>.MuiTypography-body1": {
              fontSize: "1.25rem",
            },
          },
        },
      },
    },
  } as ThemeOptions);
};
