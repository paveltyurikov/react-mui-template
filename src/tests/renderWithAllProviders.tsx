import { FC } from "react";
import { render } from "@testing-library/react";
import i18n from "i18next";
import Backend from "i18next-http-backend/cjs";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { CONFIG, I18N_LANGUAGES } from "~/config";
import { isDevEnv } from "~/lib/isEnv";
import AllProviders from "~/providers/AllProviders";
import eng from "../../public/locales/en/notes.json";

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: isDevEnv(),
    fallbackLng: I18N_LANGUAGES.EN,
    supportedLngs: CONFIG.I18N.LANGUAGES,
    ns: CONFIG.I18N.NAMESPACES,
    defaultNS: "en",
    load: "currentOnly",
    //defaultNS: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        notes: eng,
      },
    },
  });

const renderWithProviders = (
  Component: FC<any>,
  props?: any,
  options?: any,
) => {
  return render(
    <AllProviders>
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Component {...props} />
        </I18nextProvider>
      </MemoryRouter>
    </AllProviders>,

    options,
  );
};

export default renderWithProviders;
