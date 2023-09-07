import React from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps} from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";


export type LinkProps = MuiLinkProps & RouterLinkProps

const Link = React.forwardRef<
  HTMLButtonElement,
  Exclude<LinkProps, "children">
>(({
  children,
  to,
  ...linkProps
}, ref) => {
  return (
    <MuiLink  {...linkProps} component={RouterLink} to={to}>
      {children}
    </MuiLink>
  );
});

export default Link;
