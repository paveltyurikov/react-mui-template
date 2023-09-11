import { rest } from "msw";
import { AUTH_ENDPOINTS } from "~/apps/auth/urls/api";
import { db } from "../db";


const AUTH_COOKIE_NAME = "demo-auth-cookie";

const createTokens = (user) => {
  return { access: btoa(user.email), refresh: btoa(user.id) };
};

const getUserFromCookie = (db, request) => {
  const USER_ID_FROM_COOKIE = request.cookies[AUTH_COOKIE_NAME];
  return db.users.findFirst({
    where: {
      id: {
        equals: USER_ID_FROM_COOKIE,
      },
    },
  });
};

const authenticate = (db, request, res, ctx) => {
  const USER_ID_FROM_COOKIE = request.cookies[AUTH_COOKIE_NAME];

  if (!USER_ID_FROM_COOKIE) {
    return res(ctx.status(401), ctx.json({ error: "unauthorized" }));
  }
  const user = getUserFromCookie(db, request);
  if (!user || !user.is_active) {
    return res(
      ctx.status(400),
      ctx.json({ error: "user not found or deactivated" }),
    );
  }
};

const getUserByEmail = (db, email) => {
  return db.users.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });
};

export const AUTH_HANDLERS = [
  rest.get(AUTH_ENDPOINTS.USER_LOGGED_IN,  (req, res, ctx) => {
    authenticate(db, req, res, ctx);
    const user =  getUserFromCookie(db, req)
    if (user) {
      return res(ctx.status(200), ctx.json(user));
    }
    return res(ctx.status(400), ctx.json({ error: "no user" }));
  }),
  rest.post(AUTH_ENDPOINTS.TOKENS_OBTAIN, async (req, res, ctx) => {
    const form = await req.json();
    const user = getUserByEmail(db, form.email);
    if (user && user.password === form.password) {
      return res(
        ctx.status(200),
        ctx.cookie(AUTH_COOKIE_NAME, user.id),
        ctx.json(createTokens(user)),
      );
    }
    return res(ctx.status(403), ctx.json({ email: "no such user" }));
  }),
    rest.post(AUTH_ENDPOINTS.TOKENS_REFRESH, async (req, res, ctx) => {
    const tokens = await req.json();
    const user = getUserByEmail(db, atob(tokens.access));
    if (user && user.id === atob(tokens.refresh)) {
      return res(
        ctx.status(200),
        ctx.cookie(AUTH_COOKIE_NAME, user.id),
        ctx.json(createTokens(user)),
      );
    }
    return res(ctx.status(403), ctx.json({ email: "no such user" }));
  }),
];
