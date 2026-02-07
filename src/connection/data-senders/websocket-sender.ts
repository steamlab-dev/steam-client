import { randomBytes } from "node:crypto";
import type { Socket } from "node:net";
import DataSenderError from "./error";
import type { DataSender } from "./types";

/**
 * Handles sending data over a WebSocket connection by properly framing
 * and masking the payload according to the WebSocket protocol.
 */
export default class WebSocketDataSender implements DataSender {
  private socket: Socket | null = null;
  private drainHandler: (() => void) | null = null;

  /**
   * Attaches a socket to the sender for future data transmission.
   */
  public attach(socket: Socket): void {
    this.socket = socket;
  }

  /**
   * Detaches the socket and removes any event listeners to prevent memory leaks.
   */
  public cleanUp(): void {
    if (this.socket && this.drainHandler) {
      this.socket.off("drain", this.drainHandler);
    }

    this.drainHandler = null;
    this.socket = null;
  }

  /**
   * Frames, masks, and sends a data buffer over the attached socket.
   * It handles backpressure by waiting for the socket's 'drain' event.
   * @throws {DataSenderError} If the socket is not attached, not writable, or if a send is already in progress.
   */
  public async send(data: Buffer): Promise<void> {
    const socket = this.socket;
    if (!socket) {
      throw new DataSenderError("Socket is not attached");
    }

    if (this.drainHandler) {
      throw new DataSenderError("Cannot send new data while awaiting drain.");
    }

    if (!socket.writable) {
      throw new DataSenderError("Socket is not writable");
    }

    const frame = this.createClientFrame(data);
    const writeSuccessful = socket.write(frame);

    if (!writeSuccessful) {
      await new Promise<void>((resolve) => {
        this.drainHandler = () => {
          this.drainHandler = null;
          resolve();
        };

        socket.once("drain", this.drainHandler);
      });
    }
  }

  /**
   * Creates a WebSocket frame with a masked payload for client-to-server communication.
   */
  private createClientFrame(data: Buffer): Buffer {
    const payloadLength = data.length;
    let headerLength: number;
    let offset = 2;
    if (payloadLength <= 125) {
      headerLength = 6;
    } else if (payloadLength <= 65535) {
      headerLength = 8;
    } else {
      headerLength = 14;
    }
    const frame = Buffer.alloc(headerLength + payloadLength);
    frame[0] = 0x82; // FIN bit set, binary frame
    if (payloadLength <= 125) {
      frame[1] = 0x80 | payloadLength; // MASK bit set
    } else if (payloadLength <= 65535) {
      frame[1] = 0x80 | 126; // MASK bit set, 126 indicates 16-bit length
      frame.writeUInt16BE(payloadLength, offset);
      offset += 2;
    } else {
      frame[1] = 0x80 | 127; // MASK bit set, 127 indicates 64-bit length
      frame.writeBigUInt64BE(BigInt(payloadLength), offset);
      offset += 8;
    }
    const maskingKey = randomBytes(4);
    maskingKey.copy(frame, offset);
    offset += 4;
    for (let i = 0; i < payloadLength; i++) {
      const payloadByte = data[i] ?? 0;
      const maskByte = maskingKey[i % 4] ?? 0;
      frame[offset + i] = payloadByte ^ maskByte;
    }
    return frame;
  }
}
