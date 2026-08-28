import { useNavigate } from "react-router";

import {
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemText,
} from "@mui/material";

import { type NavigationItemType } from "~/lib/types";

const NavigationItem = ({
  title,
  path,
  dense,
  Icon,
  onClick,
}: NavigationItemType & ListItemProps) => {
  const navigate = useNavigate();
  return (
    <ListItem
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
    </ListItem>
  );
};

export default NavigationItem;
