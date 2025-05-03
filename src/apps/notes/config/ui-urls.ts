import createUrl from "~/lib/createUrl";

export const POST_PATH = "notes";

export const getListUrl = () => createUrl(["note"]);

export const getDetailsUrl = (id: string) => createUrl(["note", id]);
