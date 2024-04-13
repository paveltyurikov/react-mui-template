import React, { useRef } from "react";
import PendingIcon from "@mui/icons-material/Pending";
import { IconButton, Menu, MenuItem } from "@mui/material";
import useVisibility from "~/hooks/useVisibility";
import ButtonDeletePost from "../ActionButtons/BtnDelete";
import ButtonUpdatePost from "../ActionButtons/BtnUpdate";


const ControlsColumn = ({ row }: { row: any }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { visibility, toggle, hide } = useVisibility();
  return (
    <>
      <IconButton ref={ref} onClick={toggle}>
        <PendingIcon />
      </IconButton>
      <Menu open={visibility} onClose={hide} anchorEl={ref.current}>
        <MenuItem>
          <ButtonUpdatePost post={row.original} variant="text" fullWidth>
            Edit
          </ButtonUpdatePost>
        </MenuItem>
        <MenuItem>
          <ButtonDeletePost post={row.original} variant="text" fullWidth>
            Delete
          </ButtonDeletePost>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ControlsColumn;
