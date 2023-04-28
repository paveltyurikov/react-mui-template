import { SxProps } from "@mui/material";


export type FormikMUIComponentKey =
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


export type FiledRow = string[];

export type ConfigType = {
  fields: FiledRow[];
  fields_map: any;
  initial_values:{}
};

export type RendererConfigFiledProps = {
  component?: FormikMUIComponentKey;
  label?: string;
  placeholder?: string;

  defaultValue?: string;
  required?: boolean;
  sx?: SxProps;
};

export type RendererConfigFiled = RendererConfigFiledProps & {
  id: string;
  name: string;
};