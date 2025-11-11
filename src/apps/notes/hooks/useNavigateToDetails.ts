import { useCallback } from "react";
import { useNavigate } from "react-router";
import { INote } from "~/types/notes";
import { getDetailsUrl } from "../config/ui-urls";

const useNavigateToDetailsNote = () => {
  const navigate = useNavigate();
  return useCallback(
    (id: INote["id"]) => navigate(getDetailsUrl(id)),
    [navigate],
  );
};

export default useNavigateToDetailsNote;
