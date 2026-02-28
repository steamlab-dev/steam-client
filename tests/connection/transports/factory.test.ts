import { describe, expect, it } from "vitest";
import ConnectionError from "@/connection/error";
import TransportError from "@/connection/protocol-transports/error";
import TransportFactory from "@/connection/protocol-transports/factory";
import WebSocketTransport from "@/connection/protocol-transports/websocket-transport";
import type { TransportType } from "@/connection/types";

describe("TransportFactory", () => {
  it("creates a WebSocket transport for ws transport type", () => {
    const transport = TransportFactory.create("ws");

    expect(transport).toBe(WebSocketTransport);
  });

  it("throws for unsupported transport types", () => {
    const unsupported = "unsupported" as unknown as TransportType;

    try {
      TransportFactory.create(unsupported);
      throw new Error("Expected factory to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(TransportError);
      expect(error).toBeInstanceOf(ConnectionError);
      expect((error as TransportError).subsystem).toBe("transport");
      expect((error as TransportError).message).toContain("Unsupported transport: unsupported");
    }
  });
});
