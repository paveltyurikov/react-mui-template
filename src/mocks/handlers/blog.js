import { Storage } from "~/mocks/db";
import ModelHandlers from "~/mocks/handlers/ModelHandlers";
import { db } from "../db";


const blogModelHandlers = new ModelHandlers({
  db,
  modelName: "posts",
  apiUrl: "/api/post",
  storage: new Storage(),
}).getHandlers();
const handlers = [...blogModelHandlers];

export default handlers;
