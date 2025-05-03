import { SnackbarOrigin } from "notistack";

/* HTTP client */
// Constant prepending every api request e.g. /api, /api/v1
export const API_BASE = ["api", "v1"];

/* Localization */
export const LOCALES_PATH = `locales/{{lng}}/{{ns}}.json`;

export const I18N_LANGUAGES = {
  EN: "en",
  RU: "ru",
} as const;

export const CONFIG = {
  I18N: {
    LANGUAGES: [I18N_LANGUAGES.EN] as const,
    NAMESPACES: ["notes"],
  },
} as const;

/* Notifications */
export const MAX_SNACKBARS = 6;

export const SNACKBARS_ORIGIN: SnackbarOrigin = {
  horizontal: "right",
  vertical: "top",
};
