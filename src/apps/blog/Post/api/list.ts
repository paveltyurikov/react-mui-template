import { axios } from "~/lib/axios";
import { IPostFilters } from "../types";
import { getListUrl } from "../urls/api";


const getPostList = async (filters?: IPostFilters) => {
  console.log("[getPostList]")
  const response = await axios.get(getListUrl(), {
    params: filters,
  });
  console.log('[getPostList.response]', response)
  return response.data;
};

export default getPostList;
