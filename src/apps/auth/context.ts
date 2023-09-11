import React from "react";
import { MutateOptions } from "react-query";
import { IUser } from "~/lib/types";
import { ILogin } from "./types";


export type Token = {
  access: string;
  refresh: string;
};

export type AuthContextValue = {
  isAuthenticated: boolean;
  loggedInUser: IUser | null | undefined;
  setAuthTokens: (token: Token) => void;
  clearSession: () => void;
  obtainTokens: (login: ILogin, options?: MutateOptions) => void;
};

const AuthContext = React.createContext<AuthContextValue>({
  isAuthenticated: false,
  loggedInUser: null,
} as AuthContextValue);

export const useAuthContext = () => {
  const value = React.useContext(AuthContext);
  if (value === undefined) {
    throw Error("useAuthContext must be used inside AuthContextProvider");
  }
  return value;
};

export default AuthContext;
