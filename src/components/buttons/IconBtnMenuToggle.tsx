import React, { ReactNode } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, ThemeProvider } from "@mui/material";

import useAnchorEl from "~/hooks/useAnchorEl";

import { iconBtnMenuToggleTheme } from "./IconBtnMenuToggle.theme";

export type BtnMenuToggleProps = {
  children: ReactNode;
};
const IconBtnMenuToggle = ({ children }: BtnMenuToggleProps) => {
  const { ref, anchorEl, toggle, hide } = useAnchorEl();
  return (
    <ThemeProvider theme={iconBtnMenuToggleTheme}>
      <IconButton ref={ref} onClick={toggle}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        elevation={3}
        onClose={hide}
        anchorEl={anchorEl}
      >
        {children}
      </Menu>
    </ThemeProvider>
  );
};

export default IconBtnMenuToggle;
