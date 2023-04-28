import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, IconButtonProps } from "@mui/material";


export type BtnExpandProps = IconButtonProps & {
  expanded: boolean;
  expand: () => void;
};

const IconBtnExpand = React.forwardRef<HTMLButtonElement, BtnExpandProps>(
  ({ expanded, expand, ...btnProps }, ref) => {
    return (
      <IconButton ref={ref} {...btnProps} onClick={expand}>
        <ExpandMoreIcon
          sx={{ transform: !expanded ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </IconButton>
    );
  }
);

export default IconBtnExpand;
