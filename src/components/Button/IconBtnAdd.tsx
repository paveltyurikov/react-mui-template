import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, IconButtonProps } from "@mui/material";


const IconBtnAdd = React.forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
});

export default IconBtnAdd;
