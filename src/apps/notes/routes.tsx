import BookIcon from "@mui/icons-material/Book";
import { getListUrl } from "~/apps/notes/config/ui-urls";
import NoteDetailsContainer from "./components/Details/DetailsContainer";
import NoteListContainer from "./components/List/ListContainer";

// Router and Nav
export const POST_ROUTE = {
  path: getListUrl(),
  element: <NoteListContainer />,
};

export const POST_DETAILS_ROUTE = {
  path: `${getListUrl()}:id/`,
  element: <NoteDetailsContainer />,
};

export const POST_NAV_ITEM = {
  path: POST_ROUTE.path,
  title: "Blog",
  Icon: BookIcon,
};
