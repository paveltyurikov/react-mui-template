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
          SnackbarProps: {
            // @ts-expect-error used for tests
            "data-testid": `${dataTest}-warning-notify`,
          },
        }),
      showSuccessNotify: ({ message, "data-testid": dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "success",
          SnackbarProps: {
            // @ts-expect-error used for tests
            "data-testid": `${dataTest}-success-notify`,
          },
        }),
      showErrorNotify: ({ message, "data-testid": dataTest }: IG) =>
        enqueueSnackbar(message, {
          variant: "error",
          SnackbarProps: {
            // @ts-expect-error used for tests
            "data-testid": `${dataTest}-error-notify`,
          },
        }),
    }),
    [enqueueSnackbar],
  );
};

export default useNotify;
