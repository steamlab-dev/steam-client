import Long from "long";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import type { CMsgClientGamesPlayed } from "@/common/steam-language/protos-definitions/steam/steammessages_clientserver";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import { jwtToJson } from "@/common/utils";
import type { ConnectionOptions } from "@/connection/types";
import initiateServices, { type Services } from "@/steam-client/services";
import SteamProtoConstants from "@/steam-protocol/constants";
import type { MsgHandler } from "@/steam-protocol/message-handler/types";
import ProtoManager from "@/steam-protocol/proto-manager";
import SteamProtocol from "@/steam-protocol/steam-protocol";
import SteamClientError from "./error";
import GamesPlayedTracker from "./games-played-tracker";
import ClientPlayingSessionState from "./message-handlers/ClientPlayingSessionState";
import SessionManager from "./session-manager";
import type { SteamClientEvents } from "./types";

export default class SteamClient {
  private readonly gamesPlayedTracker: GamesPlayedTracker;
  private readonly protos: ProtoManager;
  private readonly steamProtocol: SteamProtocol;
  private readonly session: SessionManager;
  private recentReauthentication = true;
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

  async connect() {
    try {
      return await this.steamProtocol.connect();
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed to connect", "client", err);
    }
  }

  disconnect() {
    try {
      this.steamProtocol.disconnect();
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed to disconnect", "client", err);
    }
  }

  async startPlaying(
    gameId: Long | number | string | (Long | number | string)[],
  ): Promise<string[]> {
    try {
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

      this.steamProtocol.send({ eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob, payload });

      return games_played.map((game) => String(game.game_id));
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed to start playing", "gameplay", err);
    }
  }

  stopPlaying(gameId: Long | number | string | (Long | number | string)[]): string[] {
    try {
      const games_played = this.gamesPlayedTracker.untrack(gameId);

      const payload: CMsgClientGamesPlayed = {
        games_played: games_played.length > 0 ? games_played : undefined,
        client_os_type: SteamProtoConstants.Win11,
        cloud_gaming_platform: 0,
        recent_reauthentication: false,
      };

      this.steamProtocol.send({
        eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob,
        payload,
      });

      return games_played.map((game) => String(game.game_id));
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed to stop playing", "gameplay", err);
    }
  }

  async logonRequest(
    req: SteamProtos["CMsgClientLogon"],
  ): Promise<SteamProtos["CMsgClientLogOnResponse"]> {
    if (!req.access_token) {
      throw new SteamClientError("access_token is required", "validation");
    }

    try {
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

      // Steam sends this message after logon
      if (this.recentReauthentication) {
        const payload: CMsgClientGamesPlayed = {
          client_os_type: SteamProtoConstants.Win11,
          cloud_gaming_platform: 0,
          recent_reauthentication: this.recentReauthentication,
        };
        this.steamProtocol.send({ eMsg: EMsg.k_EMsgClientGamesPlayedWithDataBlob, payload });
        this.recentReauthentication = false;
      }

      return res;
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed logon request", "protocol", err);
    }
  }

  addMsgHandler(...msgHandler: MsgHandler[]) {
    try {
      this.steamProtocol.addMessageHandler(...msgHandler);
    } catch (err) {
      if (err instanceof SteamClientError) {
        throw err;
      }
      throw new SteamClientError("Failed to add message handler", "client", err);
    }
  }

  private addDefaultMsgHandlers() {
    this.addMsgHandler(new ClientPlayingSessionState(this.session));
  }
}
