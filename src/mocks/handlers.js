import { rest } from "msw";
import { AUTH_HANDLERS } from "~/mocks/handlers/auth";
import { BLOG_HANDLERS } from "./handlers/blog";


export const API_HANDLERS = [
  rest.get("/api/test-msw", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "respond to /api/test-msw",
      }),
    );
  }),
  ...BLOG_HANDLERS,
  ...AUTH_HANDLERS,
];
