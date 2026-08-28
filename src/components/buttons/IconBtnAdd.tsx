import { forwardRef } from "react";

import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { IconButton, IconButtonProps } from "@mui/material";

const IconBtnAdd = forwardRef<
  HTMLButtonElement,
  Exclude<IconButtonProps, "children">
>((props, ref) => {
  return (
    <IconButton ref={ref} {...props}>
      <ControlPointOutlinedIcon />
    </IconButton>
  );
});

IconBtnAdd.displayName = "IconBtnAdd";

export default IconBtnAdd;
