import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../types";
import { getDetailsUrl } from "../urls/ui";


const useNavigateToDetailsPost = () => {
  const navigate = useNavigate();
  return useCallback(
    (id: IPost["id"]) => navigate(getDetailsUrl(id)),
    [navigate]
  );
};

export default useNavigateToDetailsPost;
