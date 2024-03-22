import { http } from "msw";
import blogHandlers from "./handlers/blog";


export const handlers = [
  http.get("/api/test-msw", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "respond to /api/test-msw",
      })
    );
  }),
  ...blogHandlers,
];
