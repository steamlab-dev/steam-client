import { describe, expect, it, vi } from "vitest";
import { EMsg, EResult } from "@/common/steam-language";
import ProtoResponseHandler from "@/steam-protocol/message-handler/handlers/proto-handler";

describe("ProtoResponseHandler", () => {
  it("resolves pending proto request on OK result", () => {
    const protos = { decode: vi.fn().mockReturnValue({ eresult: EResult.OK }) };
    const protoMessenger = {
      resolveRequest: vi.fn(),
      rejectRequest: vi.fn(),
    };

    const handler = new ProtoResponseHandler(protos as never, protoMessenger as never);
    const message = {
      eMsg: EMsg.k_EMsgClientLogOnResponse,
      isProto: true,
      msgName: "ClientLogOnResponse",
      rawBody: Buffer.from([1]),
      header: { eresult: EResult.OK },
    };

    const decoded = handler.handle(message as never);

    expect(decoded.body).toEqual({ eresult: EResult.OK });
    expect(protoMessenger.resolveRequest).toHaveBeenCalledWith(EMsg.k_EMsgClientLogOnResponse, {
      eresult: EResult.OK,
    });
    expect(protoMessenger.rejectRequest).not.toHaveBeenCalled();
  });

  it("rejects pending proto request on non-OK result", () => {
    const protos = { decode: vi.fn().mockReturnValue({ eresult: EResult.Fail }) };
    const protoMessenger = {
      resolveRequest: vi.fn(),
      rejectRequest: vi.fn(),
    };

    const handler = new ProtoResponseHandler(protos as never, protoMessenger as never);
    const message = {
      eMsg: EMsg.k_EMsgClientLogOnResponse,
      isProto: true,
      msgName: "ClientLogOnResponse",
      rawBody: Buffer.from([1]),
      header: { eresult: EResult.OK },
    };

    handler.handle(message as never);

    expect(protoMessenger.rejectRequest).toHaveBeenCalledWith(
      EMsg.k_EMsgClientLogOnResponse,
      expect.any(Error),
    );
    expect(protoMessenger.resolveRequest).not.toHaveBeenCalled();
  });

  it("throws when eMsg->proto mapping is missing", () => {
    const protos = { decode: vi.fn() };
    const protoMessenger = {
      resolveRequest: vi.fn(),
      rejectRequest: vi.fn(),
    };

    const handler = new ProtoResponseHandler(protos as never, protoMessenger as never);

    expect(() =>
      handler.handle({
        eMsg: 999999,
        isProto: true,
        msgName: "Unknown",
        rawBody: Buffer.alloc(0),
        header: {},
      } as never),
    ).toThrow("EMsg to Proto name not found");
  });
});
