import { useCallback, useMemo } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton } from "@mui/material";

import { useLayoutStore } from "~/store/layout.store";

const BtnToggleNav = () => {
  const navPanelOpened = useLayoutStore((state) => state.navPanelOpened);
  const setNavPanelOpened = useLayoutStore((state) => state.setNavPanelOpened);

  const Icon = useMemo(
    () => (navPanelOpened ? MenuOpenIcon : MenuIcon ),
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
