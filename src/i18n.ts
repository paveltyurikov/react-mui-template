import dayjs from "dayjs";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { CONFIG, I18N_LANGUAGES, LOCALES_PATH } from "~/config";
import { isDevEnv } from "~/lib/isEnv";

export const getLocalesUrl = ({
  publicUrl,
  version,
}: {
  publicUrl?: string;
  version: string;
}) => {
  if (publicUrl) {
    return `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}${LOCALES_PATH}${version ? `?version=${version}` : ""}`;
  }
  return `/${LOCALES_PATH}`;
};

const i18nInit = async (publicUrl?: string) =>
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: isDevEnv(),
      fallbackLng: I18N_LANGUAGES.EN,
      supportedLngs: CONFIG.I18N.LANGUAGES,
      ns: CONFIG.I18N.NAMESPACES,
      load: "currentOnly",
      defaultNS: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: getLocalesUrl({
          publicUrl,
          version: dayjs().format(
            isDevEnv() ? "YYYY-MM-DD-HH:mm:ss" : "YYYY-MM-DD-HH",
          ),
        }),
      },
    });

export default i18nInit;
