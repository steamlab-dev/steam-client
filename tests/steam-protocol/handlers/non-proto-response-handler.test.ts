import { describe, expect, it } from "vitest";
import { EMsg } from "@/common/steam-language";
import NonProtoResponseHandler from "@/steam-protocol/message-handler/handlers/non-proto-response-handler";

describe("NonProtoResponseHandler", () => {
  const handler = new NonProtoResponseHandler();

  it("handles only non-proto messages", () => {
    expect(
      handler.canHandle({ isProto: false, eMsg: EMsg.k_EMsgClientVACBanStatus } as never),
    ).toBe(true);
    expect(handler.canHandle({ isProto: true, eMsg: EMsg.k_EMsgClientVACBanStatus } as never)).toBe(
      false,
    );
  });

  it("decodes VAC ban status", () => {
    const raw = Buffer.alloc(4);
    raw.writeUInt32LE(7, 0);

    const decoded = handler.handle({
      eMsg: EMsg.k_EMsgClientVACBanStatus,
      msgName: "",
      isProto: false,
      rawBody: raw,
      header: {},
    } as never);

    expect(decoded.msgName).toBe("ClientVacBanStatus");
    expect(decoded.body).toEqual({ numBans: 7 });
  });

  it("decodes guest passes list", () => {
    const raw = Buffer.alloc(12);
    raw.writeInt32LE(1, 0);
    raw.writeInt32LE(2, 4);
    raw.writeInt32LE(3, 8);

    const decoded = handler.handle({
      eMsg: EMsg.k_EMsgClientUpdateGuestPassesList,
      msgName: "",
      isProto: false,
      rawBody: raw,
      header: {},
    } as never);

    expect(decoded.msgName).toBe("ClientUpdateGuestPassesList");
    expect(decoded.body).toEqual({
      EResult: 1,
      countGuestPassesToGive: 2,
      countGuestPassesToRedeem: 3,
    });
  });

  it("throws for unhandled non-proto messages", () => {
    expect(() =>
      handler.handle({
        eMsg: EMsg.k_EMsgClientLogon,
        msgName: "x",
        isProto: false,
        rawBody: Buffer.alloc(0),
        header: {},
      } as never),
    ).toThrow("Unhandled non proto message");
  });

  it("throws for truncated VAC ban status bodies", () => {
    expect(() =>
      handler.handle({
        eMsg: EMsg.k_EMsgClientVACBanStatus,
        msgName: "",
        isProto: false,
        rawBody: Buffer.alloc(2),
        header: {},
      } as never),
    ).toThrow("Malformed message: expected 4 bytes for VAC ban status body but only 2 available");
  });

  it("throws for truncated guest passes bodies", () => {
    expect(() =>
      handler.handle({
        eMsg: EMsg.k_EMsgClientUpdateGuestPassesList,
        msgName: "",
        isProto: false,
        rawBody: Buffer.alloc(8),
        header: {},
      } as never),
    ).toThrow("Malformed message: expected 12 bytes for guest passes body but only 8 available");
  });
});
