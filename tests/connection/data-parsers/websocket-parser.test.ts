import { EventEmitter } from "node:events";
import type { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import ParserError from "@/connection/data-parsers/error";
import type { DataParserEvents } from "@/connection/data-parsers/types";
import WebSocketDataParser from "@/connection/data-parsers/websocket-parser";

// Mock the Socket class to allow for spying on its methods
class MockSocket extends EventEmitter {
  // We use vi.fn() on the methods we want to track (on, off, emit)
  public on = vi.fn().mockImplementation((event: string, handler: (...args: unknown[]) => void) => {
    return super.on(event, handler);
  });

  public off = vi
    .fn()
    .mockImplementation((event: string, handler: (...args: unknown[]) => void) => {
      return super.off(event, handler);
    });

  public emit = vi.fn().mockImplementation((event: string, ...args: unknown[]) => {
    return super.emit(event, ...args);
  });
}

// Helper function to create valid WebSocket frames for testing
function createWebSocketFrame(payload: Buffer, opcode = 0x82, masked = false): Buffer {
  const payloadLength = payload.length;
  let headerSize = 2;
  let header: Buffer;

  if (payloadLength < 126) {
    header = Buffer.alloc(headerSize);
    header[0] = opcode;
    header[1] = masked ? payloadLength | 0x80 : payloadLength;
  } else if (payloadLength < 65536) {
    headerSize = 4;
    header = Buffer.alloc(headerSize);
    header[0] = opcode;
    header[1] = masked ? 126 | 0x80 : 126;
    header.writeUInt16BE(payloadLength, 2);
  } else {
    headerSize = 10;
    header = Buffer.alloc(headerSize);
    header[0] = opcode;
    header[1] = masked ? 127 | 0x80 : 127;
    header.writeBigUInt64BE(BigInt(payloadLength), 2);
  }

  if (masked) {
    // This masking logic is simplified for testing and not cryptographically secure
    const maskKey = Buffer.from([0x12, 0x34, 0x56, 0x78]);
    const maskedPayload = Buffer.alloc(payload.length);
    for (let i = 0; i < payload.length; i++) {
      const payloadByte = payload[i];
      const maskByte = maskKey[i % 4];
      if (payloadByte === undefined || maskByte === undefined) {
        throw new Error("Invalid masking input in test frame builder");
      }
      maskedPayload[i] = payloadByte ^ maskByte;
    }
    return Buffer.concat([header, maskKey, maskedPayload]);
  }

  return Buffer.concat([header, payload]);
}

describe("WebSocketDataParser", () => {
  let parser: WebSocketDataParser;
  let mockSocket: MockSocket;
  let emitter: TypedEventEmitter<DataParserEvents>;

  beforeEach(() => {
    emitter = new TypedEventEmitter<DataParserEvents>();
    parser = new WebSocketDataParser(emitter);
    mockSocket = new MockSocket();
  });

  afterEach(() => {
    // Ensure mocks are cleared after each test to prevent state leakage
    vi.clearAllMocks();
  });

  describe("attach", () => {
    it("should attach to a socket and set up a data handler", () => {
      parser.attach(mockSocket as unknown as Socket);
      // Verify that the parser subscribed to the socket's 'data' event
      expect(mockSocket.on).toHaveBeenCalledWith("data", expect.any(Function));
      expect(mockSocket.on).toHaveBeenCalledTimes(1);
    });

    // --- THIS IS THE FIXED TEST ---
    it("should throw an error if attach is called a second time without cleanup", () => {
      parser.attach(mockSocket as unknown as Socket);

      // The second call to attach should fail because the parser is already active
      expect(() => parser.attach(mockSocket as unknown as Socket)).toThrow(ParserError);
      expect(() => parser.attach(mockSocket as unknown as Socket)).toThrow(
        "Parser is already attached. Call cleanUp() before attaching again.",
      );
    });

    it("should allow attaching to a new socket after cleanUp is called", () => {
      const firstSocket = new MockSocket();
      const secondSocket = new MockSocket();

      // First lifecycle: attach -> cleanUp
      parser.attach(firstSocket as unknown as Socket);
      parser.cleanUp();

      // Second lifecycle: attach should now succeed
      expect(() => parser.attach(secondSocket as unknown as Socket)).not.toThrow();
      expect(secondSocket.on).toHaveBeenCalledWith("data", expect.any(Function));
    });
  });

  // --- THIS IS THE NEW TEST SUITE FOR cleanUp ---
  describe("cleanUp", () => {
    it("should remove the data listener from the attached socket", () => {
      parser.attach(mockSocket as unknown as Socket);
      parser.cleanUp();

      // Verify that the 'off' method was called to remove the listener
      expect(mockSocket.off).toHaveBeenCalledWith("data", expect.any(Function));
      expect(mockSocket.off).toHaveBeenCalledTimes(1);
    });

    it("should reset the internal buffer and state", () => {
      parser.attach(mockSocket as unknown as Socket);
      // Simulate receiving partial data to populate the buffer
      const partialFrame = Buffer.from([0x82, 0x05]);
      mockSocket.emit("data", partialFrame);

      expect(parser.getBufferSize()).toBe(2);

      parser.cleanUp();

      // After cleanup, the buffer should be empty
      expect(parser.getBufferSize()).toBe(0);
    });

    it("should be idempotent and not throw an error if called multiple times", () => {
      parser.attach(mockSocket as unknown as Socket);

      // It should not throw an error on the first or subsequent calls
      expect(() => parser.cleanUp()).not.toThrow();
      expect(() => parser.cleanUp()).not.toThrow();

      // Verify the listener was still only removed once
      expect(mockSocket.off).toHaveBeenCalledTimes(1);
    });

    it("should stop the parser from emitting data events", () => {
      parser.attach(mockSocket as unknown as Socket);
      const dataSpy = vi.fn();
      emitter.on("data", dataSpy);

      parser.cleanUp();

      // Emit data to the socket *after* cleanup
      const frame = createWebSocketFrame(Buffer.from("test"));
      mockSocket.emit("data", frame);

      // The parser's data event should not have been triggered
      expect(dataSpy).not.toHaveBeenCalled();
    });
  });

  describe("getBufferSize", () => {
    it("should return 0 for an empty buffer initially", () => {
      expect(parser.getBufferSize()).toBe(0);
    });

    it("should return the correct buffer size after receiving a partial frame", () => {
      parser.attach(mockSocket as unknown as Socket);

      // Send an incomplete frame (header for a 5-byte payload, but no payload)
      const partialFrame = Buffer.from([0x82, 0x05]);
      mockSocket.emit("data", partialFrame);

      expect(parser.getBufferSize()).toBe(2);
    });
  });

  describe("frame parsing", () => {
    beforeEach(() => {
      // Ensure each test in this block starts with a freshly attached parser
      parser.attach(mockSocket as unknown as Socket);
    });

    describe("simple frames", () => {
      it("should parse a simple binary frame", async () => {
        const testData = Buffer.from("Hello World");
        const frame = createWebSocketFrame(testData);

        const dataPromise = new Promise<Buffer>((resolve) => {
          emitter.on("data", resolve);
        });

        mockSocket.emit("data", frame);
        const payload = await dataPromise;
        expect(payload.equals(testData)).toBe(true);
      });

      it("should parse multiple frames in one data chunk", async () => {
        const testData1 = Buffer.from("Frame 1");
        const testData2 = Buffer.from("Frame 2");
        const frame1 = createWebSocketFrame(testData1);
        const frame2 = createWebSocketFrame(testData2);
        const combinedFrames = Buffer.concat([frame1, frame2]);

        const receivedPayloads: Buffer[] = [];
        const dataPromise = new Promise<void>((resolve) => {
          emitter.on("data", (payload: Buffer) => {
            receivedPayloads.push(payload);
            if (receivedPayloads.length === 2) {
              resolve();
            }
          });
        });

        mockSocket.emit("data", combinedFrames);
        await dataPromise;

        expect(receivedPayloads.length).toBe(2);
        const [firstPayload, secondPayload] = receivedPayloads;
        if (!firstPayload || !secondPayload) {
          throw new Error("Expected two payloads to be received");
        }
        expect(firstPayload.equals(testData1)).toBe(true);
        expect(secondPayload.equals(testData2)).toBe(true);
      });

      it("should handle empty payload frames", async () => {
        const testData = Buffer.alloc(0);
        const frame = createWebSocketFrame(testData);

        const dataPromise = new Promise<Buffer>((resolve) => {
          emitter.on("data", resolve);
        });

        mockSocket.emit("data", frame);
        const payload = await dataPromise;
        expect(payload.length).toBe(0);
      });
    });

    describe("fragmented frames", () => {
      it("should handle frame split across multiple data chunks", async () => {
        const testData = Buffer.from("Split frame test");
        const frame = createWebSocketFrame(testData);

        const chunk1 = frame.subarray(0, 5);
        const chunk2 = frame.subarray(5);

        const dataPromise = new Promise<Buffer>((resolve) => {
          emitter.on("data", resolve);
        });

        mockSocket.emit("data", chunk1);
        mockSocket.emit("data", chunk2);

        const payload = await dataPromise;
        expect(payload.equals(testData)).toBe(true);
      });
    });

    describe("error handling", () => {
      it("should emit error for invalid opcode", async () => {
        const invalidFrame = Buffer.from([0x81, 0x05, 0x48, 0x65, 0x6c, 0x6c, 0x6f]); // Opcode for text frame

        const errorPromise = new Promise<ParserError>((resolve) => {
          emitter.on("dataParseError", resolve);
        });

        mockSocket.emit("data", invalidFrame);
        const error = await errorPromise;

        expect(error.message).toContain(
          "Failed to parse WebSocket frame: Unsupported WebSocket frame received",
        );
        expect(error.message).toContain("0x1");
      });

      it("should emit error for masked frames from server", async () => {
        const testData = Buffer.from("Masked frame");
        const maskedFrame = createWebSocketFrame(testData, 0x82, true);

        const errorPromise = new Promise<ParserError>((resolve) => {
          emitter.on("dataParseError", resolve);
        });

        mockSocket.emit("data", maskedFrame);
        const error = await errorPromise;

        expect(error.message).toContain("Received masked frame from server");
      });
    });

    describe("buffer management", () => {
      it("should clear buffer after successful frame parsing", async () => {
        const testData = Buffer.from("Buffer clear test");
        const frame = createWebSocketFrame(testData);

        const dataPromise = new Promise<Buffer>((resolve) => {
          emitter.on("data", resolve);
        });

        mockSocket.emit("data", frame);
        await dataPromise;

        expect(parser.getBufferSize()).toBe(0);
      });

      it("should maintain buffer with incomplete frame data", () => {
        const testData = Buffer.from("Incomplete frame test");
        const frame = createWebSocketFrame(testData);
        const partialFrame = frame.subarray(0, frame.length - 5);

        mockSocket.emit("data", partialFrame);

        expect(parser.getBufferSize()).toBe(partialFrame.length);
      });
    });
  });
});
