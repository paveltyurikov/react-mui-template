import { COMPONENTS_MAP } from "~/components/FormRenderer/constants";

import { RendererConfigFiledProps, RendererConfigFiled } from "./types";


export const createFieldConfig = (
  name: string,
  {
    required = false,
    defaultValue = "",
    component = "TextField",
    label,
    placeholder,
    sx,
  }: RendererConfigFiledProps = {} as RendererConfigFiled
): RendererConfigFiled => ({
  id: name,
  label,
  placeholder,
  component: COMPONENTS_MAP.get(component),
  name,
  defaultValue,
  required,
  sx,
});
