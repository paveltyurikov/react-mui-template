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
};

export const PALETTE_DARK: PaletteOptions = {
  mode: ThemeModes.dark,
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
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
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
