import createUrl from "~/lib/createUrl";

export const getListUrl = () =>
  createUrl(["api", "post"]);

export const getDetailsUrl = (id: string) =>
  createUrl(["api", "post", id]);
