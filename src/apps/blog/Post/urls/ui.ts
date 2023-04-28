import createUrl from "~/lib/createUrl";

export const getListUrl = () =>
  createUrl(["post"]);

export const getDetailsUrl = (id: string) =>
  createUrl(["post", id]);
