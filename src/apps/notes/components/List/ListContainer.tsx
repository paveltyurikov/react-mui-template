import { useMemo } from "react";
import { Box } from "@mui/material";
import { useNotify } from "~/hooks";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { useListNote } from "~/react-api/notes";
import { ResponseError } from "~/types";
import { INote, INoteFilters } from "~/types/notes";
import { getListNotify } from "../../config/text";
import { useTranslation } from "../../hooks";
import BtnCreateNote from "../ActionButtons/BtnCreate";
import NoteList from "./List";

export type NoteListContainerProps = {
  filters?: INoteFilters;
};

const NoteListContainer = ({ filters = {} }: NoteListContainerProps) => {
  const { showErrorNotify } = useNotify();
  const { t } = useTranslation();

  const LIST_NOTIFY = useMemo(() => getListNotify(t), [t]);

  const {
    data = [],
    isLoading,
    refetch,
  } = useListNote(filters, {
    onError: (error: ResponseError<INote>) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, LIST_NOTIFY.error),
      });
    },
  });

  return (
    <Box>
      <BtnCreateNote refetchDeps={refetch} disabled={isLoading} />
      <NoteList isLoading={isLoading} notes={data} />
    </Box>
  );
};

export default NoteListContainer;
