import {
  createTheme,
  PaletteOptions,
  ThemeOptions,
  darken,
} from "@mui/material/styles";
import { get } from "lodash";
import VirtualListBox from "~/components/Form/VirtualListBox";
import { SHADOWS_DARK, SHADOWS_LIGHT } from "~/constants/defaultThemeShadows";


export const COLORS = {
  antiquewhite: "rgb(250, 235,215)",
} as const;

export enum ThemeModes {
  light = "light",
  dark = "dark",
}

export const PALETTE_LIGHT: PaletteOptions = {
  mode: ThemeModes.light,
  primary: {
    main: "#006BFF", //'#5C56DA',
    contrastText: "#F7F8FC",
  },
  secondary: {
    main: "#15E7A1", //'#00CB08',
    light: "#e8e7ff",
  },
  background: {
    default: COLORS.antiquewhite,
    paper: COLORS.antiquewhite,
  },
  text: {
    primary: "#4D4F5C",
    disabled: "rgba(92,92,92,0.53)",
    secondary: "#999",
  },
  error: {
    main: "#dd5531",
    contrastText: "#F7F8FC",
  },
  divider: "#DFE0EB",
  action: {
    active: "#4D4F5C",
  },
  success: {
    contrastText: "#ffffff",
    main: "#00CB08",
  },
  warning: {
    contrastText: "#ffffff",
    main: "#ffbf00",
  },
};

export const PALETTE_DARK: PaletteOptions = {
  mode: ThemeModes.dark,
  primary: {
    main: "#009688",
    contrastText: "#d5d5d5",
  },
  secondary: {
    main: "#90a4ae",
    contrastText: "#424242",
  },
  background: {
    default: "#303030",
    paper: "#424242",
  },
  text: {
    primary: "#bcaaa4",
    disabled: "#546e7a",
    secondary: "#757575",
    //hint: "#ffff00",
  },
  success: {
    main: "#00bcd4",
    contrastText: "rgba(249,247,247,0.87)",
  },
  divider: "#303030",
};

export const DEFAULT_THEME_OVERRIDES: ThemeOptions = {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: 780,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: ({ theme }) => ({
          borderRadius: `.75rem !important`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ".75rem",
          padding: ".5rem 1.5rem",
          textTransform: "unset",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: ({ theme }) => ({
          borderRadius: theme.spacing(2),
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(2),
        }),
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        ListboxComponent: VirtualListBox,
        loadingText: "loading...",
        noOptionsText: "noOptionsText",
        openOnFocus: true,
        isOptionEqualToValue: (option: unknown, value: unknown) =>
          value === get(option, "id"),
        filterOptions: (x: any) => x,
        getOptionLabel: (option: unknown) => get(option, "name", ""),
        renderOption: (props: any, option: any) => [props, option.name],
      },
    },
  },
};
const HEADERS_FONT_FAMILY =
  '"Merriweather", -apple-system, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif;';

const BODY_FONT_FAMILY =
  '"Noto Serif", -apple-system, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", sans-serif';

export const getDefaultTheme = (mode: ThemeModes) =>
  createTheme({
    palette: {
      mode,
      ...(mode === ThemeModes.light ? PALETTE_LIGHT : PALETTE_DARK),
    },
    shadows: mode === ThemeModes.light ? SHADOWS_LIGHT : SHADOWS_DARK,
    ...DEFAULT_THEME_OVERRIDES,
    typography: {
      fontFamily: BODY_FONT_FAMILY,
      body2: {
        fontSize: "1.75rem",
        whiteSpace: "pre-wrap",
      },
      h1: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
      h2: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
      h3: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
      h4: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
      h5: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
      h6: {
        fontFamily: HEADERS_FONT_FAMILY,
      },
    },
  });
