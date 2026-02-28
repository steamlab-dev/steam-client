import Long from "long";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import SteamClient from "@/steam-client/steam-client";
import type { SteamClientEvents } from "@/steam-client/types";

vi.mock("@/steam-protocol/proto-manager", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/steam-protocol", () => ({
  default: vi.fn(),
}));
vi.mock("@/services", () => ({
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

import initiateServices from "@/services";
import GamesPlayedTracker from "@/steam-client/games-played-tracker";
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
      expect.objectContaining({ eMsg: EMsg.k_EMsgClientGamesPlayed }),
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

  it("throws if logonRequest is missing access_token", async () => {
    const client = new SteamClient(options as never);

    await expect(client.logonRequest({} as never)).rejects.toThrow("access_token is required");
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
});
