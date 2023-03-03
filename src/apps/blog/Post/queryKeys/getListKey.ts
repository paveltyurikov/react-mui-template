import { isEmpty } from "lodash";
import { LIST_KEY } from "~/constants/defaultText";
import { IPostFilterParams } from "../types";
import { POST_KEY } from "./base";


const getListKey = (filters?: IPostFilterParams) => {
  return isEmpty(filters)
    ? [POST_KEY, LIST_KEY]
    : [POST_KEY, LIST_KEY, filters];
};

export default getListKey;
