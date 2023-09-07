import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Fade,
  IconButton,
  List,
  Paper,
  Popper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import IconBtnClose from "~/components/Button/IconBtnClose";
import useAnchorEl from "~/hooks/useAnchorEl";
import { navigationTheme } from "./Navigation.theme";
import NavigationItem from "./NavigationItem";
import { defaultNavigation } from "~/router";


const Navigation = ({ dense = false }) => {
  const { anchorEl, open, hide, show } = useAnchorEl();
  const Icon = open ? CloseIcon : MenuIcon;
  return (
    <ThemeProvider theme={navigationTheme}>
      <IconButton onClick={open ? hide : show}>
        <Icon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorEl}
        transition
        placement={"bottom-end"}
        role="menu"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={240}>
            <Paper data-testid="navigation-dialog">
              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={1}
                  sx={{ padding: (theme) => theme.spacing(0.5, 0.5, 0, 0) }}
                >
                  <IconBtnClose size="small" onClick={hide} />
                </Stack>
                <List dense={dense}>
                  {defaultNavigation.map(({ path, title, Icon }) => (
                    <NavigationItem
                      key={path}
                      path={path}
                      title={title}
                      Icon={Icon}
                      onClick={hide}
                    />
                  ))}
                </List>
              </Stack>
            </Paper>
          </Fade>
        )}
      </Popper>
    </ThemeProvider>
  );
};

export default Navigation;
