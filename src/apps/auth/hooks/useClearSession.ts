import React from "react";
import AuthContext from "../context";


const useClearSession = () => {
  const { clearSession } = React.useContext(AuthContext);
  return clearSession;
};

export default useClearSession;
