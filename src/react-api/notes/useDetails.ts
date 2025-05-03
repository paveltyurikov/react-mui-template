import { useQuery } from "@tanstack/react-query";
import NotesApi from "~/client/notes";
import { ResponseError } from "~/types";
import { INote } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useDetailsNote = (id: INote["id"], options = {}) => {
  return useQuery<INote, ResponseError>({
    queryFn: () => NotesApi.details(id),
    queryKey: QUERY_KEYS.details(id),

    enabled: Boolean(id),
    ...options,
  });
};

export default useDetailsNote;
