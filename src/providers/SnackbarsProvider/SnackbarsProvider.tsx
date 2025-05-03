import { ReactNode, useRef } from "react";
import { SnackbarProvider } from "notistack";
import { MAX_SNACKBARS, SNACKBARS_ORIGIN } from "~/config";
import CloseButton from "./CloseButton";

const SnackbarsProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);

  return (
    <SnackbarProvider
      ref={ref}
      maxSnack={MAX_SNACKBARS}
      anchorOrigin={SNACKBARS_ORIGIN}
      action={<CloseButton />}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarsProvider;
