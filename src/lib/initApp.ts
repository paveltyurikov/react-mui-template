import { worker } from "mocks/browser";
import { isDevEnv } from "./isEnv";


const initApp = () => {
  if (isDevEnv()) {
    worker.start();
  }
};

export default initApp;
