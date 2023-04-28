import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, IconButtonProps } from "@mui/material";


const IconBtnAdd = React.forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <ArrowBackIosNewIcon />
    </IconButton>
  );
});

export default IconBtnAdd;
