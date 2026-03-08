import { EMsg, type SteamProtos } from "@/common/steam-language";
import type SessionManager from "@/steam-client/session-manager";
import type { MsgHandler, SteamMessage } from "@/steam-protocol/types";

export default class ClientPlayingSessionState implements MsgHandler {
  constructor(private readonly session: SessionManager) {}

  canHandle(message: SteamMessage): boolean {
    return message.eMsg === EMsg.k_EMsgClientPlayingSessionState;
  }

  handle(message: SteamMessage): undefined | SteamMessage {
    const body = message.body as SteamProtos["CMsgClientPlayingSessionState"];
    // play is blocked by another remote playing session
    this.session.playingBlocked = Boolean(body.playing_blocked);
    return undefined;
  }
}
