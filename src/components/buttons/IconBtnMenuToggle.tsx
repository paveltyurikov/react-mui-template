import React, { ReactNode, useRef } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, ThemeProvider } from "@mui/material";
import useVisibility from "~/hooks/useVisibility";
import { iconBtnMenuToggleTheme } from "./IconBtnMenuToggle.theme";

export type BtnMenuToggleProps = {
  children: ReactNode;
};
const IconBtnMenuToggle = ({ children }: BtnMenuToggleProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { visibility, toggle, hide } = useVisibility();
  return (
    <ThemeProvider theme={iconBtnMenuToggleTheme}>
      <IconButton ref={ref} onClick={toggle}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={visibility}
        elevation={3}
        onClose={hide}
        anchorEl={ref.current}
      >
        {children}
      </Menu>
    </ThemeProvider>
  );
};

export default IconBtnMenuToggle;
