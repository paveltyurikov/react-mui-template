import React from "react";
import { useMutation } from "react-query";
import logout from "../api/logout";
import AuthContext from "../context";


export const KEY = "USER/LOGOUT";

const useLogout = (options = {}) => {
  const { clearSession } = React.useContext(AuthContext);
  return useMutation(KEY, () => logout(), {
    onSuccess: () => {
      clearSession();
    },
    ...options,
  });
};

export default useLogout;
