import { useCallback } from "react";
import { Paper, Stack, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { defaultNavigation } from "~/router";
import { useLayoutStore } from "~/store/layout.store";
import { navigationTheme } from "./Navigation.theme";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  const navPanelOpened = useLayoutStore((state) => state.navPanelOpened);
  const setNavPanelOpened = useLayoutStore((state) => state.setNavPanelOpened);
  const toggleNav = useCallback(() => setNavPanelOpened(), [setNavPanelOpened]);
  return (
    <ThemeProvider
      theme={(theme: Theme) => navigationTheme(theme, navPanelOpened)}
    >
      <Paper>
        <Stack
          id="main-nav"
          component="nav"
          direction="row"
          flexWrap="wrap"
          sx={{
            padding: 0.25,
            width: { sm: navPanelOpened ? "30rem" : "6.5rem" },
          }}
        >
          {defaultNavigation.map(({ path, title, Icon }) => (
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

export default Navigation;
