import { describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import ProtoMessenger, { ProtoMessengerError } from "@/steam-protocol/messengers/proto-messenger";

describe("ProtoMessenger", () => {
  const createMessenger = () => {
    const protos = { encode: vi.fn().mockReturnValue(Buffer.from([0xbb])) };
    const connection = { send: vi.fn() };
    const headerBuilder = { build: vi.fn().mockReturnValue(Buffer.from([0xaa])) };
    const pendingRequest = {
      add: vi.fn().mockReturnValue(Promise.resolve({ ok: true })),
      resolve: vi.fn().mockReturnValue(true),
      reject: vi.fn().mockReturnValue(true),
      cleanUp: vi.fn(),
    };

    const messenger = new ProtoMessenger(
      protos as never,
      connection as never,
      headerBuilder as never,
      pendingRequest as never,
    );

    return { messenger, protos, connection, headerBuilder, pendingRequest };
  };

  it("sendWithResponse uses fallback EMsgReqToEMsgRes mapping", () => {
    const { messenger, pendingRequest } = createMessenger();

    messenger.sendWithResponse({
      eMsg: EMsg.k_EMsgClientLogon,
      payload: {} as never,
    });

    expect(pendingRequest.add).toHaveBeenCalledWith(EMsg.k_EMsgClientLogOnResponse);
  });

  it("sendWithResponse respects explicit eMsgRes override", () => {
    const { messenger, pendingRequest } = createMessenger();

    messenger.sendWithResponse({
      eMsg: EMsg.k_EMsgClientLogon,
      eMsgRes: EMsg.k_EMsgClientLoggedOff,
      payload: {} as never,
    });

    expect(pendingRequest.add).toHaveBeenCalledWith(EMsg.k_EMsgClientLoggedOff);
  });

  it("cleanup rejects all pending requests", () => {
    const { messenger, pendingRequest } = createMessenger();

    messenger.cleanUp();

    expect(pendingRequest.cleanUp).toHaveBeenCalledWith(expect.any(Error));
    const cleanupError = pendingRequest.cleanUp.mock.calls[0]?.[0] as ProtoMessengerError;
    expect(cleanupError).toBeInstanceOf(ProtoMessengerError);
    expect(cleanupError.subsystem).toBe("proto-messenger");
  });

  it("throws when proto mapping is missing for send", () => {
    const { messenger } = createMessenger();

    expect(() =>
      messenger.send({
        eMsg: 999999 as EMsg,
        payload: {} as never,
      }),
    ).toThrow(ProtoMessengerError);
    expect(() =>
      messenger.send({
        eMsg: 999999 as EMsg,
        payload: {} as never,
      }),
    ).toThrow(/Missing proto mapping/);
  });

  it("throws when response mapping is missing for sendWithResponse", () => {
    const { messenger } = createMessenger();

    expect(() =>
      messenger.sendWithResponse({
        eMsg: 999999 as EMsg,
        payload: {} as never,
      }),
    ).toThrow(ProtoMessengerError);
    expect(() =>
      messenger.sendWithResponse({
        eMsg: 999999 as EMsg,
        payload: {} as never,
      }),
    ).toThrow(/Missing response mapping/);
  });
});
