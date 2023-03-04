import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "~/components/Layout/Header/Header";
import Navigation from "~/components/Layout/Navigation/Navigation";


const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Box component="main">
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Layout;
