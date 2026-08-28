import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router";

import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

export type LinkProps = MuiLinkProps & RouterLinkProps;

const Link = forwardRef<HTMLButtonElement, Exclude<LinkProps, "children">>(
  ({ children, to, ...linkProps }, ref) => {
    return (
      <MuiLink ref={ref} component={RouterLink} to={to} {...linkProps}>
        {children}
      </MuiLink>
    );
  },
);

Link.displayName = "Link";

export default Link;
