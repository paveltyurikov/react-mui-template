import {
  Autocomplete,
  Checkbox,
  CheckboxWithLabel,
  InputBase,
  RadioGroup,
  Select,
  SimpleFileUpload,
  Switch,
  TextField,
  ToggleButtonGroup,
} from "formik-mui";
import {
  DatePicker,
  DateTimePicker,
  DesktopDatePicker,
  DesktopDateTimePicker,
  DesktopTimePicker,
  MobileDatePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
  StaticTimePicker,
  TimePicker,
} from "formik-mui-lab";


export type MUI =
  | "Autocomplete"
  | "Checkbox"
  | "CheckboxWithLabel"
  | "InputBase"
  | "RadioGroup"
  | "Select"
  | "SimpleFileUpload"
  | "Switch"
  | "TextField"
  | "ToggleButtonGroup"
  | "DatePicker"
  | "DateTimePicker"
  | "DesktopDatePicker"
  | "DesktopDateTimePicker"
  | "DesktopTimePicker"
  | "MobileDatePicker"
  | "MobileDateTimePicker"
  | "MobileTimePicker"
  | "StaticDatePicker"
  | "StaticDateTimePicker"
  | "StaticTimePicker"
  | "TimePicker";

export const COMPONENTS_MAP = new Map<MUI, any>([
  ["Autocomplete", Autocomplete],
  ["Checkbox", Checkbox],
  ["CheckboxWithLabel", CheckboxWithLabel],
  ["InputBase", InputBase],
  ["RadioGroup", RadioGroup],
  ["Select", Select],
  ["SimpleFileUpload", SimpleFileUpload],
  ["Switch", Switch],
  ["TextField", TextField],
  ["ToggleButtonGroup", ToggleButtonGroup],
  ["DatePicker", DatePicker],
  ["DateTimePicker", DateTimePicker],
  ["DesktopDatePicker", DesktopDatePicker],
  ["DesktopDateTimePicker", DesktopDateTimePicker],
  ["DesktopTimePicker", DesktopTimePicker],
  ["MobileDatePicker", MobileDatePicker],
  ["MobileDateTimePicker", MobileDateTimePicker],
  ["MobileTimePicker", MobileTimePicker],
  ["StaticDatePicker", StaticDatePicker],
  ["StaticDateTimePicker", StaticDateTimePicker],
  ["StaticTimePicker", StaticTimePicker],
  ["TimePicker", TimePicker],
]);
