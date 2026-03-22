import { describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import SteamProtoConstants from "@/steam-protocol/constants";
import ProtoHeaderBuilder from "@/steam-protocol/senders/common/proto-header-builder";

describe("ProtoHeaderBuilder", () => {
  it("serializes raw eMsg, header length, and encoded header bytes", () => {
    const encodedHeader = Buffer.from([0x10, 0x20, 0x30]);
    const protos = { encode: vi.fn().mockReturnValue(encodedHeader) };
    const session = {
      getSession: vi.fn().mockReturnValue({
        steamId: 76561197960265728n,
        clientId: 1234,
      }),
    };

    const builder = new ProtoHeaderBuilder(protos as never, session as never);
    const buffer = builder.build(EMsg.k_EMsgClientHello, { jobid_source: 12n });

    expect(buffer.readInt32LE(0)).toBe(EMsg.k_EMsgClientHello | SteamProtoConstants.ProtoMask);
    expect(buffer.readInt32LE(4)).toBe(encodedHeader.length);
    expect(buffer.subarray(8)).toEqual(encodedHeader);
    expect(protos.encode).toHaveBeenCalledWith(
      "CMsgProtoBufHeader",
      expect.objectContaining({
        steamid: 76561197960265728n,
        client_sessionid: 1234,
        jobid_source: 12n,
      }),
    );
  });
});
