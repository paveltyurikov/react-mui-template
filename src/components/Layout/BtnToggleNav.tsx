import { useCallback, useMemo } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { IconButton } from "@mui/material";
import { useLayoutStore } from "~/store/layout.store";

const BtnToggleNav = () => {
  const navPanelOpened = useLayoutStore((state) => state.navPanelOpened);
  const setNavPanelOpened = useLayoutStore((state) => state.setNavPanelOpened);

  const Icon = useMemo(
    () => (navPanelOpened ? HighlightOffIcon : WidgetsOutlinedIcon),
    [navPanelOpened],
  );

  const toggleNavPanel = useCallback(() => {
    setNavPanelOpened();
  }, [setNavPanelOpened]);

  return (
    <IconButton onClick={toggleNavPanel} color="inherit">
      <Icon />
    </IconButton>
  );
};

export default BtnToggleNav;
