import { describe, expect, it } from "vitest";
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

    expect(() => TransportFactory.create(unsupported)).toThrow(
      "Unsupported transport: unsupported",
    );
  });
});
