import path from "path";

import { defineConfig } from "vitest/config";


// https://vitejs.dev/config/

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
