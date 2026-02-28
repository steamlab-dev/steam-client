import { describe, expect, it } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import DataParserError from "@/connection/data-parsers/error";
import DataParserFactory from "@/connection/data-parsers/factory";
import type { DataParserEvents } from "@/connection/data-parsers/types";
import WebSocketDataParser from "@/connection/data-parsers/websocket-parser";
import ConnectionError from "@/connection/error";
import type { TransportType } from "@/connection/types";

describe("DataParserFactory", () => {
  it("creates a WebSocketDataParser for ws transport", () => {
    const emitter = new TypedEventEmitter<DataParserEvents>();

    const parser = DataParserFactory.create("ws", emitter);

    expect(parser).toBeInstanceOf(WebSocketDataParser);
  });

  it("throws for unsupported parser transport types", () => {
    const emitter = new TypedEventEmitter<DataParserEvents>();
    const unsupported = "unsupported" as unknown as TransportType;

    try {
      DataParserFactory.create(unsupported, emitter);
      throw new Error("Expected factory to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(DataParserError);
      expect(error).toBeInstanceOf(ConnectionError);
      expect((error as DataParserError).subsystem).toBe("parser");
      expect((error as DataParserError).message).toContain("Unsupported data parser: unsupported");
    }
  });
});
