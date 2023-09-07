import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button, ButtonProps } from "@mui/material";


const BtnBack = React.forwardRef<
  HTMLButtonElement,
  Exclude<ButtonProps, "children" >
>((props, ref) => {
  return (
    <Button ref={ref} {...props} startIcon={<ArrowBackIosNewIcon/>}>
      Back
    </Button>
  );
});

export default BtnBack;
