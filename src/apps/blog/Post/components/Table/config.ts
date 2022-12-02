import formatDate from "lib/formatDate";
import ControlsColumn from "./ControlsColumn";


export const TABLE_COLUMNS = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Created",
    accessor: (row: any) => formatDate(row.created),
  },
  {
    Header: "Updated",
    accessor: (row: any) => formatDate(row.updated),
  },
  {
    Header: "Deleted",
    accessor: (row: any) => formatDate(row.deleted),
  },
  {
    id: "controls",
    Cell: ControlsColumn,
  },
];
