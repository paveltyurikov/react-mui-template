import * as Yup from "yup";
import { getValidationPath } from "~/lib/i18nPath";
import { Translate } from "~/types";
import { NoteCreateDto } from "~/types/notes";

export const INITIAL_VALUES = {
  title: "",
  content: "",
} as NoteCreateDto;

export const getValidationSchema = (t: Translate) =>
  Yup.object().shape({
    title: Yup.string().required(t(getValidationPath("title", "required"))),
    content: Yup.string().required(t(getValidationPath("content", "required"))),
  });
