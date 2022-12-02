import { rest } from "msw";
import blogHandlers from "./handlers/blog";


export const handlers = [
  rest.get("/api/test-msw", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "respond to /api/test-msw",
      })
    );
  }),
  ...blogHandlers,
];
