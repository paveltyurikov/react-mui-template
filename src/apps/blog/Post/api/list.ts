import { axios } from "~/lib/axios";
import { IPostFilters } from "../types";
import { getListUrl } from "../urls/api";


const getPostList = async (filters?: IPostFilters) => {
  const response = await axios.get(getListUrl(), {
    params: filters,
  });
  return response.data;
};

export default getPostList;
