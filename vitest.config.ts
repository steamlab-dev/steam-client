// vitest.config.ts

import path from "node:path";
import { configDefaults, defineConfig } from "vitest/config";

const includeLiveIntegration = process.env.VITEST_INCLUDE_LIVE === "1";

export default defineConfig({
  test: {
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      "**/*.real.test.ts",
      ...(includeLiveIntegration ? [] : ["tests/steam-client/live.integration.test.ts"]),
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
