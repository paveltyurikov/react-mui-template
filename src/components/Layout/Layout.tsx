import { Stack, Toolbar } from "@mui/material";
import { Outlet } from "react-router";
import BtnToggleNav from "~/components/Layout/BtnToggleNav";
import Header from "~/components/Layout/Header";
import Main from "~/components/Layout/Main";
import Navigation from "~/components/Layout/Navigation";
import ThemeSwitch from "~/components/Layout/ThemeSwitch";

const Layout = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <Stack direction="row" alignItems="center">
            <BtnToggleNav />
            <ThemeSwitch />
          </Stack>
        </Toolbar>
      </Header>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          height: "calc(100vh - 4rem)",
          marginTop: 8,
          padding: { xs: 0.75, sm: 2 },
          boxSizing: "border-box",
        }}
      >
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Stack>
    </>
  );
};

export default Layout;
