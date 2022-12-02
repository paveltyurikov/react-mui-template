import React from "react";
import { SnackbarProvider } from "notistack";
import { SNACKBARS_ORIGIN, MAX_SNACKBARS } from "constants/sanckbarsConfig";
import CloseButton from "./CloseButton";


const SnackbarsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = React.useRef(null);

  return (
    <SnackbarProvider
      maxSnack={MAX_SNACKBARS}
      ref={ref}
      anchorOrigin={SNACKBARS_ORIGIN}
      action={<CloseButton />}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarsProvider;
