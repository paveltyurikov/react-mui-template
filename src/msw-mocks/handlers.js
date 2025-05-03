import { http } from "msw";
import NOTES_HANDLERS from "./handlers/notes";

export const handlers = [
  http.get("/api/test-msw", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "respond to /api/test-msw",
      }),
    );
  }),
  ...NOTES_HANDLERS,
];
