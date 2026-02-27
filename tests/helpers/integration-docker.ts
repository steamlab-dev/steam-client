import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import net from "node:net";
import { fileURLToPath } from "node:url";

export type IntegrationDockerService = "proxy";

const PROXY_DOCKER_COMPOSE_FILE = fileURLToPath(
  new URL("../fixtures/proxy-docker/docker-compose.yml", import.meta.url),
);
const SOCKS5_PROXY_PORT = 19080;
const HTTP_PROXY_PORT = 19128;
const DEFAULT_STATE_FILE = "/tmp/steam-client-vitest-docker-state.json";

type ExecFileSyncError = Error & {
  status?: number | null;
  stdout?: string | Buffer;
  stderr?: string | Buffer;
};

type IntegrationDockerState = {
  acquiredServices: IntegrationDockerService[];
  proxyImagesPulled: boolean;
};

const INITIAL_STATE: IntegrationDockerState = {
  acquiredServices: [],
  proxyImagesPulled: false,
};

const toOutputText = (value: string | Buffer | undefined): string => {
  if (typeof value === "string") {
    return value;
  }

  if (value instanceof Buffer) {
    return value.toString("utf8");
  }

  return "";
};

const resolveStateFile = (): string => {
  return process.env.VITEST_DOCKER_STATE_FILE ?? DEFAULT_STATE_FILE;
};

const runCommand = (command: string, args: string[]): void => {
  try {
    execFileSync(command, args, {
      stdio: ["ignore", "pipe", "pipe"],
      env: {
        ...process.env,
      },
    });
  } catch (error) {
    const execError = error as ExecFileSyncError;
    const stdout = toOutputText(execError.stdout).trim();
    const stderr = toOutputText(execError.stderr).trim();
    const details = [stderr, stdout].filter((part) => part.length > 0).join("\n");
    const exitCode = execError.status ?? "unknown";
    const commandLine = [command, ...args].join(" ");

    throw new Error(
      details.length > 0
        ? `Command failed (${exitCode}): ${commandLine}\n${details}`
        : `Command failed (${exitCode}): ${commandLine}`,
    );
  }
};

