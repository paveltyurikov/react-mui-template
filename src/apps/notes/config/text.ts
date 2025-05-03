import { getDialogTitle, getNotifyPath } from "~/lib/i18nPath";
import { Translate } from "~/types";

export const getCreateDialog = (t: Translate) => ({
  title: t(getDialogTitle("create")),
  buttons: {
    submit: t("buttons.submit.create"),
    cancel: t("buttons.cancel"),
  },
});

export const getUpdateDialog = (t: Translate) => ({
  title: t(getDialogTitle("update")),
  buttons: {
    submit: t("buttons.submit.update"),
    cancel: t("buttons.cancel"),
  },
});

export const getDeleteDialog = (t: Translate) => ({
  title: t(getDialogTitle("delete")),
  buttons: {
    submit: t("buttons.submit.delete"),
    cancel: t("buttons.cancel"),
  },
});

export const getListNotify = (t: Translate) => ({
  error: t(getNotifyPath("list", "error")),
});
export const getDetailsNotify = (t: Translate) => ({
  error: t(getNotifyPath("details", "error")),
});

export const getCreateNotify = (t: Translate) => ({
  success: t(getNotifyPath("create", "success")),
  error: t(getNotifyPath("create", "error")),
});

export const getUpdateNotify = (t: Translate) => ({
  success: t(getNotifyPath("update", "success")),
  error: t(getNotifyPath("update", "error")),
});

export const getDeleteNotify = (t: Translate) => ({
  success: t(getNotifyPath("delete", "success")),
  error: t(getNotifyPath("delete", "error")),
});

export const getControlButtons = (t: Translate) => ({
  edit: t("buttons.submit.edit"),
  delete: t("buttons.submit.delete"),
  add: t("buttons.submit.add"),
});
