import { ReactNode } from "react";

import { AppBar } from "@mui/material";

import { HEADER_HEIGHT } from "~/components/layout/constants";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <AppBar component="header" sx={{ height: `${HEADER_HEIGHT}` }}>
      {children}
    </AppBar>
  );
};

export default Header;
