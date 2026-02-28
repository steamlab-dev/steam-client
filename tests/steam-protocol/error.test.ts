import { describe, expect, it } from "vitest";
import { EResult } from "@/common/steam-language";
import {
  resolveEResultName,
  SteamProtocolEResultError,
  SteamProtocolError,
} from "@/steam-protocol/error";

describe("steam-protocol error model", () => {
  it("stores subsystem and cause in SteamProtocolError", () => {
    const cause = new Error("root");
    const err = new SteamProtocolError("protocol failed", "protocol", cause);

    expect(err).toBeInstanceOf(Error);
    expect(err.subsystem).toBe("protocol");
    expect(err.cause).toBe(cause);
    expect(err.message).toContain("protocol failed");
  });

  it("stores protoName and exact EResult metadata", () => {
    const err = new SteamProtocolEResultError({
      protoName: "CAuthentication_BeginAuthSessionViaQR_Response",
      eresultCode: EResult.InvalidPassword,
    });

    expect(err.subsystem).toBe("eresult");
    expect(err.protoName).toBe("CAuthentication_BeginAuthSessionViaQR_Response");
    expect(err.eresultCode).toBe(EResult.InvalidPassword);
    expect(err.eresultName).toBe("InvalidPassword");
    expect(err.message).toContain("EResult.InvalidPassword=5");
  });

  it("falls back to Unknown for unmapped result codes", () => {
    const err = new SteamProtocolEResultError({
      protoName: "CFakeProto_Response",
      eresultCode: 999_999,
    });

    expect(err.eresultCode).toBe(999_999);
    expect(err.eresultName).toBe("Unknown");
    expect(err.message).toContain("EResult.Unknown=999999");
    expect(resolveEResultName(999_999)).toBe("Unknown");
  });
});
