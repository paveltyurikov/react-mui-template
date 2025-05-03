export const getValidationPath = (name: string, validation: string) => {
  return `form.fields.${name}.validation.${validation}`;
};

export const getFormFieldLabelPath = (name: string) => {
  return `form.fields.${name}.label`;
};

export const getFormFieldInfoPath = (name: string) => {
  return `form.fields.${name}.info`;
};

export const getFormCardLabelPath = (name: string) => {
  return `form.cards.${name}`;
};

export const getButtonsPath = (name: string) => {
  return `buttons.${name}`;
};

export const getDialogTitle = (name: string) => {
  return `dialog.${name}.title`;
};

export const getDialogContentPath = (name: string) => {
  return `dialog.${name}.content`;
};

export const getNotifyPath = (name: string, level: string) => {
  return `notify.${name}.${level}`;
};

export const getTableLabelPath = (name: string) => {
  return `table.labels.${name}`;
};

export const getNavigationPath = (name: string) => {
  return `navigation.${name}`;
};

export const getTitlePath = (name: string) => {
  return `titles.${name}`;
};

export const getCommonLabelPath = (name: string) => {
  return `labels.${name}`;
};

export const getWidgetsDialogsPath = (name: string) => {
  return `widgets.dialog.${name}`;
};

export const getActionsPath = (name: string) => {
  return `actions.${name}`;
};

export const getDropzonePath = (name: string) => {
  return `dropzone.${name}`;
};

export const getErrorsPath = (name: string) => {
  return `errors.${name}`;
};

export const getFooterTabPath = (name: string) => {
  return `footer.${name}`;
};

export const getEditorNotifyPath = (
  stage: "load" | "save",
  level: "success" | "error",
) => {
  return `notify.editor_${stage}_file.${level}`;
};
