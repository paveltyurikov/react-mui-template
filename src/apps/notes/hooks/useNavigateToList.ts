import { useCallback } from "react";
import { useNavigate } from "react-router";
import { getListUrl } from "../config/ui-urls";

const useNavigateToListNote = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(getListUrl()), [navigate]);
};

export default useNavigateToListNote;
