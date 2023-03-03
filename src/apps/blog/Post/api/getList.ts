import { IPostFilterParams } from "../types";
import { getPostListUrl } from "../urls/api";
import { axios } from "~/lib/axios";


const getPostList = async (filters: IPostFilterParams = {}) => {
  const response = await axios.get(getPostListUrl(), {
    params: filters,
  });
  return response.data;
};

export default getPostList;
