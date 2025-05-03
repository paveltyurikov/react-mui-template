import { useMutation } from "@tanstack/react-query";
import NotesApi from "~/client/notes";
import { NoteCreateDto } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useCreateNote = (options = {}) => {
  return useMutation({
    mutationFn: (data: NoteCreateDto) => NotesApi.create(data),
    mutationKey: QUERY_KEYS.create(),
    ...options,
  });
};

export default useCreateNote;
