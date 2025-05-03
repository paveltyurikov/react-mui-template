import { INote } from "~/types/notes";
import NoteListItem from "./ListItem";

export type NoteListProps = { isLoading?: boolean; notes: INote[] };

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <>
      {notes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </>
  );
};

export default NoteList;
