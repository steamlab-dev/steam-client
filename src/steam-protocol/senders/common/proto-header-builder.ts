import type { EMsg, SteamProtos } from "@/common/steam-language";
import SteamProtoConstants from "@/steam-protocol/constants";
import type ProtoManager from "@/steam-protocol/proto-manager";
import type SessionManager from "@/steam-protocol/session-manager";

export default class ProtoHeaderBuilder {
  constructor(
    private readonly protos: ProtoManager,
    private readonly session: SessionManager,
  ) {}

  public build(eMsg: EMsg, header: Partial<SteamProtos["CMsgProtoBufHeader"]>): Buffer {
    const session = this.session.getSession();

    const message: SteamProtos["CMsgProtoBufHeader"] = {
      ...header,
      steamid: session.steamId,
      client_sessionid: session.clientId,
    };

    const encodedHeader = this.protos.encode("CMsgProtoBufHeader", message);
    const buffer = Buffer.allocUnsafe(4 + 4 + encodedHeader.length);

    buffer.writeInt32LE(eMsg | SteamProtoConstants.ProtoMask, 0);
    buffer.writeInt32LE(encodedHeader.length, 4);
    encodedHeader.copy(buffer, 8);

    return buffer;
  }
}
