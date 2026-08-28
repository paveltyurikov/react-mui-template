import { Outlet } from "react-router";

import { Stack, Toolbar } from "@mui/material";

import BtnToggleNav from "~/components/layout/BtnToggleNav";
import Header from "~/components/layout/Header";
import Main from "~/components/layout/Main";
import Navigation from "~/components/layout/Navigation";
import ThemeSwitch from "~/components/layout/ThemeSwitch";

const Layout = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <Stack direction="row" sx={{ flex: 1, alignItems: "center" }}>
            <BtnToggleNav />
            <Stack direction="row" sx={{ flex: 1, justifyContent: "flex-end" }}>
              <ThemeSwitch />
            </Stack>
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
