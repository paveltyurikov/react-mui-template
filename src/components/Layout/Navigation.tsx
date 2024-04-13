import { Paper, Stack, ThemeProvider } from "@mui/material";
import { navigationTheme } from "./Navigation.theme";
import NavigationItem from "./NavigationItem";
import { defaultNavigation } from "~/router";
import { Theme } from "@mui/material/styles";
import { useThemeModeContext } from "~/providers/ThemeProvider/hooks";

const Navigation = () => {
  const { menuAnchorEl, hideMenu } = useThemeModeContext();
  return (
    <ThemeProvider
      theme={(theme: Theme) => navigationTheme(theme, Boolean(menuAnchorEl))}
    >
      <Paper>
        <Stack
          id="main-nav"
          component="nav"
          direction="row"
          flexWrap="wrap"
          sx={{
            padding: 0.25,
            width: { sm: Boolean(menuAnchorEl) ? "30rem" : "6.5rem" },
          }}
        >
          {defaultNavigation.map(({ path, title, Icon }) => (
            <NavigationItem
              key={path}
              path={path}
              title={title}
              Icon={Icon}
              onClick={hideMenu}
            />
          ))}
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default Navigation;
