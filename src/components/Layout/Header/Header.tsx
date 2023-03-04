import { Box } from "@mui/material";
import { ReactNode } from "~/lib/types";


const Header = ({ children }: ReactNode) => {
  return <Box component="header">{children}</Box>;
};

export default Header;