const sleep = async (milliseconds: number): Promise<void> => {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

const waitForTcpPort = async (host: string, port: number, timeoutMs: number): Promise<void> => {
  const startedAt = Date.now();

  while (Date.now() - startedAt <= timeoutMs) {
    const connected = await new Promise<boolean>((resolve) => {
      const socket = net.connect({ host, port });
      let settled = false;

      const finish = (result: boolean): void => {
        if (settled) {
          return;
        }

        settled = true;
        socket.removeAllListeners();
        socket.destroy();
        resolve(result);
      };

      socket.setTimeout(1000);
      socket.once("connect", () => finish(true));
      socket.once("timeout", () => finish(false));
      socket.once("error", () => finish(false));
    });

    if (connected) {
      return;
    }

    await sleep(300);
  }

  throw new Error(`Timed out waiting for ${host}:${port} to accept TCP connections`);
};

const waitForHttpProxyReady = async (
  host: string,
  port: number,
  timeoutMs: number,
): Promise<void> => {
  const startedAt = Date.now();

  while (Date.now() - startedAt <= timeoutMs) {
    const responded = await new Promise<boolean>((resolve) => {
      const socket = net.connect({ host, port });
      let settled = false;
      let rawResponse = "";

      const finish = (result: boolean): void => {
        if (settled) {
          return;
        }

        settled = true;
        socket.destroy();
        resolve(result);
      };

      socket.setTimeout(2000);
      socket.once("connect", () => {
        socket.write("OPTIONS * HTTP/1.1\r\nHost: proxy\r\nConnection: close\r\n\r\n");
      });
      socket.once("timeout", () => finish(false));
      socket.once("error", () => finish(false));
      socket.once("end", () => finish(false));
      socket.on("data", (chunk: Buffer) => {
        rawResponse += chunk.toString("utf8");
        const statusLine = rawResponse.split("\r\n", 1)[0] ?? "";
        if (/^HTTP\/1\.[01] \d{3}\b/u.test(statusLine)) {
          finish(true);
        }
      });
    });

    if (responded) {
      return;
    }

    await sleep(300);
  }

  throw new Error(`Timed out waiting for HTTP proxy readiness on ${host}:${port}`);
};

const logContainerStarted = (container: string): void => {
  console.log(`Container ${container} started`);
};

const logContainerRemoved = (container: string): void => {
  console.log(`Container ${container} removed`);
};

const parseAcquiredServices = (value: unknown): IntegrationDockerService[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  const services = value.filter(
    (service): service is IntegrationDockerService => service === "proxy",
  );
  return Array.from(new Set(services));
};

const readState = (): IntegrationDockerState => {
  try {
    const raw = readFileSync(resolveStateFile(), "utf8");
    const parsed = JSON.parse(raw) as Partial<IntegrationDockerState>;

    return {
      acquiredServices: parseAcquiredServices(parsed.acquiredServices),
      proxyImagesPulled: parsed.proxyImagesPulled === true,
    };
  } catch {
    return { ...INITIAL_STATE };
  }
};

const writeState = (state: IntegrationDockerState): void => {
  writeFileSync(resolveStateFile(), JSON.stringify(state), "utf8");
};

const clearState = (): void => {
  try {
    unlinkSync(resolveStateFile());
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
};

const acquireProxyService = async (state: IntegrationDockerState): Promise<void> => {
  if (state.acquiredServices.includes("proxy")) {
    return;
  }

  if (!state.proxyImagesPulled) {
    runCommand("docker", ["compose", "-f", PROXY_DOCKER_COMPOSE_FILE, "pull"]);
    state.proxyImagesPulled = true;
  }

  runCommand("docker", [
    "compose",
    "-f",
    PROXY_DOCKER_COMPOSE_FILE,
    "up",
    "-d",
    "--force-recreate",
    "--remove-orphans",
  ]);

  await waitForTcpPort("127.0.0.1", SOCKS5_PROXY_PORT, 30_000);
  await waitForTcpPort("127.0.0.1", HTTP_PROXY_PORT, 30_000);
  await waitForHttpProxyReady("127.0.0.1", HTTP_PROXY_PORT, 30_000);

  state.acquiredServices = ["proxy"];
  logContainerStarted("proxy-socks5");
  logContainerStarted("proxy-squid");
};

const runTeardownCommand = (command: string, args: string[], errors: Error[]): boolean => {
  try {
    runCommand(command, args);
    return true;
  } catch (error) {
    errors.push(error instanceof Error ? error : new Error(String(error)));
    return false;
  }
};

export async function acquireIntegrationDockerServices(
  requestedServices: readonly IntegrationDockerService[],
): Promise<void> {
  if (!requestedServices.includes("proxy")) {
    return;
  }

  const state = readState();
  await acquireProxyService(state);
  writeState(state);
}

export async function teardownIntegrationDockerServices(
  options: { force?: boolean } = {},
): Promise<void> {
  const state = readState();
  const shouldTeardownProxy = options.force === true || state.acquiredServices.includes("proxy");

  if (!shouldTeardownProxy) {
    return;
  }

  const teardownErrors: Error[] = [];

  const proxyTeardownSucceeded = runTeardownCommand(
    "docker",
    ["compose", "-f", PROXY_DOCKER_COMPOSE_FILE, "down", "-v", "--remove-orphans"],
    teardownErrors,
  );

  if (proxyTeardownSucceeded) {
    logContainerRemoved("proxy-socks5");
    logContainerRemoved("proxy-squid");
  }

  clearState();

  if (teardownErrors.length > 0) {
    throw new Error(
      `Integration Docker teardown failed (${teardownErrors.length} error(s)): ${teardownErrors.map((error) => error.message).join("; ")}`,
    );
  }
}
