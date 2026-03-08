import { SmartBuffer } from "smart-buffer";
import { EMsg } from "@/common/steam-language";
import { SteamProtocolError } from "@/steam-protocol/error";
import type {
  ClientUpdateGuestPassesListBody,
  ClientVacBanStatusBody,
  DecodedNonProtoMessage,
  MsgHandler,
  NonProtoMessage,
  ParsedMessage,
} from "../types";
import { isNonProtoMessage } from "./common/util";

export default class NonProtoResponseHandler implements MsgHandler {
  canHandle(message: ParsedMessage): boolean {
    return isNonProtoMessage(message);
  }

  handle(message: NonProtoMessage): DecodedNonProtoMessage {
    const rawBody = SmartBuffer.fromBuffer(message.rawBody);

    switch (message.eMsg) {
      case EMsg.k_EMsgClientVACBanStatus:
        return {
          ...message,
          eMsg: EMsg.k_EMsgClientVACBanStatus,
          msgName: "ClientVacBanStatus",
          body: this.decodeClientVacBanStatus(rawBody),
        };
      case EMsg.k_EMsgClientUpdateGuestPassesList:
        return {
          ...message,
          eMsg: EMsg.k_EMsgClientUpdateGuestPassesList,
          msgName: "ClientUpdateGuestPassesList",
          body: this.decodeClientUpdateGuestPassesList(rawBody),
        };
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
  }

  private decodeClientVacBanStatus(rawBody: SmartBuffer): ClientVacBanStatusBody {
    return {
      numBans: rawBody.readUInt32LE(),
    };
  }

  private decodeClientUpdateGuestPassesList(rawBody: SmartBuffer): ClientUpdateGuestPassesListBody {
    return {
      EResult: rawBody.readInt32LE(),
      countGuestPassesToGive: rawBody.readInt32LE(),
      countGuestPassesToRedeem: rawBody.readInt32LE(),
    };
  }
}
