import { rest } from "msw";


const handlers = [
  rest.get("/api/post", (req, res, ctx) => {
    return res(ctx.json(require("../json/blog-post-list.json")));
  }),
  rest.post("/api/post", (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.patch("/api/post/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete("/api/post/:id", (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];

export default handlers;
