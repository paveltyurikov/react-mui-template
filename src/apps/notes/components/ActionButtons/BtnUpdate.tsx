import EditIcon from "@mui/icons-material/Edit";
import { Button, ButtonProps } from "@mui/material";
import { Formik } from "formik";
import DialogWithConfig from "~/components/Dialog/DialogWithConfig";
import mapResponseErrorsToFormik from "~/lib/mapResponseErrorsToFormik";
import { INote } from "~/types/notes";
import { useBtnUpdateNote } from "../../hooks";
import RenderFields from "../Form/RenderFields";

export type BtnUpdateNoteProps = ButtonProps & {
  note: INote;
  refetchDeps?: () => void;
};

const ButtonUpdateNote = ({
  note,
  refetchDeps,
  ...btnProps
}: BtnUpdateNoteProps) => {
  const { visibility, FORMIK_PROPS, DIALOG_PROPS } = useBtnUpdateNote({
    note,
    processResponseErrors: mapResponseErrorsToFormik,
    refetchDeps,
  });
  return (
    <>
      <Button
        data-testid="Note-update-btn"
        startIcon={<EditIcon />}
        {...btnProps}
        onClick={visibility.show}
      />
      <Formik {...FORMIK_PROPS}>
        <DialogWithConfig
          config={DIALOG_PROPS}
          onClose={visibility.hide}
          open={visibility.visibility}
        >
          <RenderFields />
        </DialogWithConfig>
      </Formik>
    </>
  );
};

export default ButtonUpdateNote;
