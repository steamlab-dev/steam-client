import { EResult } from "@/common/steam-language";
import { EMsgMapToProtoName } from "@/common/steam-language/steam/EMsgMapping";
import { SteamProtocolEResultError, SteamProtocolError } from "@/steam-protocol/error";
import type ProtoManager from "@/steam-protocol/proto-manager";
import type ProtoMessenger from "@/steam-protocol/senders/proto-messenger";
import type { DecodedProtoMessage, MsgHandler, ParsedMessage, ProtoMessage } from "../types";
import { extractEResult, isKeyOf, isRegularProtoMessage } from "./common/util";

export default class ProtoResponseHandler implements MsgHandler {
  constructor(
    private readonly protos: ProtoManager,
    private readonly protoMessenger: ProtoMessenger,
  ) {}

  canHandle(message: ParsedMessage): boolean {
    return isRegularProtoMessage(message);
  }

  handle(message: ProtoMessage): DecodedProtoMessage {
    if (!isKeyOf(EMsgMapToProtoName, message.eMsg)) {
      throw new SteamProtocolError(
        `EMsg to Proto name not found: ${JSON.stringify(message, null, 2)}`,
        "handler",
      );
    }

    const protoName = EMsgMapToProtoName[message.eMsg];

    const decodedMessage = {
      ...message,
      msgName: protoName.replace(/^CMsg/, ""),
      body: this.protos.decode(protoName, message.rawBody),
    } as DecodedProtoMessage;

    const bodyRecord = decodedMessage.body as Record<string, unknown>;
    const eresult = extractEResult(bodyRecord, decodedMessage.header.eresult);

    if (eresult !== undefined && eresult !== EResult.OK) {
      //  reject awaiting request
      this.protoMessenger.rejectRequest(
        message.eMsg,
        new SteamProtocolEResultError({
          protoName,
          eresultCode: eresult,
          eMsg: message.eMsg,
        }),
      );
      return decodedMessage;
    }

    // resolve awaiting request
    this.protoMessenger.resolveRequest(
      message.eMsg,
      decodedMessage.body as Record<string, unknown>,
    );

    return decodedMessage;
  }
}
