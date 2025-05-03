import { useCallback } from "react";
import queryClient from "~/lib/reactQueryClient";
import { INote } from "~/types/notes";
import { QUERY_KEYS } from "./config";

const useBtnDetailsRefetchNote = () => {
  return useCallback(
    (id: INote["id"]) =>
      queryClient.refetchQueries({
        queryKey: QUERY_KEYS.details(id),
        exact: true,
      }),
    [],
  );
};

export default useBtnDetailsRefetchNote;
