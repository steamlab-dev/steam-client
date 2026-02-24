import { describe, expect, it } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import DataParserFactory from "@/connection/data-parsers/factory";
import type { DataParserEvents } from "@/connection/data-parsers/types";
import WebSocketDataParser from "@/connection/data-parsers/websocket-parser";
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

    expect(() => DataParserFactory.create(unsupported, emitter)).toThrow(
      "Unsupported data parser: unsupported",
    );
  });
});
