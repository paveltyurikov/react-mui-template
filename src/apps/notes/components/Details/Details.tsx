import { Box, Typography } from "@mui/material";
import formatDate from "~/lib/formatDate";
import { INote } from "~/types/notes";

export type DetailsProps = {
  note?: INote;
};

const Details = ({ note }: DetailsProps) => {
  return note ? (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3">{note.title}</Typography>
      <Typography
        component="div"
        variant="caption"
        sx={{ margin: (theme) => theme.spacing(1, 0, 2, 0) }}
      >
        {formatDate(note.published)}
      </Typography>
      <Typography
        component="div"
        sx={{ margin: (theme) => theme.spacing(4, 0) }}
      >
        {note.content}
      </Typography>
    </Box>
  ) : null;
};

export default Details;
