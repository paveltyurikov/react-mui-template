import { httpClient } from "~/lib/http";
import { INote } from "~/types/notes";
import { getDetailsUrl } from "./config";

const getNoteDetails = async (id: INote["id"]): Promise<INote> => {
  const response = await httpClient.get(getDetailsUrl(id));
  return response.data;
};

export default getNoteDetails;
