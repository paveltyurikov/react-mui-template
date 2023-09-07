import { TextareaAutosize } from "@mui/material";
import * as Yup from "yup";
import { VALIDATION_ERRORS } from "../../text/dialog";
import { PostCreateDto } from "../../types";


export const POST_CONTENT_FIELD_CONFIG = {
  colSx: { minHeight: "60vh" },
  InputProps: {
    inputComponent: TextareaAutosize,
    minRows: 10,
  },
};

export const INITIAL_VALUES = {
  title: "",
  content: "",
} as PostCreateDto;

export const VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required(VALIDATION_ERRORS.title.required),
  content: Yup.string().required(VALIDATION_ERRORS.content.required),
});
