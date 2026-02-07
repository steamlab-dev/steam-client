import { EMsg } from "@/common/steam-language";
import type { CMsgClientPlayingSessionState } from "@/common/steam-language/protos-definitions/steam/steammessages_clientserver_2";
import type SessionManager from "@/steam-client/session-manager";
import type { MsgHandler, SteamMessage } from "@/steam-protocol/message-handler/types";

export default class ClientPlayingSessionState implements MsgHandler {
  constructor(private readonly session: SessionManager) {}

  canHandle(message: SteamMessage): boolean {
    return message.eMsg === EMsg.k_EMsgClientPlayingSessionState;
  }

  handle(message: SteamMessage): undefined | SteamMessage {
    const body = message.body as CMsgClientPlayingSessionState;
    // play is blocked by another remote playing session
    this.session.playingBlocked = Boolean(body.playing_blocked);
    return undefined;
  }
}
