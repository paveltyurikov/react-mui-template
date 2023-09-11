import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import useLogout from "../../hooks/useLogout";


const BtnLogout = () => {
  const { mutate: logout } = useLogout();
  return (
    <IconButton onClick={() => logout()} color="inherit">
      <ExitToAppIcon />
    </IconButton>
  );
};

export default BtnLogout;
