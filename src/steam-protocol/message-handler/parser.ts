import { promisify } from "node:util";
import { gunzip } from "node:zlib";
import { EMsg, EMsgMapToProtoName, type SteamProtos } from "@/common/steam-language";
import {
  type BufferReadResult,
  ensureBytesAvailable,
  readBigUInt64LE,
  readBytes,
  readInt32LE,
  readUInt8,
  readUInt16LE,
  readUInt32LE,
} from "../common/buffer-read";
import SteamProtoConstants from "../constants";
import { SteamProtocolError } from "../error";
import type SteamProtoManager from "../proto-manager";
import type { NonProtoHeader, ParsedMessage } from "./types";

const gunzipAsync = promisify(gunzip);

export class MessageParserError extends SteamProtocolError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "parser", cause);
  }
}

interface RawMessageEnvelope {
  eMsg: EMsg;
  isProto: boolean;
}

type PacketParseResult =
  | { multiPayload: Buffer; message?: never }
  | { multiPayload?: never; message: ParsedMessage };

const NON_PROTO_HEADER_LENGTH = 32;
const createParserError = (message: string) => new MessageParserError(message);

/**
 * Parses raw binary data from Steam into structured, manageable message objects.
 */
export default class MessageParser {
  constructor(private readonly protos: SteamProtoManager) {}

  /**
   * Parses a raw buffer from a Steam message into one or more structured ParsedMessage objects.
   */
  public async parse(data: Buffer): Promise<ParsedMessage[]> {
    const packetResult = this.parsePacket(data);

    if (packetResult.multiPayload) {
      return this.parseMulti(packetResult.multiPayload);
    }

    return [packetResult.message];
  }

  private parsePacket(data: Buffer): PacketParseResult {
    let offset = 0;
    const envelopeResult = this.readRawMessageEnvelope(data, offset);
    const envelope = envelopeResult.value;
    offset = envelopeResult.offset;

    if (envelope.eMsg === EMsg.k_EMsgMulti) {
      return { multiPayload: data.subarray(offset) };
    }

    const message = {
      eMsg: envelope.eMsg,
      msgName: this.getMsgName(envelope.eMsg),
      isProto: envelope.isProto,
    } as ParsedMessage;

    if (envelope.isProto) {
      const headerResult = this.parseProtoHeader(data, offset);
      message.header = headerResult.value;
      offset = headerResult.offset;
    } else {
      const headerResult = this.parseNonProtoHeader(data, offset);
      message.header = headerResult.value;
      offset = headerResult.offset;
    }

    message.rawBody = data.subarray(offset);
    return { message };
  }

  private readRawMessageEnvelope(
    buffer: Buffer,
    offset: number,
  ): BufferReadResult<RawMessageEnvelope> {
    const rawEMsgResult = readUInt32LE(buffer, offset, "raw eMsg", createParserError);
    const rawEMsg = rawEMsgResult.value;
    const isProto = (rawEMsg & SteamProtoConstants.ProtoMask) !== 0;
    const eMsg = this.normalizeEMsg((rawEMsg & ~SteamProtoConstants.ProtoMask) as EMsg);

    return { value: { eMsg, isProto }, offset: rawEMsgResult.offset };
  }

  private parseProtoHeader(
    buffer: Buffer,
    offset: number,
  ): BufferReadResult<SteamProtos["CMsgProtoBufHeader"]> {
    const headerLengthResult = readUInt32LE(
      buffer,
      offset,
      "proto header length",
      createParserError,
    );
    const protoHeaderBufferResult = readBytes(
      buffer,
      headerLengthResult.offset,
      headerLengthResult.value,
      "proto header",
      createParserError,
    );

    return {
      value: this.protos.decode(
        "CMsgProtoBufHeader",
        protoHeaderBufferResult.value,
      ) as SteamProtos["CMsgProtoBufHeader"],
      offset: protoHeaderBufferResult.offset,
    };
  }

  private parseNonProtoHeader(buffer: Buffer, offset: number): BufferReadResult<NonProtoHeader> {
    ensureBytesAvailable(
      buffer,
      offset,
      NON_PROTO_HEADER_LENGTH,
      "non-proto header",
      createParserError,
    );

    const headerSizeResult = readUInt8(buffer, offset, "non-proto header size", createParserError);
    const headerVersionResult = readUInt16LE(
      buffer,
      headerSizeResult.offset,
      "non-proto header version",
      createParserError,
    );
    const targetJobIdResult = readBigUInt64LE(
      buffer,
      headerVersionResult.offset,
      "non-proto target job id",
      createParserError,
    );
    const sourceJobIdResult = readBigUInt64LE(
      buffer,
      targetJobIdResult.offset,
      "non-proto source job id",
      createParserError,
    );
    const headerCanaryResult = readUInt8(
      buffer,
      sourceJobIdResult.offset,
      "non-proto header canary",
      createParserError,
    );
    const steamIdResult = readBigUInt64LE(
      buffer,
      headerCanaryResult.offset,
      "non-proto steam id",
      createParserError,
    );
    const sessionIdResult = readInt32LE(
      buffer,
      steamIdResult.offset,
      "non-proto client session id",
      createParserError,
    );

    return {
      value: {
        headerSize: headerSizeResult.value,
        headerVersion: headerVersionResult.value,
        targetJobId: targetJobIdResult.value,
        sourceJobId: sourceJobIdResult.value,
        headerCanary: headerCanaryResult.value,
        steamid: steamIdResult.value,
        client_sessionid: sessionIdResult.value,
      },
      offset: sessionIdResult.offset,
    };
  }

  private getMsgName(eMsg: EMsg): string {
    let msg: string = EMsgMapToProtoName[eMsg as keyof typeof EMsgMapToProtoName];

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

  private async decodeMultiMessageBody(payload: Buffer): Promise<Buffer> {
    const multiMessage: SteamProtos["CMsgMulti"] = this.protos.decode("CMsgMulti", payload);

    if (!multiMessage.message_body) {
      throw new MessageParserError("Multi message missing body");
    }

    if (multiMessage.size_unzipped) {
      return gunzipAsync(multiMessage.message_body);
    }

    return multiMessage.message_body;
  }

  /**
   * @private Parses the payload of a CMsgMulti message.
   * @throws {MessageParserError} If the multi-message chunk is malformed.
   */
  private async parseMulti(payload: Buffer): Promise<ParsedMessage[]> {
    const body = await this.decodeMultiMessageBody(payload);
    const messages: ParsedMessage[] = [];
    let offset = 0;

    while (offset < body.length) {
      const remaining = body.length - offset;
      if (remaining < 4) {
        throw new MessageParserError(
          "Malformed multi-message chunk: expected size header but found less than 4 bytes",
        );
      }

      const subSizeResult = readUInt32LE(
        body,
        offset,
        "multi-message chunk size",
        createParserError,
      );
      offset = subSizeResult.offset;

      if (body.length - offset < subSizeResult.value) {
        throw new MessageParserError(
          `Malformed multi-message chunk: expected ${subSizeResult.value} bytes but only ${body.length - offset} available`,
        );
      }

      const subPacket = body.subarray(offset, offset + subSizeResult.value);
      offset += subSizeResult.value;
      const packetResult = this.parsePacket(subPacket);

      if (packetResult.multiPayload) {
        const subMessages = await this.parseMulti(packetResult.multiPayload);
        messages.push(...subMessages);
      } else {
        messages.push(packetResult.message);
      }
    }

    return messages;
  }
}
