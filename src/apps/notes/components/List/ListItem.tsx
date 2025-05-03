import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import Link from "~/components/Link";
import formatDate from "~/lib/formatDate";
import { INote } from "~/types/notes";
import { getDetailsUrl } from "../../config/ui-urls";

export type NoteListItemProps = {
  note: INote;
};

const NoteListItemSx = {
  minWidth: "100%",
  marginBottom: (theme: Theme) => theme.spacing(2),
};

const NoteListItem = ({ note }: NoteListItemProps) => {
  return (
    <Box sx={NoteListItemSx}>
      <Link to={getDetailsUrl(note.id)}>
        <Typography variant="h4">{note.title}</Typography>
      </Link>
      <Typography variant="caption">{formatDate(note.published)}</Typography>
    </Box>
  );
};

export default NoteListItem;
