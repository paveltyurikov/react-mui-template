import { forwardRef } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, IconButtonProps } from "@mui/material";

const IconBtnAdd = forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <AddCircleOutlineIcon />
    </IconButton>
  );
});

IconBtnAdd.displayName = "IconBtnAdd";

export default IconBtnAdd;
