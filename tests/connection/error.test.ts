import { describe, expect, it } from "vitest";
import ConnectorError from "@/connection/connectors/error";
import DataParserError from "@/connection/data-parsers/error";
import DataSenderError from "@/connection/data-senders/error";
import ConnectionError from "@/connection/error";
import TransportError from "@/connection/protocol-transports/error";

describe("ConnectionError", () => {
  it("stores subsystem and cause", () => {
    const cause = new Error("root failure");
    const error = new ConnectionError("connection failed", "pipeline", cause);

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("ConnectionError");
    expect(error.subsystem).toBe("pipeline");
    expect(error.cause).toBe(cause);
    expect(error.message).toContain("connection failed");
  });

  it("submodule errors are also ConnectionError", () => {
    const errors = [
      new ConnectorError("connector failed"),
      new TransportError("transport failed"),
      new DataParserError("parser failed"),
      new DataSenderError("sender failed"),
    ];

    for (const err of errors) {
      expect(err).toBeInstanceOf(ConnectionError);
    }
  });
});
