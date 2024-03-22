import React from "react";
import {
  ListItemIcon,
  ListItemProps,
  ListItemText,
  MenuItem,
    ListItem
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
  const handleClick = React.useCallback((e:any) => {
    if (onClick) onClick(e);
    navigate(path);
  },[onClick]);

  return (
    <ListItem dense={dense} onClick={handleClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};

export default NavigationItem;
