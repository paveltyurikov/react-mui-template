import React, { useCallback, useEffect, useMemo } from "react";
import { AxiosError } from "axios";
import { useLocalStorage } from "react-use";
import useNotify from "~/hooks/useNotify";
import { axios, axiosSetAuthHeader } from "~/lib/axios";
import getNotifyErrorMessage from "~/lib/getNotifyErrorMessage";
import { Token } from "../context";
import { AUTH_LOCAL_STORAGE_NAME, isInvalidTokenError } from "../lib";
import useGetLoggedInUser from "./useGetLoggedInUser";
import useObtainTokens from "./useObtainTokens";
import useRefreshTokens from "./useRefreshTokens";

/*

  How does it work?

  1. Loading tokens
  2. If tokens exists, try load user
  3. If user not loaded try refresh tokens
  4. If tokens refreshed - authenticate immediately
  5. If user loaded - authenticate immediately
  6. If anything failed - clear session
*/

const useAuthProviderValue = () => {
  const { showErrorNotify } = useNotify();
  const [tokens, setTokens] = useLocalStorage<Token | null>(
    AUTH_LOCAL_STORAGE_NAME,
  );

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    if (tokens) {
      axiosSetAuthHeader(axios, tokens.access);
    }
  }, [tokens]);

  const clearSession = useCallback(() => {
    setTokens(null);
    setIsAuthenticated(false);
  }, [setTokens]);

  const setAuthTokens = useCallback(
    (tokens: any) => {
      setTokens(tokens);
      axiosSetAuthHeader(axios, tokens.access);
      setIsAuthenticated(true);
    },
    [setTokens],
  );

  const { mutate: refreshTokens, isLoading: isRefreshTokensLoading } =
    useRefreshTokens({
      enabled: Boolean(tokens?.refresh),
    });

  const { data: loggedInUser, isLoading: isGetLoggedInUserLoading } =
    useGetLoggedInUser({
      enabled: Boolean(tokens?.access),
      onSuccess: () => {
        setIsAuthenticated(true);
      },
      onError: (error: AxiosError) => {
        if (isInvalidTokenError(error)) {
          if (tokens?.refresh) {
            refreshTokens(tokens.refresh, {
              onSuccess: (data) => {
                setAuthTokens(data);
              },
              onError: () => {
                clearSession();
              },
            });
          }
        } else {
          clearSession();
        }
      },
    });

  const { mutate: obtainTokens } = useObtainTokens({
    onSuccess: (data: any) => {
      setAuthTokens(data);
    },
    onError: (error: any) => {
      showErrorNotify({
        message: getNotifyErrorMessage(error, "Login failed", {
          403: error?.response?.data?.detail,
        }),
      });
    },
  });

  const isLoading = isRefreshTokensLoading || isGetLoggedInUserLoading;

  return useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      loggedInUser,
      obtainTokens,
      setAuthTokens,
      clearSession,
    }),
    [
      isAuthenticated,
      isLoading,
      loggedInUser,
      obtainTokens,
      setAuthTokens,
      clearSession,
    ],
  );
};

export default useAuthProviderValue;
