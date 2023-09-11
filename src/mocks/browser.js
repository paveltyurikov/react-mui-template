import { setupWorker } from "msw";
import { API_HANDLERS } from "./handlers";


export const worker = setupWorker(...API_HANDLERS);
