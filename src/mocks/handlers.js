import { rest } from "msw";


export const handlers = [
  rest.get("/api/test-msw", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "respond to /api/test-msw",
      })
    );
  }),
];
