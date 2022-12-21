import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Link from "../Link";


const Layout = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Link to={"/"}>Home</Link>
        <Link to={"posts"}>Example app</Link>
        <Link to={"404"}>404</Link>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default Layout;
