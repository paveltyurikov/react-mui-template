import { Container, Stack, TextField, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation/Navigation";
import ThemeSwitch from "./ThemeSwitch";


const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: (theme) => ({
                xs: theme.spacing(1.25, 0),
                md: theme.spacing(2, 0, 1),
              }),
            }}
          >
            <Navigation />
            <Stack direction="row">
              <TextField
                size="small"
                placeholder="search..."
                sx={{ marginRight: 2 }}
              />
              <ThemeSwitch />
            </Stack>
          </Stack>
        </Container>
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer>
        <Container>
          <Typography>Demo App</Typography>
        </Container>
      </Footer>
    </>
  );
};

export default Layout;
