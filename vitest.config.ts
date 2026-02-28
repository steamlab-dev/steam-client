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
    coverage: {
      include: ["src/**/*.ts"],
      exclude: [
        "src/common/steam-language/**",
        "src/**/types.ts",
        "src/steam-protocol/hearbeat-manager.ts",
        "src/steam-protocol/message-handler/handlers/non-proto.ts",
      ],
      thresholds: {
        perFile: true,
        branches: 90,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
