import { ColumnDef } from "@tanstack/react-table";
import formatDate from "~/lib/formatDate";
import { IPost } from "../../types";
import ButtonCreatePost from "../ActionButtons/BtnCreate";
import ControlsColumn from "./ControlsColumn";
import TitleColumn from "./TitleColumn";


export const TABLE_COLUMNS: ColumnDef<IPost>[] = [
  {
    header: "Title",
    cell: TitleColumn,
  },
  {
    header: "Created",
    accessorFn: (row) => formatDate(row.created_at),
  },
  {
    header: "Updated",
    accessorFn: (row) => formatDate(row.updated_at),
  },
  {
    id: "controls",
    header: () => <ButtonCreatePost>Add post</ButtonCreatePost>,
    cell: ControlsColumn,
  },
];
