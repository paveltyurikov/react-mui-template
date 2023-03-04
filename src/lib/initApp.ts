import { worker } from "~/mocks/browser";
import { dbInit } from "~/mocks/db";
import { isDevEnv } from "./isEnv";


const initApp = () => {
  if (isDevEnv()) {
    dbInit();
    worker.start();
  }
};

export default initApp;
