import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton, IconButtonProps } from "@mui/material";


const IconBtnClose = React.forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <HighlightOffIcon />
    </IconButton>
  );
});

export default IconBtnClose;
