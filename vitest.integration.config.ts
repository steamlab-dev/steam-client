import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: false,
    globalSetup: ["./tests/global-setup.ts"],
    include: ["tests/steam-client/connectors.integration.tests.ts"],
    hookTimeout: 120_000,
    maxWorkers: 1,
    fileParallelism: false,
    disableConsoleIntercept: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests"),
    },
  },
});
