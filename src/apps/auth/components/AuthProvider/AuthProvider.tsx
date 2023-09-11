import React from "react";
import AuthContext from "../../context";
import useAuthProviderValue from "../../hooks/useAuthProviderValue";
import Login from "../Login";


const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useAuthProviderValue();

  if (value.isLoading) {
    return <>loading...</>;
  }

  return (
    <AuthContext.Provider
        // @ts-ignore
        value={value}
    >
      {value.isAuthenticated ? <>{children}</> : <Login />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
