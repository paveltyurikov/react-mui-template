import { Box } from "@mui/material";
import { ReactNode } from "~/lib/types";


const Main = ({ children }: ReactNode) => {
  return <Box component="main">{children}</Box>;
};

export default Main;
