import { httpClient } from "~/lib/http";
import { NoteUpdateDto } from "~/types/notes";
import { getDetailsUrl } from "./config";

const updateNote = async (id: string, data: NoteUpdateDto) => {
  const response = await httpClient.patch(getDetailsUrl(id), data);
  return response.data;
};

export default updateNote;
