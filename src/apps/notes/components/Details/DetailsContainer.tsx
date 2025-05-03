import { useMemo } from "react";
import { ButtonGroup, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { IconBtnBack } from "~/components/Button";
import { useNotify } from "~/hooks";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useDetailsNote } from "~/react-api/notes";
import { NoteDetailsParams } from "~/types/notes";
import { getDetailsNotify } from "../../config/text";
import { useNavigateToListNote, useTranslation } from "../../hooks";
import BtnDeleteNote from "../ActionButtons/BtnDelete";
import ButtonUpdateNote from "../ActionButtons/BtnUpdate";
import Details from "./Details";

const NoteDetailsContainer = () => {
  const { t } = useTranslation();
  const { id: noteId } = useParams<NoteDetailsParams>();
  const navigateToList = useNavigateToListNote();
  const { showErrorNotify } = useNotify();

  const DETAILS_NOTIFY = useMemo(() => getDetailsNotify(t), [t]);

  const { data, refetch } = useDetailsNote(noteId || "", {
    enabled: Boolean(noteId),
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, DETAILS_NOTIFY.error),
      });
    },
  });
  return (
    <Container>
      <IconBtnBack onClick={navigateToList} />{" "}
      {data ? (
        <ButtonGroup>
          <ButtonUpdateNote note={data} refetchDeps={refetch}>
            Edit
          </ButtonUpdateNote>
          <BtnDeleteNote note={data} refetchDeps={navigateToList}>
            Delete
          </BtnDeleteNote>
        </ButtonGroup>
      ) : null}
      <Details note={data} />
    </Container>
  );
};

export default NoteDetailsContainer;
