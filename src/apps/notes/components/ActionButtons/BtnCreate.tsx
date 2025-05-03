import AddIcon from "@mui/icons-material/Add";
import { Button, ButtonProps } from "@mui/material";
import { Formik } from "formik";
import DialogWithConfig from "~/components/Dialog/DialogWithConfig";
import mapResponseErrorsToFormik from "~/lib/mapResponseErrorsToFormik";
import { useBtnCreateNote } from "../../hooks";
import RenderFields from "../Form/RenderFields";

export type BtnCreateNoteProps = ButtonProps & {
  refetchDeps?: () => void;
};

const BtnCreateNote = ({ refetchDeps, ...props }: BtnCreateNoteProps) => {
  const {
    DIALOG_PROPS,
    visibility: { visibility, show, hide },
    FORMIK_PROPS,
  } = useBtnCreateNote({
    processResponseErrors: mapResponseErrorsToFormik,
    refetchDeps,
  });
  return (
    <>
      <Button
        data-testid="Note-create-btn"
        startIcon={<AddIcon />}
        {...props}
        onClick={show}
      >
        {DIALOG_PROPS.title}
      </Button>
      <Formik {...FORMIK_PROPS}>
        <DialogWithConfig
          config={DIALOG_PROPS}
          onClose={hide}
          open={visibility}
          maxWidth="md"
          slotProps={{ paper: { sx: { minWidth: 600 } } }}
        >
          <RenderFields />
        </DialogWithConfig>
      </Formik>
    </>
  );
};

export default BtnCreateNote;
