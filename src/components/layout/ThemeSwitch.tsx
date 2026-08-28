import { useCallback, useMemo } from "react";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, useColorScheme } from "@mui/material";
import { PaletteMode } from "@mui/material/styles";

const ThemeSwitch = () => {
  const { mode, setMode } = useColorScheme();

  const handleClick = useCallback(() => {
    const nextMode: PaletteMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  }, [setMode, mode]);

  const Icon = useMemo(
    () => (mode === "dark" ?  DarkModeIcon:LightModeIcon),
    [mode],
  );

  return (
    <IconButton onClick={handleClick} color="inherit">
      <Icon />
    </IconButton>
  );
};

export default ThemeSwitch;
