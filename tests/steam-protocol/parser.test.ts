import { gzipSync } from "node:zlib";
import Long from "long";
import { describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import SteamProtoConstants from "@/steam-protocol/constants";
import MessageParser, { MessageParserError } from "@/steam-protocol/message-handler/parser";

const encodeRawEMsg = (eMsg: number, isProto: boolean): Buffer => {
  const buf = Buffer.alloc(4);
  const raw = isProto ? (eMsg | SteamProtoConstants.ProtoMask) >>> 0 : eMsg >>> 0;
  buf.writeUInt32LE(raw, 0);
  return buf;
};

const buildProtoPacket = (eMsg: number, header: Buffer, body: Buffer): Buffer => {
  const headerLen = Buffer.alloc(4);
  headerLen.writeUInt32LE(header.length, 0);
  return Buffer.concat([encodeRawEMsg(eMsg, true), headerLen, header, body]);
};

const buildNonProtoHeader = (): Buffer => {
  const header = Buffer.alloc(32);
  let offset = 0;
  header.writeUInt8(32, offset);
  offset += 1;
  header.writeUInt16LE(2, offset);
  offset += 2;
  header.writeBigUInt64LE(11n, offset);
  offset += 8;
  header.writeBigUInt64LE(22n, offset);
  offset += 8;
  header.writeUInt8(7, offset);
  offset += 1;
  header.writeBigUInt64LE(76561197960265728n, offset);
  offset += 8;
  header.writeInt32LE(1234, offset);
  return header;
};

describe("MessageParser", () => {
  it("parses proto envelope/header/body", async () => {
    const protos = {
      decode: vi.fn().mockReturnValue({ steamid: Long.fromString("76561197960265728", true) }),
    };

    const parser = new MessageParser(protos as never);
    const packet = buildProtoPacket(
      EMsg.k_EMsgClientHello,
      Buffer.from([1, 2, 3, 4]),
      Buffer.from([9, 8, 7]),
    );

    const parsed = await parser.parse(packet);

    expect(parsed).toHaveLength(1);
    expect(parsed[0]?.isProto).toBe(true);
    expect(parsed[0]?.eMsg).toBe(EMsg.k_EMsgClientHello);
    expect(parsed[0]?.rawBody).toEqual(Buffer.from([9, 8, 7]));
    expect(protos.decode).toHaveBeenCalledWith("CMsgProtoBufHeader", Buffer.from([1, 2, 3, 4]));
  });

  it("parses non-proto header correctly", async () => {
    const protos = { decode: vi.fn() };
    const parser = new MessageParser(protos as never);

    const packet = Buffer.concat([
      encodeRawEMsg(EMsg.k_EMsgClientVACBanStatus, false),
      buildNonProtoHeader(),
      Buffer.from([0xaa, 0xbb]),
    ]);

    const [parsed] = await parser.parse(packet);
    const header = parsed?.header as {
      client_sessionid: number;
      steamid: Long;
    };

    expect(parsed?.isProto).toBe(false);
    expect(header.client_sessionid).toBe(1234);
    expect(header.steamid.toString()).toBe("76561197960265728");
    expect(parsed?.rawBody).toEqual(Buffer.from([0xaa, 0xbb]));
  });

  it("normalizes games played alias eMsgs", async () => {
    const protos = { decode: vi.fn().mockReturnValue({}) };
    const parser = new MessageParser(protos as never);

    const packet = buildProtoPacket(
      EMsg.k_EMsgClientGamesPlayedNoDataBlob,
      Buffer.from([0x01]),
      Buffer.from([0x02]),
    );

    const [parsed] = await parser.parse(packet);

    expect(parsed?.eMsg).toBe(EMsg.k_EMsgClientGamesPlayed);
  });

  it("parses multi payload (uncompressed)", async () => {
    const header = Buffer.from([0x01]);
    const subPacket = buildProtoPacket(EMsg.k_EMsgClientHello, header, Buffer.from([0x02]));

    const multiBody = Buffer.alloc(4 + subPacket.length);
    multiBody.writeUInt32LE(subPacket.length, 0);
    subPacket.copy(multiBody, 4);

    const protos = {
      decode: vi.fn((name: string) => {
        if (name === "CMsgMulti") {
          return { message_body: multiBody, size_unzipped: 0 };
        }
        return {};
      }),
    };

    const parser = new MessageParser(protos as never);
    const topPacket = Buffer.concat([encodeRawEMsg(EMsg.k_EMsgMulti, false), Buffer.from([0xff])]);

    const parsed = await parser.parse(topPacket);

    expect(parsed).toHaveLength(1);
    expect(parsed[0]?.eMsg).toBe(EMsg.k_EMsgClientHello);
  });

  it("parses multi payload (gzipped)", async () => {
    const subPacket = buildProtoPacket(
      EMsg.k_EMsgClientHello,
      Buffer.from([0x01]),
      Buffer.from([]),
    );
    const multiBody = Buffer.alloc(4 + subPacket.length);
    multiBody.writeUInt32LE(subPacket.length, 0);
    subPacket.copy(multiBody, 4);

    const protos = {
      decode: vi.fn((name: string) => {
        if (name === "CMsgMulti") {
          return { message_body: gzipSync(multiBody), size_unzipped: multiBody.length };
        }
        return {};
      }),
    };

    const parser = new MessageParser(protos as never);
    const topPacket = Buffer.concat([encodeRawEMsg(EMsg.k_EMsgMulti, false), Buffer.from([0x11])]);

    const parsed = await parser.parse(topPacket);
    expect(parsed).toHaveLength(1);
  });

  it("throws for malformed multi chunk size header", async () => {
    const protos = {
      decode: vi.fn((name: string) => {
        if (name === "CMsgMulti") {
          return { message_body: Buffer.from([0x01, 0x02, 0x03]), size_unzipped: 0 };
        }
        return {};
      }),
    };

    const parser = new MessageParser(protos as never);
    const topPacket = Buffer.concat([encodeRawEMsg(EMsg.k_EMsgMulti, false), Buffer.from([0x00])]);

    await expect(parser.parse(topPacket)).rejects.toThrow(MessageParserError);
    await expect(parser.parse(topPacket)).rejects.toThrow(
      "Malformed multi-message chunk: expected size header but found less than 4 bytes",
    );
  });

  it("throws for malformed multi chunk body length", async () => {
    const malformedBody = Buffer.alloc(8);
    malformedBody.writeUInt32LE(32, 0);

    const protos = {
      decode: vi.fn((name: string) => {
        if (name === "CMsgMulti") {
          return { message_body: malformedBody, size_unzipped: 0 };
        }
        return {};
      }),
    };

    const parser = new MessageParser(protos as never);
    const topPacket = Buffer.concat([encodeRawEMsg(EMsg.k_EMsgMulti, false), Buffer.from([0x00])]);

    await expect(parser.parse(topPacket)).rejects.toThrow(
      "Malformed multi-message chunk: expected 32 bytes but only 4 available",
    );
  });

  it("maps service call eMsgs to fallback message names", async () => {
    const protos = { decode: vi.fn().mockReturnValue({}) };
    const parser = new MessageParser(protos as never);

    const servicePacket = buildProtoPacket(
      EMsg.k_EMsgServiceMethod,
      Buffer.from([0x01]),
      Buffer.from([0x02]),
    );
    const serviceResPacket = buildProtoPacket(
      EMsg.k_EMsgServiceMethodResponse,
      Buffer.from([0x01]),
      Buffer.from([0x02]),
    );

    const [serviceParsed] = await parser.parse(servicePacket);
    const [serviceResParsed] = await parser.parse(serviceResPacket);

    expect(serviceParsed?.msgName).toBe("ServiceMethod");
    expect(serviceResParsed?.msgName).toBe("ServiceMethodResponse");
  });

  it("throws when multi message body is missing", async () => {
    const protos = {
      decode: vi.fn((name: string) => {
        if (name === "CMsgMulti") {
          return { size_unzipped: 0 };
        }
        return {};
      }),
    };

    const parser = new MessageParser(protos as never);
    const topPacket = Buffer.concat([encodeRawEMsg(EMsg.k_EMsgMulti, false), Buffer.from([0x01])]);

    await expect(parser.parse(topPacket)).rejects.toThrow("Multi message missing body");
  });
});
