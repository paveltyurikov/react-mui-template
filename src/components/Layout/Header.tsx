import {AppBar, Box} from "@mui/material";
import { ReactNode } from "~/lib/types";
import {HEADER_HEIGHT} from "~/components/Layout/constants";


const Header = ({ children }: ReactNode) => {
  return <AppBar component="header" sx={{height:`${HEADER_HEIGHT}`}}>{children}</AppBar>;
};

export default Header;
