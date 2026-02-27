import crypto from "node:crypto";
import { teardownIntegrationDockerServices } from "./helpers/integration-docker";

const DOCKER_STATE_FILE_PREFIX = "/tmp/steam-client-vitest-docker-state";

export default async function globalSetup(): Promise<() => Promise<void>> {
  process.env.VITEST_DOCKER_STATE_FILE ??= `${DOCKER_STATE_FILE_PREFIX}-${process.pid}-${Date.now()}-${crypto.randomUUID()}.json`;

  return async () => {
    await teardownIntegrationDockerServices();
  };
}
