import { httpClient } from "~/lib/http";
import { INote } from "~/types/notes";
import { getDetailsUrl } from "./config";

const deleteNote = async (id: INote["id"]) => {
  const response = await httpClient.delete(getDetailsUrl(id));
  return response.data;
};

export default deleteNote;
