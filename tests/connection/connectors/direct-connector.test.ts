import { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import DirectConnector from "@/connection/connectors/direct-connector";
import ConnectorError from "@/connection/connectors/error";
import type { ConnectionOptions } from "@/connection/types";
import {
  createEventEmitterSocket,
  type EventEmitterSocket,
  mockConnectSuccess,
} from "../../helpers/socket-mocks";

// Mock the entire 'net' module. This is hoisted by Vitest to the top of the file.
vi.mock("net");

describe("DirectConnector", () => {
  let mockSocket: EventEmitterSocket;
  const options: ConnectionOptions = {
    steamCM: { host: "1.2.3.4", port: 27015 },
    timeout: 5000,
  };

  beforeEach(() => {
    mockSocket = createEventEmitterSocket();
    mockConnectSuccess(mockSocket);

    vi.mocked(Socket).mockImplementation(function () {
      return mockSocket as unknown as Socket;
    });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("should resolve with the socket on a successful connection", async () => {
    await expect(DirectConnector.connect(options)).resolves.toBe(mockSocket);
    expect(mockSocket.connect).toHaveBeenCalledWith(
      options.steamCM.port,
      options.steamCM.host,
      expect.any(Function),
    );
  });

  it("should reject with a ConnectorError when the socket emits an error", async () => {
    const connectPromise = DirectConnector.connect(options);
    const networkError = new Error("ECONNREFUSED");

    mockSocket.emit("error", networkError);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}: ECONNREFUSED`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) => {
      return e.cause === networkError;
    });
  });

  it("should reject with a ConnectorError on timeout", async () => {
    const connectPromise = DirectConnector.connect(options);

    vi.advanceTimersByTime(options.timeout + 1);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}: Socket timed out after ${options.timeout} ms`,
    );
    await expect(connectPromise).rejects.toBeInstanceOf(ConnectorError);
  });

  it("should reject with a ConnectorError if the socket closes cleanly", async () => {
    const connectPromise = DirectConnector.connect(options);

    // The 'false' argument indicates the close was not due to a transmission error.
    mockSocket.emit("close", false);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}: Socket closed by remote end`,
    );
    await expect(connectPromise).rejects.toBeInstanceOf(ConnectorError);
  });

  it("should reject with a ConnectorError if the socket closes due to an error", async () => {
    const connectPromise = DirectConnector.connect(options);

    // The 'true' argument indicates the close was due to a transmission error.
    mockSocket.emit("close", true);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}: Socket closed due to error`,
    );
    await expect(connectPromise).rejects.toBeInstanceOf(ConnectorError);
  });

  it("does not destroy socket again when it is already destroyed", async () => {
    mockSocket.destroyed = true;
    const connectPromise = DirectConnector.connect(options);

    mockSocket.emit("error", new Error("already destroyed"));

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    expect(mockSocket.destroy).not.toHaveBeenCalled();
  });
});
