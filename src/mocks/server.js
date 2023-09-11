import { setupServer } from "msw/node";
import { API_HANDLERS } from "./handlers";

// Setup requests interception using the given handlers.
export const server = setupServer(...API_HANDLERS);
