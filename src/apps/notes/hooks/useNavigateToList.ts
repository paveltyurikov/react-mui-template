import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getListUrl } from "~/apps/notes/urls/ui";


const useNavigateToListPost = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(getListUrl()), [navigate]);
};

export default useNavigateToListPost
