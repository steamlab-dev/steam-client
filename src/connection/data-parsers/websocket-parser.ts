import type { Socket } from "node:net";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import ParserError from "./error";
import type { DataParser, DataParserEvents } from "./types";

const WebSocketOpcode = {
  CONTINUATION: 0x0,
  TEXT: 0x1,
  BINARY: 0x2,
  CLOSE: 0x8,
  PING: 0x9,
  PONG: 0xa,
} as const;

const FIN_BIT = 0x80;
const RSV_BITS = 0x70;
const OPCODE_MASK = 0x0f;

const MASK_BIT = 0x80;
const PAYLOAD_LEN_MASK = 0x7f;

const TWO_BYTE_PAYLOAD_LEN = 126;
const EIGHT_BYTE_PAYLOAD_LEN = 127;

/**
 * Parses raw data from a socket into discrete WebSocket message payloads.
 * It handles frame validation and extracts the payload from server-to-client frames.
 */
export default class WebSocketDataParser implements DataParser {
  private buffer = Buffer.alloc(0);
  private socket: Socket | null = null;
  private dataHandler: ((data: Buffer) => void) | null = null;
  private isAttached = false;

  constructor(private readonly emitter: TypedEventEmitter<DataParserEvents>) {}

  /**
   * Attaches the parser to a socket and starts listening for incoming data.
   * @throws {ParserError} If the parser is already attached to a socket.
   */
  public attach(socket: Socket): void {
    if (this.isAttached) {
      throw new ParserError("Parser is already attached. Call cleanUp() before attaching again.");
    }
    this.socket = socket;
    this.isAttached = true;
    this.setupDataHandler();
  }

  /**
   * Detaches the parser from the socket, removes event listeners, and resets the internal state.
   */
  public cleanUp(): void {
    if (!this.isAttached) {
      return;
    }

    if (this.socket && this.dataHandler) {
      this.socket.off("data", this.dataHandler);
    }

    this.socket = null;
    this.dataHandler = null;
    this.buffer = Buffer.alloc(0);
    this.isAttached = false;
  }

  /**
   * Returns the current size of the internal data buffer in bytes.
   */
  public getBufferSize(): number {
    return this.buffer.length;
  }

  /**
   * Sets up the internal 'data' event handler on the attached socket to process incoming data.
   */
  private setupDataHandler(): void {
    this.dataHandler = (data: Buffer) => {
      try {
        const payloads = this.parseFrames(data);
        for (const payload of payloads) {
          this.emitter.emit("data", payload);
        }
      } catch (error) {
        this.emitter.emit(
          "dataParseError",
          new ParserError("Failed to parse WebSocket frame", error),
        );
      }
    };

    this.socket?.on("data", this.dataHandler);
  }

  /**
   * Appends new data to the internal buffer and attempts to parse as many
   * complete WebSocket frames as possible.
   */
  private parseFrames(data: Buffer): Buffer[] {
    if (!data.length) {
      return [];
    }

    this.buffer = Buffer.concat([this.buffer, data]);
    const payloads: Buffer[] = [];

    while (this.buffer.length >= 2) {
      const payload = this.parseNextFrame();
      if (payload === null) {
        break;
      }
      payloads.push(payload);
    }

    return payloads;
  }

  /**
   * Attempts to parse a single, complete WebSocket frame from the internal buffer.
   * @throws {ParserError} If a protocol violation is detected (e.g., masked frame, invalid opcode).
   */
  private parseNextFrame(): Buffer | null {
    // A frame header is at least 2 bytes long.
    if (this.buffer.length < 2) {
      return null;
    }

    const firstByte = this.buffer[0];
    const secondByte = this.buffer[1];
    if (firstByte === undefined || secondByte === undefined) {
      return null;
    }

    // --- Parse First Byte ---
    const isFinal = (firstByte & FIN_BIT) !== 0;
    const opcode = firstByte & OPCODE_MASK;

    // Per RFC 6455, the reserved bits MUST be 0 unless an extension is negotiated.
    if ((firstByte & RSV_BITS) !== 0) {
      throw new ParserError("Reserved bits are set without a negotiated extension");
    }

    // --- Handle Control Frames ---
    if (opcode === WebSocketOpcode.CLOSE) {
      throw new ParserError("Steam closed the connection.");
    }

    // --- Apply Strict Rules for Data Frames ---
    // This implementation specifically requires single, complete binary frames.
    // It does not support fragmented frames (isFinal=false) or text frames.
    if (!isFinal || opcode !== WebSocketOpcode.BINARY) {
      throw new ParserError(
        `Unsupported WebSocket frame received. FIN: ${isFinal}, Opcode: 0x${opcode}`,
      );
    }

    // --- Parse Second Byte and Payload Length ---
    // Server-to-client frames MUST NOT be masked.
    const isMasked = (secondByte & MASK_BIT) !== 0;
    if (isMasked) {
      throw new ParserError("Received masked frame from server (protocol violation)");
    }

    let payloadLength = secondByte & PAYLOAD_LEN_MASK;
    let headerSize = 2; // Initial header size is 2 bytes

    if (payloadLength === TWO_BYTE_PAYLOAD_LEN) {
      // Payload length is in the next 2 bytes. Total header is 4 bytes.
      if (this.buffer.length < 4) {
        return null;
      }
      payloadLength = this.buffer.readUInt16BE(2);
      headerSize = 4;
    } else if (payloadLength === EIGHT_BYTE_PAYLOAD_LEN) {
      // Payload length is in the next 8 bytes. Total header is 10 bytes.
      if (this.buffer.length < 10) {
        return null;
      }
      const bigIntLength = this.buffer.readBigUInt64BE(2);

      // Ensure the length does not exceed safe integer limits for JavaScript.
      if (bigIntLength > BigInt(Number.MAX_SAFE_INTEGER)) {
        throw new ParserError("Frame payload length exceeds maximum safe integer");
      }

      payloadLength = Number(bigIntLength);
      headerSize = 10;
    }

    // --- Extract Payload ---
    const totalFrameSize = headerSize + payloadLength;
    if (this.buffer.length < totalFrameSize) {
      // We don't have the full frame in the buffer yet.
      return null;
    }

    const payload = this.buffer.subarray(headerSize, totalFrameSize);

    // Advance the buffer past the parsed frame.
    this.buffer = this.buffer.subarray(totalFrameSize);

    return payload;
  }
}
