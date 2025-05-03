import { API_BASE } from "~/config";
import createUrl from "~/lib/createUrl";

export const getListUrl = () => createUrl([...API_BASE, "notes"]);

export const getDetailsUrl = (id: string) =>
  createUrl([...API_BASE, "notes", id]);
