import { randomBytes } from "node:crypto";
import { EventEmitter } from "node:events";
import type { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import DataSenderError from "@/connection/data-senders/error";
import WebSocketDataSender from "@/connection/data-senders/websocket-sender";

// --- MOCKS, TYPES & HELPERS ---

// Extend the real Socket type so TS accepts it anywhere a Socket is expected
interface MockSocket extends Socket {
  write: Mock<(chunk: unknown) => boolean>;
  writable: boolean;
}

// Factory for mock sockets
const createMockSocket = (writable = true): MockSocket => {
  const socket = new EventEmitter() as unknown as MockSocket;

  socket.write = vi.fn(() => true);
  socket.writable = writable;

  // Stub required Socket methods to satisfy TS
  (socket as unknown as { connect: (...args: unknown[]) => unknown }).connect = vi.fn();
  (socket as unknown as { setEncoding: (...args: unknown[]) => unknown }).setEncoding = vi.fn();
  (socket as unknown as { pause: (...args: unknown[]) => unknown }).pause = vi.fn();
  (socket as unknown as { resume: (...args: unknown[]) => unknown }).resume = vi.fn();
  (socket as unknown as { destroy: (...args: unknown[]) => unknown }).destroy = vi.fn();
  (socket as unknown as { destroySoon: (...args: unknown[]) => unknown }).destroySoon = vi.fn();
  (socket as unknown as { end: (...args: unknown[]) => unknown }).end = vi.fn();
  (socket as unknown as { ref: (...args: unknown[]) => unknown }).ref = vi.fn();
  (socket as unknown as { unref: (...args: unknown[]) => unknown }).unref = vi.fn();
  return socket;
};

// --- MOCKS ---

vi.mock("crypto", () => ({
  randomBytes: vi.fn(),
}));

// Explicitly type the mocked randomBytes so TS knows it returns Buffer
const mockRandomBytes = vi.mocked(randomBytes) as unknown as Mock<(size: number) => Buffer>;

// --- TESTS ---

describe("WebSocketDataSender", () => {
  let mockSocket: MockSocket;
  let sender: WebSocketDataSender;

  beforeEach(() => {
    mockSocket = createMockSocket();
    sender = new WebSocketDataSender();
    mockRandomBytes.mockReturnValue(Buffer.from([0x12, 0x34, 0x56, 0x78]));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("attach method", () => {
    it("should attach a socket", () => {
      sender.attach(mockSocket);
      // We can't directly test the private socket property, but we can test behavior
      expect(() => sender.attach(mockSocket)).not.toThrow();
    });
  });

  describe("send method", () => {
    it("should throw DataSenderError when no socket is attached", async () => {
      const testData = Buffer.from("test");

      await expect(sender.send(testData)).rejects.toThrow(DataSenderError);
      await expect(sender.send(testData)).rejects.toThrow("Socket is not attached");
    });

    it("should throw DataSenderError when socket is not writable", async () => {
      mockSocket.writable = false;
      sender.attach(mockSocket);
      const testData = Buffer.from("test");

      await expect(sender.send(testData)).rejects.toThrow(DataSenderError);
      expect(mockSocket.write).not.toHaveBeenCalled();
    });

    it("should write frame to socket when socket is writable", async () => {
      sender.attach(mockSocket);
      const testData = Buffer.from("test");

      await sender.send(testData);

      expect(mockSocket.write).toHaveBeenCalledOnce();
      expect(mockSocket.write).toHaveBeenCalledWith(expect.any(Buffer));
    });

    it("should wait for drain event when write returns false", async () => {
      sender.attach(mockSocket);
      const testData = Buffer.from("test");
      mockSocket.write.mockReturnValue(false);

      const sendPromise = sender.send(testData);

      // Promise should be pending
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 10));
      const result = await Promise.race([sendPromise, timeoutPromise]);
      expect(result).toBeUndefined(); // timeout won, send still pending

      // Emit drain event
      mockSocket.emit("drain");

      // Now send should complete
      await sendPromise;
      expect(mockSocket.write).toHaveBeenCalledOnce();
    });

    it("should complete immediately when write returns true", async () => {
      sender.attach(mockSocket);
      const testData = Buffer.from("test");
      mockSocket.write.mockReturnValue(true);

      await sender.send(testData);

      expect(mockSocket.write).toHaveBeenCalledOnce();
    });
  });

  describe("WebSocket frame creation", () => {
    const getWrittenFrame = (index: number = 0): Buffer => {
      const callArgs = mockSocket.write.mock.calls[index];
      if (!callArgs) {
        throw new Error(`Expected write call at index ${index}`);
      }
      return callArgs[0] as Buffer;
    };

    beforeEach(() => {
      sender.attach(mockSocket);
    });

    it("should create correct frame for small payload (<= 125 bytes)", async () => {
      const testData = Buffer.from("Hello");

      await sender.send(testData);

      const writtenFrame = getWrittenFrame();

      // Frame structure: [FIN+opcode][MASK+length][mask key 4 bytes][masked payload]
      expect(writtenFrame.length).toBe(11); // 2 + 4 + 5
      expect(writtenFrame[0]).toBe(0x82); // FIN + binary opcode
      expect(writtenFrame[1]).toBe(0x80 | 5); // MASK + length 5

      // Check masking key
      expect(writtenFrame.subarray(2, 6)).toEqual(Buffer.from([0x12, 0x34, 0x56, 0x78]));

      // Check masked payload
      const expectedMaskedPayload = Buffer.from([
        "H".charCodeAt(0) ^ 0x12,
        "e".charCodeAt(0) ^ 0x34,
        "l".charCodeAt(0) ^ 0x56,
        "l".charCodeAt(0) ^ 0x78,
        "o".charCodeAt(0) ^ 0x12,
      ]);
      expect(writtenFrame.subarray(6)).toEqual(expectedMaskedPayload);
    });

    it("should create correct frame for medium payload (126-65535 bytes)", async () => {
      const testData = Buffer.alloc(1000, 0x41); // 1000 bytes of 'A'

      await sender.send(testData);

      const writtenFrame = getWrittenFrame();

      // Frame structure: [FIN+opcode][MASK+126][length 2 bytes][mask key 4 bytes][masked payload]
      expect(writtenFrame.length).toBe(1008); // 2 + 2 + 4 + 1000
      expect(writtenFrame[0]).toBe(0x82); // FIN + binary opcode
      expect(writtenFrame[1]).toBe(0x80 | 126); // MASK + 126 indicator

      // Check 16-bit length
      expect(writtenFrame.readUInt16BE(2)).toBe(1000);

      // Check masking key
      expect(writtenFrame.subarray(4, 8)).toEqual(Buffer.from([0x12, 0x34, 0x56, 0x78]));
    });

    it("should create correct frame for large payload (> 65535 bytes)", async () => {
      const testData = Buffer.alloc(70000, 0x42); // 70000 bytes of 'B'

      await sender.send(testData);

      const writtenFrame = getWrittenFrame();

      // Frame structure: [FIN+opcode][MASK+127][length 8 bytes][mask key 4 bytes][masked payload]
      expect(writtenFrame.length).toBe(70014); // 2 + 8 + 4 + 70000
      expect(writtenFrame[0]).toBe(0x82); // FIN + binary opcode
      expect(writtenFrame[1]).toBe(0x80 | 127); // MASK + 127 indicator

      // Check 64-bit length
      expect(writtenFrame.readBigUInt64BE(2)).toBe(BigInt(70000));

      // Check masking key
      expect(writtenFrame.subarray(10, 14)).toEqual(Buffer.from([0x12, 0x34, 0x56, 0x78]));
    });

    it("should handle empty payload", async () => {
      const testData = Buffer.alloc(0);

      await sender.send(testData);

      const writtenFrame = getWrittenFrame();

      expect(writtenFrame.length).toBe(6); // 2 + 4 + 0
      expect(writtenFrame[0]).toBe(0x82); // FIN + binary opcode
      expect(writtenFrame[1]).toBe(0x80 | 0); // MASK + length 0

      // Check masking key
      expect(writtenFrame.subarray(2, 6)).toEqual(Buffer.from([0x12, 0x34, 0x56, 0x78]));
    });

    it("should handle boundary payload sizes correctly", async () => {
      // Test payload of exactly 125 bytes (boundary for small frames)
      const testData125 = Buffer.alloc(125, 0x43);
      await sender.send(testData125);

      let writtenFrame = getWrittenFrame();
      expect(writtenFrame[1]).toBe(0x80 | 125); // Should use small frame format
      expect(writtenFrame.length).toBe(131); // 2 + 4 + 125

      // Test payload of exactly 126 bytes (boundary for medium frames)
      mockSocket.write.mockClear();
      const testData126 = Buffer.alloc(126, 0x44);
      await sender.send(testData126);

      writtenFrame = getWrittenFrame();
      expect(writtenFrame[1]).toBe(0x80 | 126); // Should use medium frame format
      expect(writtenFrame.length).toBe(134); // 2 + 2 + 4 + 126

      // Test payload of exactly 65535 bytes (boundary for large frames)
      mockSocket.write.mockClear();
      const testData65535 = Buffer.alloc(65535, 0x45);
      await sender.send(testData65535);

      writtenFrame = getWrittenFrame();
      expect(writtenFrame[1]).toBe(0x80 | 126); // Should still use medium frame format
      expect(writtenFrame.readUInt16BE(2)).toBe(65535);

      // Test payload of exactly 65536 bytes (should use large frames)
      mockSocket.write.mockClear();
      const testData65536 = Buffer.alloc(65536, 0x46);
      await sender.send(testData65536);

      writtenFrame = getWrittenFrame();
      expect(writtenFrame[1]).toBe(0x80 | 127); // Should use large frame format
    });

    it("should apply masking correctly", async () => {
      const testData = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04]);
      const maskKey = Buffer.from([0xaa, 0xbb, 0xcc, 0xdd]);
      mockRandomBytes.mockReturnValue(maskKey);

      await sender.send(testData);

      const writtenFrame = getWrittenFrame();
      const maskedPayload = writtenFrame.subarray(6);

      // Verify each byte is properly masked
      expect(maskedPayload[0]).toBe(0x00 ^ 0xaa);
      expect(maskedPayload[1]).toBe(0x01 ^ 0xbb);
      expect(maskedPayload[2]).toBe(0x02 ^ 0xcc);
      expect(maskedPayload[3]).toBe(0x03 ^ 0xdd);
      expect(maskedPayload[4]).toBe(0x04 ^ 0xaa); // Wraps around to first mask byte
    });

    it("should generate different masking keys for different calls", async () => {
      const testData = Buffer.from("test");

      // First call with one mask
      mockRandomBytes.mockReturnValueOnce(Buffer.from([0x11, 0x22, 0x33, 0x44]));
      await sender.send(testData);
      const firstFrame = getWrittenFrame(0);

      // Second call with different mask
      mockRandomBytes.mockReturnValueOnce(Buffer.from([0x55, 0x66, 0x77, 0x88]));
      await sender.send(testData);
      const secondFrame = getWrittenFrame(1);

      // Frames should be different due to different masks
      expect(firstFrame).not.toEqual(secondFrame);
      expect(firstFrame.subarray(2, 6)).toEqual(Buffer.from([0x11, 0x22, 0x33, 0x44]));
      expect(secondFrame.subarray(2, 6)).toEqual(Buffer.from([0x55, 0x66, 0x77, 0x88]));
    });
  });

  describe("error conditions", () => {
    it("should handle drain event only once when write returns false", async () => {
      sender.attach(mockSocket);
      const testData = Buffer.from("test");
      mockSocket.write.mockReturnValue(false);

      const sendPromise = sender.send(testData);

      // Emit multiple drain events
      mockSocket.emit("drain");
      mockSocket.emit("drain");
      mockSocket.emit("drain");

      await sendPromise;

      // Should have completed after first drain
      expect(mockSocket.write).toHaveBeenCalledOnce();
    });

    it("should throw error when socket becomes unwritable after attachment", async () => {
      sender.attach(mockSocket);
      mockSocket.writable = false;
      const testData = Buffer.from("test");

      await expect(sender.send(testData)).rejects.toThrow(DataSenderError);
      expect(mockSocket.write).not.toHaveBeenCalled();
    });
  });
});
