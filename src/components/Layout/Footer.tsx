import { Box } from "@mui/material";
import { ReactNode } from "~/lib/types";


const Footer = ({ children }: ReactNode) => {
  return <Box component="footer" sx={{padding:theme=>theme.spacing(4,2)}}>{children}</Box>;
};

export default Footer;
