import {
  ListItemIcon,
  ListItemProps,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavigationItemType } from "~/lib/types";

const NavigationItem = ({
  title,
  path,
  dense,
  Icon,
  onClick,
}: NavigationItemType & ListItemProps) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      dense={dense}
      onClick={(e) => {
        if (onClick) onClick(e);
        navigate(path);
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </MenuItem>
  );
};

export default NavigationItem;
