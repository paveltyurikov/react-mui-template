import { useMutation } from "@tanstack/react-query";
import NotesApi from "~/client/notes";
import { INote } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useUpdateNote = (id: INote["id"], options = {}) => {
  return useMutation({
    mutationFn: (data: INote) => NotesApi.update(id, data),
    mutationKey: QUERY_KEYS.update(id),
    ...options,
  });
};

export default useUpdateNote;
