import React from "react";
import {getDefaultTheme, ThemeModes} from "~/constants/defaultTheme";
import { ThemeModeContext } from "./context";


export const useThemeModeContext = () => {
  const value = React.useContext(ThemeModeContext);
  if (value === undefined) {
    throw Error(
      "useThemeModeContext should be used inside ThemeModeContext.Provider",
    );
  }
  return value;
};



export const useDefaultTheme = () => {
  const [mode, setMode] = React.useState<ThemeModes>(ThemeModes.light);

  const toggleMode = React.useCallback(
    (setTo?: ThemeModes) => {
      if (setTo === undefined) {
        const nextMode =
          mode === ThemeModes.light ? ThemeModes.dark : ThemeModes.light;
        setMode(nextMode);
      } else {
        setMode(setTo);
      }
    },
    [mode],
  );

  const theme = React.useMemo(() => getDefaultTheme(mode), [mode]);

  return { theme, toggleMode, mode };
}
