import { EMsg } from "@/common/steam-language";
import {
  ensureBytesAvailable,
  readInt32LE,
  readUInt32LE,
} from "@/steam-protocol/common/buffer-read";
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

const createHandlerError = (message: string) => new SteamProtocolError(message, "handler");

export default class NonProtoResponseHandler implements MsgHandler {
  canHandle(message: ParsedMessage): boolean {
    return isNonProtoMessage(message);
  }

  handle(message: NonProtoMessage): DecodedNonProtoMessage {
    const rawBody = message.rawBody;

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

  private decodeClientVacBanStatus(rawBody: Buffer): ClientVacBanStatusBody {
    return {
      numBans: readUInt32LE(rawBody, 0, "VAC ban status body", createHandlerError).value,
    };
  }

  private decodeClientUpdateGuestPassesList(rawBody: Buffer): ClientUpdateGuestPassesListBody {
    ensureBytesAvailable(rawBody, 0, 12, "guest passes body", createHandlerError);

    const eResult = readInt32LE(rawBody, 0, "guest passes body", createHandlerError);
    const countToGive = readInt32LE(
      rawBody,
      eResult.offset,
      "guest passes body",
      createHandlerError,
    );
    const countToRedeem = readInt32LE(
      rawBody,
      countToGive.offset,
      "guest passes body",
      createHandlerError,
    );

    return {
      EResult: eResult.value,
      countGuestPassesToGive: countToGive.value,
      countGuestPassesToRedeem: countToRedeem.value,
    };
  }
}
