import { httpClient } from "~/lib/http";
import { INote, INoteFilters } from "~/types/notes";
import { getListUrl } from "./config";

const getNoteList = async (filters?: INoteFilters): Promise<INote[]> => {
  const response = await httpClient.get(getListUrl(), {
    params: filters,
  });
  return response.data;
};

export default getNoteList;
