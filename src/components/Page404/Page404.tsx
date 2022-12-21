import { Box } from "@mui/material";
import Link from "../Link";


const Page404 = () => {
  return (
    <Box>
      <h1>Error 404</h1>
      <h2>Page does not exist</h2>
      <Box>
        <Link to="/">back to home page</Link>
      </Box>
    </Box>
  );
};

export default Page404;
