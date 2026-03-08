import Long from "long";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import SteamClientError from "@/steam-client/error";
import SteamClient from "@/steam-client/steam-client";
import type { SteamClientEvents } from "@/steam-client/types";
import { SteamProtocolError } from "@/steam-protocol/error";

vi.mock("@/steam-protocol/proto-manager", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/steam-protocol", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-client/services", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-client/games-played-tracker", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-client/session-manager", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-client/message-handlers/ClientPlayingSessionState", () => ({
  default: vi.fn(),
}));
vi.mock("@/common/utils", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@/common/utils")>();
  return {
    ...mod,
    jwtToJson: vi.fn(() => ({ payload: { sub: "76561197960265729" } })),
  };
});

import GamesPlayedTracker from "@/steam-client/games-played-tracker";
import initiateServices from "@/steam-client/services";
import SessionManager from "@/steam-client/session-manager";
import ProtoManager from "@/steam-protocol/proto-manager";
import SteamProtocol from "@/steam-protocol/steam-protocol";

describe("SteamClient", () => {
  const options = {
    steamCM: { host: "127.0.0.1", port: 27017 },
    timeout: 5000,
  };

  const steamProtocol = {
    connect: vi.fn(),
    disconnect: vi.fn(),
    sendWithResponse: vi.fn(),
    send: vi.fn(),
    getSession: vi.fn(() => ({ steamId: Long.fromString("76561197960265729", true) })),
    setSteamId: vi.fn(),
    addMessageHandler: vi.fn(),
  };
  const tracker = {
    track: vi.fn(() => [{ game_id: Long.fromNumber(730) }]),
    untrack: vi.fn(() => [{ game_id: Long.fromNumber(730) }]),
  };
  const session = {
    playingBlocked: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    session.playingBlocked = false;
    vi.mocked(SteamProtocol).mockImplementation(function SteamProtocolMock() {
      return steamProtocol as never;
    });
    vi.mocked(GamesPlayedTracker).mockImplementation(function GamesPlayedTrackerMock() {
      return tracker as never;
    });
    vi.mocked(SessionManager).mockImplementation(function SessionManagerMock() {
      return session as never;
    });
    vi.mocked(initiateServices).mockReturnValue({ authentication: {}, player: {} } as never);
  });

  it("uses provided context or defaults for proto manager and emitter", () => {
    const providedProtos = { provided: true };
    const providedEmitter = new TypedEventEmitter<SteamClientEvents>();
    const client = new SteamClient(options as never, {
      protos: providedProtos as never,
      emitter: providedEmitter,
    });

    expect(client.emitter).toBe(providedEmitter);
    expect(ProtoManager).not.toHaveBeenCalled();

    const defaultClient = new SteamClient(options as never);
    expect(defaultClient.emitter).toBeInstanceOf(TypedEventEmitter);
    expect(ProtoManager).toHaveBeenCalledWith("steam");
  });

  it("connects/disconnects through protocol", async () => {
    const client = new SteamClient(options as never);
    await client.connect();
    await client.disconnect();

    expect(steamProtocol.connect).toHaveBeenCalledTimes(1);
    expect(steamProtocol.disconnect).toHaveBeenCalledTimes(1);
  });

  it("wraps connect failures as SteamClientError with client subsystem", async () => {
    const cause = new SteamProtocolError("protocol connect failed", "protocol");
    steamProtocol.connect.mockRejectedValueOnce(cause);
    const client = new SteamClient(options as never);

    try {
      await client.connect();
      throw new Error("Expected connect to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "client",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from connect without re-wrapping", async () => {
    const original = new SteamClientError("already client error", "client");
    steamProtocol.connect.mockRejectedValueOnce(original);
    const client = new SteamClient(options as never);

    try {
      await client.connect();
      throw new Error("Expected connect to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });

  it("wraps disconnect failures as SteamClientError with client subsystem", () => {
    const cause = new Error("disconnect failed");
    steamProtocol.disconnect.mockImplementationOnce(() => {
      throw cause;
    });
    const client = new SteamClient(options as never);

    try {
      client.disconnect();
      throw new Error("Expected disconnect to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "client",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from disconnect without re-wrapping", () => {
    const original = new SteamClientError("already disconnected", "client");
    steamProtocol.disconnect.mockImplementationOnce(() => {
      throw original;
    });
    const client = new SteamClient(options as never);

    try {
      client.disconnect();
      throw new Error("Expected disconnect to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });

  it("starts playing and kicks existing playing sessions when blocked", async () => {
    session.playingBlocked = true;
    steamProtocol.sendWithResponse.mockResolvedValue({});
    const client = new SteamClient(options as never);

    const result = await client.startPlaying(730);

    expect(steamProtocol.sendWithResponse).toHaveBeenCalledWith({
      eMsg: EMsg.k_EMsgClientKickPlayingSession,
      eMsgRes: EMsg.k_EMsgClientConcurrentSessionsBase,
      payload: { only_stop_game: false },
    });
    expect(tracker.track).toHaveBeenCalled();
    expect(steamProtocol.send).toHaveBeenCalledWith(
      expect.objectContaining({ eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob }),
    );
    expect(result).toEqual(["730"]);
  });

  it("starts playing without kick when not blocked", async () => {
    session.playingBlocked = false;
    const client = new SteamClient(options as never);

    await client.startPlaying(730);

    expect(steamProtocol.sendWithResponse).not.toHaveBeenCalled();
  });

  it("stops playing and sends games played data blob message", () => {
    const client = new SteamClient(options as never);

    const result = client.stopPlaying(730);

    expect(tracker.untrack).toHaveBeenCalledWith(730);
    expect(steamProtocol.send).toHaveBeenCalledWith(
      expect.objectContaining({ eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob }),
    );
    expect(result).toEqual(["730"]);
  });

  it("throws SteamClientError if logonRequest is missing access_token", async () => {
    const client = new SteamClient(options as never);

    try {
      await client.logonRequest({} as never);
      throw new Error("Expected logonRequest to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        message: "access_token is required",
        subsystem: "validation",
      });
    }
  });

  it("wraps logon request protocol failures with protocol subsystem", async () => {
    const cause = new SteamProtocolError("send failed", "protocol");
    steamProtocol.sendWithResponse.mockRejectedValueOnce(cause);
    const client = new SteamClient(options as never);

    try {
      await client.logonRequest({
        access_token: "token",
      } as never);
      throw new Error("Expected logonRequest to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "protocol",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from logonRequest without re-wrapping", async () => {
    const original = new SteamClientError("already protocol error", "protocol");
    steamProtocol.sendWithResponse.mockRejectedValueOnce(original);
    const client = new SteamClient(options as never);

    try {
      await client.logonRequest({
        access_token: "token",
      } as never);
      throw new Error("Expected logonRequest to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });

  it("sends logon and status messages when access token exists", async () => {
    steamProtocol.sendWithResponse.mockResolvedValue({ ok: true });
    const client = new SteamClient(options as never);

    const result = await client.logonRequest({
      access_token: "token",
    } as never);

    expect(steamProtocol.setSteamId).toHaveBeenCalledWith(
      Long.fromString("76561197960265729", true),
    );
    expect(steamProtocol.sendWithResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        eMsg: EMsg.k_EMsgClientLogon,
        payload: expect.objectContaining({ access_token: "token" }),
      }),
    );
    expect(steamProtocol.send).toHaveBeenCalledWith({
      eMsg: EMsg.k_EMsgClientChangeStatus,
      payload: { persona_state: 1 },
    });
    expect(result).toEqual({ ok: true });
  });

  it("adds custom message handlers to protocol", () => {
    const client = new SteamClient(options as never);
    const customHandler = { canHandle: vi.fn(), handle: vi.fn() };

    client.addMsgHandler(customHandler as never);

    expect(steamProtocol.addMessageHandler).toHaveBeenCalledWith(customHandler);
  });

  it("wraps addMsgHandler failures as SteamClientError with client subsystem", () => {
    const cause = new Error("add handler failed");
    steamProtocol.addMessageHandler
      .mockImplementationOnce(() => {})
      .mockImplementationOnce(() => {
        throw cause;
      });
    const client = new SteamClient(options as never);
    const customHandler = { canHandle: vi.fn(), handle: vi.fn() };

    try {
      client.addMsgHandler(customHandler as never);
      throw new Error("Expected addMsgHandler to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "client",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from addMsgHandler without re-wrapping", () => {
    const original = new SteamClientError("already add handler", "client");
    steamProtocol.addMessageHandler
      .mockImplementationOnce(() => {})
      .mockImplementationOnce(() => {
        throw original;
      });
    const client = new SteamClient(options as never);
    const customHandler = { canHandle: vi.fn(), handle: vi.fn() };

    try {
      client.addMsgHandler(customHandler as never);
      throw new Error("Expected addMsgHandler to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });

  it("wraps tracker failures in startPlaying as gameplay subsystem", async () => {
    const cause = new Error("track failed");
    tracker.track.mockImplementationOnce(() => {
      throw cause;
    });
    const client = new SteamClient(options as never);

    try {
      await client.startPlaying(730);
      throw new Error("Expected startPlaying to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "gameplay",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from startPlaying without re-wrapping", async () => {
    const original = new SteamClientError("already gameplay", "gameplay");
    tracker.track.mockImplementationOnce(() => {
      throw original;
    });
    const client = new SteamClient(options as never);

    try {
      await client.startPlaying(730);
      throw new Error("Expected startPlaying to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });

  it("wraps tracker failures in stopPlaying as gameplay subsystem", () => {
    const cause = new Error("untrack failed");
    tracker.untrack.mockImplementationOnce(() => {
      throw cause;
    });
    const client = new SteamClient(options as never);

    try {
      client.stopPlaying(730);
      throw new Error("Expected stopPlaying to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "gameplay",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from stopPlaying without re-wrapping", () => {
    const original = new SteamClientError("already stop", "gameplay");
    tracker.untrack.mockImplementationOnce(() => {
      throw original;
    });
    const client = new SteamClient(options as never);

    try {
      client.stopPlaying(730);
      throw new Error("Expected stopPlaying to throw");
    } catch (err) {
      expect(err).toBe(original);
    }
  });
});
