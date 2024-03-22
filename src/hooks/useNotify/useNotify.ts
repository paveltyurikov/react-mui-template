import { useMemo } from "react";
import { useSnackbar } from "notistack";


export interface IG {
  message: string;
  "data-testid"?: string;
}

const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();
  return useMemo(
    () => ({
      showWarningNotify: ({ message, "data-testid": dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "warning",
          // @ts-ignore
          "data-testid": `${dataTest}-warning-notify`,
        }),
      showSuccessNotify: ({ message, "data-testid": dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "success",
          // @ts-ignore
          "data-testid": `${dataTest}-success-notify`,
        }),
      showErrorNotify: ({ message, "data-testid": dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "error",
          // @ts-ignore
          "data-testid": `${dataTest}-error-notify`,
        }),
    }),
    [enqueueSnackbar]
  );
};

export default useNotify;
