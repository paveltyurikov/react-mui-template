import { axios } from "lib/axios";
import { IPostFilterParams } from "../types";
import { getPostListUrl } from "../urls/api";


const getPostList = async (filters: IPostFilterParams = {}) => {
  const response = await axios.get(getPostListUrl(), {
    params: filters,
  });
  return response.data;
};

export default getPostList;
