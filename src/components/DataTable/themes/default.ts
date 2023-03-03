import { createTheme } from "@mui/material/styles";
import defaultTheme from "~/constants/defaultTheme";


const theme = createTheme(defaultTheme, {
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: "100%",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "transparent",
          padding: 0,
          height: 72,
          marginBottom: 0,
        },
        root: {
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flex: "1 1 100%",
          flexFlow: "row nowrap",
          marginBottom: 8,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          background: "transparent",
          border: "none",
          fontSize: 12,
          padding: "8px 16px",
        },
        root: {
          border: "none",
          background: defaultTheme.palette.background.paper,
          minHeight: 84,
          maxHeight: "max-content",
          display: "flex",
          flex: "1 0 100%",
          flexFlow: "column nowrap",
          justifyContent: "center",
          "&:first-of-type": {
            borderRadius: ".6em 0 0 .6em",
          },
          "&:last-child": {
            borderRadius: " 0  .6em .6em 0 ",
          },
          overflowWrap: "break-word",
        },
      },
    },
  },
});

export default theme;
