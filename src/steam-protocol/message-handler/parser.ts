import { promisify } from "node:util";
import { gunzip } from "node:zlib";
import Long from "long";
import { SmartBuffer } from "smart-buffer";
import GenericError from "@/common/generic-error";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import { EMsgToProtoName } from "@/common/steam-language/steam/EMsgMapping";
import SteamProtoConstants from "../constants";
import type SteamProtoManager from "../proto-manager";
import type { ParsedMessage } from "./types";

const gunzipAsync = promisify(gunzip);

export class MessageParserError extends GenericError {}

/**
 * Parses raw binary data from Steam into structured, manageable message objects.
 */
export default class MessageParser {
  constructor(private readonly protos: SteamProtoManager) {}

  /**
   * Parses a raw buffer from a Steam message into one or more structured ParsedMessage objects.
   */
  public async parse(data: Buffer): Promise<ParsedMessage[]> {
    const packet = SmartBuffer.fromBuffer(data);

    // --- 1. Read raw EMsg ---
    const rawEMsg = packet.readUInt32LE();
    let eMsg = (rawEMsg & ~SteamProtoConstants.ProtoMask) as EMsg;
    eMsg = this.normalizeEMsg(eMsg);
    const isProto = (rawEMsg & SteamProtoConstants.ProtoMask) !== 0;

    // --- 2. Handle Multi messages ---
    if (eMsg === EMsg.k_EMsgMulti) {
      const multiPayload = packet.readBuffer();
      return this.parseMulti(multiPayload);
    }

    const message = {
      eMsg,
      msgName: this.getMsgName(eMsg),
      isProto,
    } as ParsedMessage;

    // --- 3. Parse header ---
    if (isProto) {
      const headerLength = packet.readUInt32LE();
      const protoHeaderBuffer = packet.readBuffer(headerLength);

      message.header = this.protos.decode("CMsgProtoBufHeader", protoHeaderBuffer);
    } else {
      // Non-proto header - 36 total minus already-read rawEMsg
      const buf = SmartBuffer.fromBuffer(packet.readBuffer(36 - 4));

      message.header = {
        headerSize: buf.readUInt8(),
        headerVersion: buf.readUInt16LE(),
        targetJobId: Long.fromBigInt(buf.readBigUInt64LE(), true),
        sourceJobId: Long.fromBigInt(buf.readBigUInt64LE(), true),
        headerCanary: buf.readUInt8(),
        steamid: Long.fromBigInt(buf.readBigUInt64LE(), true),
        client_sessionid: buf.readInt32LE(),
      };
    }

    // --- 4. Remaining packet is the body ---
    message.rawBody = packet.readBuffer();

    return [message];
  }

  private getMsgName(eMsg: EMsg): string {
    let msg: string = EMsgToProtoName[eMsg as keyof typeof EMsgToProtoName];

    if (!msg) {
      switch (eMsg) {
        case EMsg.k_EMsgServiceMethod:
          msg = "ServiceMethod";
          break;
        case EMsg.k_EMsgServiceMethodResponse:
          msg = "ServiceMethodResponse";
          break;
        default:
          break;
      }
    }

    if (msg) {
      msg = msg.replace("CMsg", "");
    }

    return msg;
  }

  /**
   * @private Normalizes certain EMsg values that are aliases for a single logical message type.
   */
  private normalizeEMsg(eMsg: EMsg): EMsg {
    switch (eMsg) {
      case EMsg.k_EMsgClientGamesPlayedNoDataBlob:
      case EMsg.k_EMsgClientGamesPlayedWithDataBlob:
        return EMsg.k_EMsgClientGamesPlayed;
      default:
        return eMsg;
    }
  }

  /**
   * @private Parses the payload of a CMsgMulti message.
   * @throws {MessageParserError} If the multi-message chunk is malformed.
   */
  private async parseMulti(payload: Buffer): Promise<ParsedMessage[]> {
    const multiMessage: SteamProtos["CMsgMulti"] = this.protos.decode("CMsgMulti", payload);

    if (!multiMessage.message_body) {
      throw new MessageParserError("Multi message missing body");
    }
    let body = multiMessage.message_body;
    if (multiMessage.size_unzipped) {
      body = await gunzipAsync(body);
    }

    const messages: ParsedMessage[] = [];

    const bodyReader = SmartBuffer.fromBuffer(body);
    while (bodyReader.remaining() > 0) {
      if (bodyReader.remaining() < 4) {
        throw new MessageParserError(
          "Malformed multi-message chunk: expected size header but found less than 4 bytes",
        );
      }

      const subSize = bodyReader.readUInt32LE();

      if (bodyReader.remaining() < subSize) {
        throw new MessageParserError(
          `Malformed multi-message chunk: expected ${subSize} bytes but only ${bodyReader.remaining()} available`,
        );
      }

      const subPacket = bodyReader.readBuffer(subSize);

      const subMessages = await this.parse(subPacket);
      messages.push(...subMessages);
    }

    return messages;
  }
}
