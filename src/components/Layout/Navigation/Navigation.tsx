import ContentPaste from "@mui/icons-material/ContentPaste";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import Link from "~/components/Link";
import useAnchorEl from "~/hooks/useAnchorEl";


const Navigation = () => {
  const { anchorEl, open, hide, show } = useAnchorEl();
  return (
    <>
      <IconButton onClick={open ? hide : show}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={hide}>
        <MenuList sx={{ minWidth: 320 }}>
          <MenuItem onClick={hide}>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to={"/"}>Home</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={hide}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link to={"post"}>Example app</Link>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Navigation;
