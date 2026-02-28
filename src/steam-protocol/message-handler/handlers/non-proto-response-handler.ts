import { SmartBuffer } from "smart-buffer";
import { EMsg } from "@/common/steam-language";
import { SteamProtocolError } from "@/steam-protocol/error";
import type { DecodedNonProtoMessage, MsgHandler, NonProtoMessage, ParsedMessage } from "../types";
import { isNonProtoMessage } from "./common/util";

export default class NonProtoResponseHandler implements MsgHandler {
  canHandle(message: ParsedMessage): boolean {
    return isNonProtoMessage(message);
  }

  handle(message: NonProtoMessage): DecodedNonProtoMessage {
    const rawBody = SmartBuffer.fromBuffer(message.rawBody);

    const decodedNonProtoMessage = {
      ...message,
    } as DecodedNonProtoMessage;

    switch (message.eMsg) {
      case EMsg.k_EMsgClientVACBanStatus:
        decodedNonProtoMessage.body = this.decodeClientVacBanStatus(rawBody);
        decodedNonProtoMessage.msgName = "ClientVacBanStatus";
        break;
      case EMsg.k_EMsgClientUpdateGuestPassesList:
        decodedNonProtoMessage.body = this.decodeClientUpdateGuestPassesList(rawBody);
        decodedNonProtoMessage.msgName = "ClientUpdateGuestPassesList";
        break;
      default:
        throw new SteamProtocolError(
          `Unhandled non proto message: ${JSON.stringify(
            {
              eMsg: message.eMsg,
              msgName: message.msgName,
            },
            null,
            2,
          )}`,
          "handler",
        );
    }

    return decodedNonProtoMessage;
  }

  private decodeClientVacBanStatus(rawBody: SmartBuffer) {
    return {
      numBans: rawBody.readUInt32LE(),
    };
  }

  private decodeClientUpdateGuestPassesList(rawBody: SmartBuffer) {
    return {
      EResult: rawBody.readInt32LE(),
      countGuestPassesToGive: rawBody.readInt32LE(),
      countGuestPassesToRedeem: rawBody.readInt32LE(),
    };
  }
}
