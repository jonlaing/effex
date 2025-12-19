import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      // Path aliases for effect-ui internal use
      "@core": resolve(__dirname, "packages/effect-ui/src/core"),
      "@dom": resolve(__dirname, "packages/effect-ui/src/dom"),
      // Package aliases for cross-package imports
      "effect-ui": resolve(__dirname, "packages/effect-ui/src/index.ts"),
      "@effect-ui/router": resolve(__dirname, "packages/router/src/index.ts"),
      "@effect-ui/form": resolve(__dirname, "packages/form/src/index.ts"),
      "@effect-ui/primitives": resolve(
        __dirname,
        "packages/primitives/src/index.ts",
      ),
    },
  },
});
