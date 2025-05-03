import { useQuery } from "@tanstack/react-query";
import NotesApi from "~/client/notes";
import { ResponseError } from "~/types";
import { INote, INoteFilters } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useListNote = (filters: INoteFilters = {}, options = {}) => {
  return useQuery<INote[], ResponseError>({
    queryFn: () => NotesApi.list(filters),
    queryKey: QUERY_KEYS.list(filters),
    ...options,
  });
};

export default useListNote;
