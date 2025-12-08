import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@core": resolve(__dirname, "src/core"),
      "@dom": resolve(__dirname, "src/dom"),
    },
  },
});
