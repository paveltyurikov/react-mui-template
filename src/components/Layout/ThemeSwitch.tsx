import { useCallback, useMemo } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { PaletteMode } from "@mui/material/styles";
import { useLayoutStore } from "~/store/layout.store";

const ThemeSwitch = () => {
  const themeMode = useLayoutStore((state) => state.themeMode);
  const setMode = useLayoutStore((state) => state.setMode);

  const handleClick = useCallback(() => {
    const nextMode: PaletteMode = themeMode === "light" ? "dark" : "light";
    setMode(nextMode);
  }, [setMode, themeMode]);

  const Icon = useMemo(
    () => (themeMode === "dark" ? Brightness7Icon : Brightness4Icon),
    [themeMode],
  );

  return (
    <IconButton onClick={handleClick} color="inherit">
      <Icon />
    </IconButton>
  );
};

export default ThemeSwitch;
