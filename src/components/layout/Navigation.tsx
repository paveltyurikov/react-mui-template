import { useCallback } from "react";

import { Paper, Stack, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { defaultNavigation } from "~/router";
import { useLayoutStore } from "~/store/layout.store";
import { type NavItem } from "~/types/layout";

import { getNavSx, navigationTheme } from "./Navigation.theme";
import NavigationItem from "./NavigationItem";

export type NavigationProps = {
  opened: boolean;
  toggleNav: () => void;
  items: NavItem[];
};

const Navigation = ({ opened, toggleNav, items }: NavigationProps) => {
  return (
    <ThemeProvider theme={(theme: Theme) => navigationTheme(theme, opened)}>
      <Paper>
        <Stack
          id="main-nav"
          component="nav"
          direction="row"
          sx={getNavSx(opened)}
        >
          {items.map(({ path, title, Icon }) => (
            <NavigationItem
              key={path}
              path={path}
              title={title}
              Icon={Icon}
              onClick={toggleNav}
            />
          ))}
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

const NavigationContainer = () => {
  const navPanelOpened = useLayoutStore((state) => state.navPanelOpened);
  const setNavPanelOpened = useLayoutStore((state) => state.setNavPanelOpened);
  const toggleNav = useCallback(() => setNavPanelOpened(), [setNavPanelOpened]);
  return (
    <Navigation
      items={defaultNavigation}
      opened={navPanelOpened}
      toggleNav={toggleNav}
    />
  );
};

export default NavigationContainer;
