import { forwardRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, IconButtonProps } from "@mui/material";

const IconBtnAdd = forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <ArrowBackIosNewIcon />
    </IconButton>
  );
});

IconBtnAdd.displayName = "IconBtnAdd";

export default IconBtnAdd;
