import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { ThemeModes } from "~/constants/defaultTheme";
import { useThemeModeContext } from "~/providers/ThemeProvider/hooks";


const ThemeSwitch = () => {
  const { toggleMode, mode } = useThemeModeContext();
  const handleClick = () => {
    toggleMode();
  };

  return (
    <IconButton onClick={handleClick} color="inherit">
      {mode === ThemeModes.dark ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};


export default ThemeSwitch