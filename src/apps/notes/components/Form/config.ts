import { TextareaAutosize } from "@mui/material";

export const POST_CONTENT_FIELD_CONFIG = {
  colSx: { minHeight: "60vh" },
  InputProps: {
    inputComponent: TextareaAutosize,
    minRows: 12,
  },
};
