import HomeIcon from "@mui/icons-material/Home";
import * as Yup from "yup";
import {getListUrl} from "~/apps/blog/Post/urls/ui";
import { createFieldConfig } from "~/components/FormRenderer/lib";
import { ConfigType } from "~/components/FormRenderer/types";
import PostDetailsContainer from "./components/Details/DetailsContainer";
import PostListContainer from "./components/Table/Table";
// import { VALIDATION_ERRORS } from "./text/dialog";
import { PostCreateDto, IPostFilters  } from "./types";

// Router and Nav
export const POST_ROUTE = {
  path: getListUrl(),
  element: <PostListContainer />,
}

export const POST_DETAILS_ROUTE = {
  path: `${getListUrl()}:id/`,
  element: <PostDetailsContainer />,
}

export const POST_NAV_ITEM = {
  path: POST_ROUTE.path,
  title: "Post",
  Icon: HomeIcon,
};


// QueryKey getters
export const QUERY_KEY = {
  create: ()=>["post", "create"],
  list: (filters: IPostFilters) => ["posts", "list", filters],
  details: (id: string) => ["post", "details", id],
  update: (id: string) => ["post", "update", id],
  delete: (id: string) => ["post", "delete", id],
};



// Forms
export const INITIAL_VALUES = {
    title: "",
    content: "",
} as PostCreateDto;

export const VALIDATION_SCHEMA = {
  create: Yup.object().shape({
      }),
  update: Yup.object().shape({
      })
};

export const rendererConfig: ConfigType = {
  fields: [["title", "content", ]],
  fields_map: {
    title: createFieldConfig("title", {
    placeholder: "Enter title",
    label: "title",
    }),
    content: createFieldConfig("content", {
    placeholder: "Enter content",
    label: "content",
    }),
  },
  initial_values: INITIAL_VALUES,
};







