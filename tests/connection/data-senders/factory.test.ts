import { describe, expect, it } from "vitest";
import DataSenderFactory from "@/connection/data-senders/factory";
import WebSocketDataSender from "@/connection/data-senders/websocket-sender";
import type { TransportType } from "@/connection/types";

describe("DataSenderFactory", () => {
  it("creates a WebSocketDataSender for ws transport", () => {
    const sender = DataSenderFactory.create("ws");

    expect(sender).toBeInstanceOf(WebSocketDataSender);
  });

  it("throws for unsupported sender transport types", () => {
    const unsupported = "unsupported" as unknown as TransportType;

    expect(() => DataSenderFactory.create(unsupported)).toThrow(
      "Unsupported data sender: unsupported",
    );
  });
});
