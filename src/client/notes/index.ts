import createNote from "./create";
import deleteNote from "./delete";
import getNoteDetails from "./details";
import getNoteList from "./list";
import updateNote from "./update";

const NotesApi = {
  create: createNote,
  delete: deleteNote,
  details: getNoteDetails,
  list: getNoteList,
  update: updateNote,
};

export default NotesApi;
