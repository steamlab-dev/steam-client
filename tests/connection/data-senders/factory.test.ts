import { describe, expect, it } from "vitest";
import DataSenderError from "@/connection/data-senders/error";
import DataSenderFactory from "@/connection/data-senders/factory";
import WebSocketDataSender from "@/connection/data-senders/websocket-sender";
import ConnectionError from "@/connection/error";
import type { TransportType } from "@/connection/types";

describe("DataSenderFactory", () => {
  it("creates a WebSocketDataSender for ws transport", () => {
    const sender = DataSenderFactory.create("ws");

    expect(sender).toBeInstanceOf(WebSocketDataSender);
  });

  it("throws for unsupported sender transport types", () => {
    const unsupported = "unsupported" as unknown as TransportType;

    try {
      DataSenderFactory.create(unsupported);
      throw new Error("Expected factory to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(DataSenderError);
      expect(error).toBeInstanceOf(ConnectionError);
      expect((error as DataSenderError).subsystem).toBe("sender");
      expect((error as DataSenderError).message).toContain("Unsupported data sender: unsupported");
    }
  });
});
