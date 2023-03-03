import { ColumnDef } from "@tanstack/react-table";
import { IPost } from "../../types";
import ControlsColumn from "./ControlsColumn";
import formatDate from "~/lib/formatDate";


export const TABLE_COLUMNS: ColumnDef<IPost>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Created",
    accessorFn: (row) => formatDate(row.created),
  },
  {
    header: "Updated",
    accessorFn: (row) => formatDate(row.updated),
  },
  {
    header: "Deleted",
    accessorFn: (row) => formatDate(row.deleted),
  },
  {
    id: "controls",
    cell: ControlsColumn,
  },
];
