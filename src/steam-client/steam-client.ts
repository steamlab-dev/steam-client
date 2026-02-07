import Long from "long";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import type { CMsgClientGamesPlayed } from "@/common/steam-language/protos-definitions/steam/steammessages_clientserver";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import { jwtToJson } from "@/common/utils";
import type { ConnectionOptions } from "@/connection/types";
import initiateServices, { type Services } from "@/services";
import SteamProtoConstants from "@/steam-protocol/constants";
import type { MsgHandler } from "@/steam-protocol/message-handler/types";
import ProtoManager from "@/steam-protocol/proto-manager";
import SteamProtocol from "@/steam-protocol/steam-protocol";
import GamesPlayedTracker from "./games-played-tracker";
import ClientPlayingSessionState from "./message-handlers/ClientPlayingSessionState";
import SessionManager from "./session-manager";
import type { SteamClientEvents } from "./types";

export default class SteamClient {
  private readonly gamesPlayedTracker: GamesPlayedTracker;
  private readonly protos: ProtoManager;
  private readonly steamProtocol: SteamProtocol;
  private readonly session: SessionManager;
  readonly emitter: TypedEventEmitter<SteamClientEvents>;
  readonly services: Services;

  constructor(
    private options: ConnectionOptions,
    context?: {
      protos?: ProtoManager;
      emitter?: TypedEventEmitter<SteamClientEvents>;
    },
  ) {
    this.protos = context?.protos ?? new ProtoManager("steam");
    this.emitter = context?.emitter ?? new TypedEventEmitter<SteamClientEvents>();
    this.steamProtocol = new SteamProtocol(options, {
      emitter: this.emitter,
      protos: this.protos,
    });

    this.services = initiateServices(this.steamProtocol, this.emitter);
    this.gamesPlayedTracker = new GamesPlayedTracker();
    this.session = new SessionManager();

    this.addDefaultMsgHandlers();
  }

  connect() {
    return this.steamProtocol?.connect();
  }

  disconnect() {
    return this.steamProtocol?.disconnect();
  }

  async startPlaying(
    gameId: Long | number | string | (Long | number | string)[],
  ): Promise<string[]> {
    // 1. kick other playing sessions
    if (this.session.playingBlocked) {
      await this.steamProtocol.sendWithResponse({
        eMsg: EMsg.k_EMsgClientKickPlayingSession,
        eMsgRes: EMsg.k_EMsgClientConcurrentSessionsBase, // wait for this message
        payload: { only_stop_game: false },
      });
    }

    const games_played = this.gamesPlayedTracker.track(
      gameId,
      this.steamProtocol.getSession().steamId,
    );

    const payload: CMsgClientGamesPlayed = {
      games_played,
      client_os_type: SteamProtoConstants.Win11,
      cloud_gaming_platform: 0,
      recent_reauthentication: false,
    };

    this.steamProtocol.send({ eMsg: EMsg.k_EMsgClientGamesPlayed, payload });

    return games_played.map((game) => String(game.game_id));
  }

  stopPlaying(gameId: Long | number | string | (Long | number | string)[]): string[] {
    const games_played = this.gamesPlayedTracker.untrack(gameId);

    const payload: CMsgClientGamesPlayed = {
      games_played,
      client_os_type: SteamProtoConstants.Win11,
      cloud_gaming_platform: 0,
      recent_reauthentication: false,
    };

    this.steamProtocol.send({
      eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob,
      payload,
    });

    return games_played.map((game) => String(game.game_id));
  }

  async logonRequest(
    req: SteamProtos["CMsgClientLogon"],
  ): Promise<SteamProtos["CMsgClientLogOnResponse"]> {
    if (!req.access_token) {
      throw new Error("access_token is required");
    }
    const token = jwtToJson(req.access_token);
    const steamId = Long.fromString(token.payload.sub, true);
    this.steamProtocol.setSteamId(steamId);

    const res = await this.steamProtocol.sendWithResponse({
      eMsg: EMsg.k_EMsgClientLogon,
      payload: {
        ...req,
        protocol_version: SteamProtoConstants.ProtocolVersion,
        cell_id: 4294967295,
        client_package_version: 1751405894,
        client_language: "english",
        client_os_type: SteamProtoConstants.Win11,
        should_remember_password: true,
        qos_level: 2,
        supports_rate_limit_response: true,
        priority_reason: 11,
      },
    });

    this.steamProtocol.send({
      eMsg: EMsg.k_EMsgClientChangeStatus,
      payload: { persona_state: 1 },
    });

    return res;
  }

  addMsgHandler(...msgHandler: MsgHandler[]) {
    this.steamProtocol.addMessageHandler(...msgHandler);
  }

  private addDefaultMsgHandlers() {
    this.addMsgHandler(new ClientPlayingSessionState(this.session));
  }
}
