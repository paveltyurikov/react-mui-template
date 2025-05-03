import { forwardRef } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton, IconButtonProps } from "@mui/material";

const IconBtnClose = forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <HighlightOffIcon />
    </IconButton>
  );
});

IconBtnClose.displayName = "IconBtnClose";

export default IconBtnClose;
