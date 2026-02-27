// vitest.config.ts

import path from "node:path";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      "**/*.real.test.ts",
      "tests/steam-client/live.integration.test.ts",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
