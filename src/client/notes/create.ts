import { httpClient } from "~/lib/http";
import { INote, NoteCreateDto } from "~/types/notes";
import { getListUrl } from "./config";

const createNote = async (data: NoteCreateDto): Promise<INote> => {
  const response = await httpClient.post(getListUrl(), data);
  return response.data;
};

export default createNote;
