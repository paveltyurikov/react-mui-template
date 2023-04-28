import { useCallback } from "react";
import { useSnackbar } from "notistack";


export interface IG {
  message: string;
  "data-testid"?: string;
}

const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    showWarningNotify: useCallback(
      ({ message, "data-testid":dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "warning",
          // @ts-ignore
          "data-testid": `${dataTest}-warning-notify`,
        }),
      [enqueueSnackbar]
    ),
    showSuccessNotify: useCallback(
      ({ message, "data-testid":dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "success",
          // @ts-ignore
          "data-testid": `${dataTest}-success-notify`,
        }),
      [enqueueSnackbar]
    ),
    showErrorNotify: useCallback(
      ({ message, "data-testid":dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "error",
          // @ts-ignore
          "data-testid": `${dataTest}-error-notify`,
        }),
      [enqueueSnackbar]
    ),
  };
};

export default useNotify;
