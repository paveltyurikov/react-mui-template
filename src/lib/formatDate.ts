import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DATE_PARSE_FORMATS, DEFAULT_DATE_FORMAT } from "~/constants/date";
import { DEFAULT_EMPTY_PLACEHOLDER } from "~/constants/defaultText";


dayjs.extend(customParseFormat);

export default function formatDate(
  date?: string | null,
  pattern = DEFAULT_DATE_FORMAT,
  error: string = "Invalid date"
) {
  if (date === null || date === undefined) {
    return DEFAULT_EMPTY_PLACEHOLDER;
  }

  const isoDate = dayjs(date, DATE_PARSE_FORMATS, true);
  return isoDate.isValid() ? isoDate.format(pattern) : error;
}
