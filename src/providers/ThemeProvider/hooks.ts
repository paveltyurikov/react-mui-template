import { useMemo } from "react";
import { getDefaultTheme } from "~/constants/defaultTheme";
import { useLayoutStore } from "~/store/layout.store";

export const useDefaultTheme = () => {
  const themeMode = useLayoutStore((state) => state.themeMode);
  const toggleMode = useLayoutStore((state) => state.setMode);

  const theme = useMemo(() => getDefaultTheme(themeMode), [themeMode]);

  return { theme, toggleMode, themeMode };
};
