import { forwardRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, IconButtonProps } from "@mui/material";

export type BtnExpandProps = IconButtonProps & {
  expanded: boolean;
  expand: () => void;
};

const IconBtnExpand = forwardRef<HTMLButtonElement, BtnExpandProps>(
  ({ expanded, expand, ...btnProps }, ref) => {
    return (
      <IconButton ref={ref} {...btnProps} onClick={expand}>
        <ExpandMoreIcon
          sx={{ transform: !expanded ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </IconButton>
    );
  },
);

IconBtnExpand.displayName = "IconBtnExpand";

export default IconBtnExpand;
