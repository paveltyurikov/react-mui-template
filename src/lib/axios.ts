import Axios, { AxiosInstance } from "axios";
import { JwtToken } from "~/lib/types";


export const axiosSetAuthHeader = (
  instance: AxiosInstance,
  token: JwtToken["access"]
) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const axios = Axios.create({});
