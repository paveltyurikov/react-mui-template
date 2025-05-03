import { useMutation } from "@tanstack/react-query";
import NotesApi from "~/client/notes";
import { INote } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useDeleteNote = (id: INote["id"], options = {}) => {
  return useMutation({
    mutationFn: () => NotesApi.delete(id),
    mutationKey: QUERY_KEYS.delete(id),
    ...options,
  });
};

export default useDeleteNote;
