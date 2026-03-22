import { describe, expect, it, vi } from "vitest";
import { EMsg, EResult } from "@/common/steam-language";
import LogOnResponseHandler from "@/steam-protocol/message-handler/handlers/logon-handler";

describe("LogOnResponseHandler", () => {
  const baseMessage = {
    eMsg: EMsg.k_EMsgClientLogOnResponse,
    isProto: true,
    msgName: "ClientLogOnResponse",
    rawBody: Buffer.alloc(0),
    header: {
      client_sessionid: 42,
      steamid: 76561197960265729n,
    },
    body: {
      eresult: EResult.OK,
    },
  };

  it("handles logon response eMsg only", () => {
    const handler = new LogOnResponseHandler({} as never, {} as never);

    expect(handler.canHandle(baseMessage as never)).toBe(true);
    expect(
      handler.canHandle({
        ...baseMessage,
        eMsg: EMsg.k_EMsgClientHello,
      } as never),
    ).toBe(false);
  });

  it("sets session and starts heartbeat when logon succeeds", () => {
    const session = {
      setLoggedIn: vi.fn(),
      setClientId: vi.fn(),
      setSteamId: vi.fn(),
    };
    const heartBeat = {
      start: vi.fn(),
    };
    const handler = new LogOnResponseHandler(session as never, heartBeat as never);

    const result = handler.handle(baseMessage as never);

    expect(result).toBeUndefined();
    expect(session.setLoggedIn).toHaveBeenCalledWith(true);
    expect(heartBeat.start).toHaveBeenCalledWith(25);
    expect(session.setClientId).toHaveBeenCalledWith(42);
    expect(session.setSteamId).toHaveBeenCalledWith(baseMessage.header.steamid);
  });

  it("does not mutate session for non-OK responses", () => {
    const session = {
      setLoggedIn: vi.fn(),
      setClientId: vi.fn(),
      setSteamId: vi.fn(),
    };
    const heartBeat = {
      start: vi.fn(),
    };
    const handler = new LogOnResponseHandler(session as never, heartBeat as never);

    handler.handle({
      ...baseMessage,
      body: { eresult: EResult.Fail },
    } as never);

    expect(session.setLoggedIn).not.toHaveBeenCalled();
    expect(session.setClientId).not.toHaveBeenCalled();
    expect(session.setSteamId).not.toHaveBeenCalled();
    expect(heartBeat.start).not.toHaveBeenCalled();
  });
});
