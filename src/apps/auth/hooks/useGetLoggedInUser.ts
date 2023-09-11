import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { IUser } from "~/lib/types";
import getLoggedInUser from "../api/getLoggedInUser";


export const KEY = "USER/GET_ME";

const useGetLoggedInUser = (options = {}) => {
  return useQuery<IUser, AxiosError>(KEY, () => getLoggedInUser(), options);
};

export default useGetLoggedInUser;
