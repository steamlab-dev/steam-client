import { EMsg, type SteamProtos } from "@/common/steam-language";
import { EResult } from "@/common/steam-language/EResult";
import type HeartbeatManager from "@/steam-protocol/hearbeat-manager";
import type SessionManager from "@/steam-protocol/session-manager";
import type { DecodedProtoMessage, MsgHandler, SteamMessage } from "../types";

export default class LogOnResponseHandler implements MsgHandler {
  constructor(
    private readonly session: SessionManager,
    private readonly heartBeat: HeartbeatManager,
  ) {}

  canHandle(message: DecodedProtoMessage): boolean {
    return message.eMsg === EMsg.k_EMsgClientLogOnResponse;
  }

  handle(message: DecodedProtoMessage): undefined | SteamMessage {
    const body = message.body as SteamProtos["CMsgClientLogOnResponse"];

    if (body.eresult === EResult.OK) {
      this.session.setLoggedIn(true);
      this.heartBeat.start(25);
      this.session.setClientId(message.header.client_sessionid);
      this.session.setSteamId(message.header.steamid);
    }
    return undefined;
  }
}
