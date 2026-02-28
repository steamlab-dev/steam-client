import { describe, expect, it } from "vitest";
import SteamClientError from "@/steam-client/error";

describe("SteamClientError", () => {
  it("stores subsystem and message", () => {
    const err = new SteamClientError("client failed", "client");

    expect(err.name).toBe("SteamClientError");
    expect(err.message).toBe("client failed");
    expect(err.subsystem).toBe("client");
  });

  it("stores cause when provided", () => {
    const cause = new Error("root cause");
    const err = new SteamClientError("operation failed", "protocol", cause);

    expect(err.cause).toBe(cause);
    expect(err.subsystem).toBe("protocol");
  });
});
