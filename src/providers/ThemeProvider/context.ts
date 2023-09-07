import React from "react";
import { ThemeModes } from "~/constants/defaultTheme";


export type ThemeModeContextValueType = {
  mode: ThemeModes;
  toggleMode: (mode?: ThemeModes) => void;
};
export const ThemeModeContext = React.createContext<ThemeModeContextValueType>({
  mode: ThemeModes.light,
} as ThemeModeContextValueType);
