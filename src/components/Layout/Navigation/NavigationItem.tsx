import {
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import Link from "~/components/Link";
import { NavigationItemType } from "~/lib/types";


const NavigationItem = ({
  title,
  path,
  dense,
  Icon,
  onClick,
}: Omit<NavigationItemType, 'element'> & ListItemProps) => {
  return (
    <ListItem dense={dense} onClick={onClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText>
        <Link to={path}>{title}</Link>
      </ListItemText>
    </ListItem>
  );
};

export default NavigationItem;
