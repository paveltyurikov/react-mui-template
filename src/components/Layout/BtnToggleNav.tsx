import React from "react";
import { IconButton } from "@mui/material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useThemeModeContext } from "~/providers/ThemeProvider/hooks";

const BtnToggleNav = () => {
  const { menuAnchorEl, showMenu, hideMenu } = useThemeModeContext();
  const Icon = Boolean(menuAnchorEl) ? HighlightOffIcon : WidgetsOutlinedIcon;
  return (
    <IconButton onClick={Boolean(menuAnchorEl) ? hideMenu : showMenu} color="inherit">
      <Icon />
    </IconButton>
  );
};

export default BtnToggleNav;
