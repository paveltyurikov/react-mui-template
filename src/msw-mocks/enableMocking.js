import { isDevEnv } from "~/lib/isEnv";
import { dbInit } from "~/msw-mocks/db";

async function enableMocking() {
  if (!isDevEnv()) {
    return;
  }

  const { worker } = await import("./browser");
  dbInit();

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

export default enableMocking;
