import { SmartBuffer } from "smart-buffer";
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
    const sBuffer = new SmartBuffer();

    sBuffer.writeInt32LE(eMsg | SteamProtoConstants.ProtoMask);
    const session = this.session.getSession();

    const message: SteamProtos["CMsgProtoBufHeader"] = {
      ...header,
      steamid: session.steamId,
      client_sessionid: session.clientId,
    };

    const encodedHeader = this.protos.encode("CMsgProtoBufHeader", message);
    sBuffer.writeInt32LE(encodedHeader.length);
    sBuffer.writeBuffer(encodedHeader);

    return sBuffer.toBuffer();
  }
}
