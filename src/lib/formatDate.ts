import format from "date-fns/format";
import isValid from "date-fns/isValid";
import parseISO from "date-fns/parseISO";
import { DEFAULT_DATE_FORMAT } from "constants/date";
import { DEFAULT_EMPTY_PLACEHOLDER } from "constants/defaultText";


export default function formatDate(
  date?: string | null,
  pattern = DEFAULT_DATE_FORMAT
) {
  if (date === null) {
    return DEFAULT_EMPTY_PLACEHOLDER;
  }
  if (date) {
    const isoDate = parseISO(date);
    if (isValid(isoDate)) {
      return format(isoDate, pattern);
    } else {
      return "Invalid date";
    }
  }

  return DEFAULT_EMPTY_PLACEHOLDER;
}
