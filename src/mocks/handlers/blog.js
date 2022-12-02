import { rest } from "msw";
import {
  createPost,
  getPostsList,
  getPost,
  updatePost,
  deletePost,
} from "../db";


const handlers = [
  rest.get("/api/post", (req, res, ctx) => {
    return res(ctx.json(getPostsList()));
  }),
  rest.get("/api/post/:id", (req, res, ctx) => {
    return res(ctx.json(getPost(req.params.id)));
  }),
  rest.post("/api/post", (req, res, ctx) => {
    const record = createPost(req.body.data);
    return res(ctx.status(201), ctx.json(record));
  }),
  rest.patch("/api/post/:id", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updatePost(req.params.id, req.body)));
  }),
  rest.delete("/api/post/:id", (req, res, ctx) => {
    deletePost(req.params.id);
    return res(ctx.status(204));
  }),
];

export default handlers;
