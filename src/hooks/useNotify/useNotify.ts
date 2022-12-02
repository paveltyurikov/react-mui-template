import { useCallback } from "react";
import { useSnackbar } from "notistack";


export interface IG {
  message: string;
  dataTest?: string;
}

const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();
  return {
    showWarningNotify: useCallback(
      ({ message, dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "warning",
          // @ts-ignore
          "data-test": `${dataTest}-success-notify`,
        }),
      [enqueueSnackbar]
    ),
    showSuccessNotify: useCallback(
      ({ message, dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "success",
          // @ts-ignore
          "data-test": `${dataTest}-success-notify`,
        }),
      [enqueueSnackbar]
    ),
    showErrorNotify: useCallback(
      ({ message, dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "error",
          // @ts-ignore
          "data-test": `${dataTest}-error-notify`,
        }),
      [enqueueSnackbar]
    ),
  };
};

export default useNotify;
