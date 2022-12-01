import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";


const CloseButton = () => {
  const { closeSnackbar } = useSnackbar();

  const handleClick = () => {
    closeSnackbar();
  };

  return (
    <IconButton onClick={handleClick} sx={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
