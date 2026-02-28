import { beforeEach, describe, expect, it, vi } from "vitest";
import MessageHandler, {
  MessageHandlerError,
} from "@/steam-protocol/message-handler/message-handler";

describe("MessageHandler", () => {
  const createBase = () => {
    const connection = {
      on: vi.fn(),
      off: vi.fn(),
    };

    const emitter = {
      emit: vi.fn(),
    };

    const parser = {
      parse: vi.fn(),
    };

    const handler = new MessageHandler(connection as never, emitter as never, parser as never);
    const onData = connection.on.mock.calls[0]?.[1] as
      | ((data: Buffer) => Promise<void>)
      | undefined;

    return { connection, emitter, parser, handler, onData };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("executes handlers in chain and emits decoded steam messages", async () => {
    const { emitter, parser, handler, onData } = createBase();
    parser.parse.mockResolvedValue([
      { eMsg: 1, isProto: true, rawBody: Buffer.alloc(0), header: {} },
    ]);

    const firstDecoded = {
      eMsg: 1,
      isProto: true,
      rawBody: Buffer.alloc(0),
      header: {},
      body: { a: 1 },
    };
    const secondDecoded = { ...firstDecoded, body: { b: 2 } };

    const firstHandler = {
      canHandle: vi.fn().mockReturnValue(true),
      handle: vi.fn().mockReturnValue(firstDecoded),
    };

    const secondHandler = {
      canHandle: vi.fn().mockReturnValue(true),
      handle: vi.fn().mockReturnValue(secondDecoded),
    };

    handler.addHandler(firstHandler as never, secondHandler as never);

    await onData?.(Buffer.from([0x01]));

    expect(firstHandler.handle).toHaveBeenCalledTimes(1);
    expect(secondHandler.handle).toHaveBeenCalledWith(firstDecoded);
    expect(emitter.emit).toHaveBeenCalledWith("steam-messages", [firstDecoded, secondDecoded]);
  });

  it("emits steam-message-error and stops processing current message when handler throws", async () => {
    const { emitter, parser, handler, onData } = createBase();
    const parsed = { eMsg: 2, isProto: true, rawBody: Buffer.alloc(0), header: {} };
    parser.parse.mockResolvedValue([parsed]);

    const failingHandler = {
      canHandle: vi.fn().mockReturnValue(true),
      handle: vi.fn().mockImplementation(() => {
        throw new Error("boom");
      }),
    };

    const nextHandler = {
      canHandle: vi.fn().mockReturnValue(true),
      handle: vi.fn(),
    };

    handler.addHandler(failingHandler as never, nextHandler as never);

    await onData?.(Buffer.from([0x02]));

    expect(emitter.emit).toHaveBeenCalledWith(
      "steam-message-error",
      expect.any(MessageHandlerError),
    );
    const emittedError = emitter.emit.mock.calls[0]?.[1] as MessageHandlerError;
    expect(emittedError).toBeInstanceOf(MessageHandlerError);
    expect(emittedError.name).toBe("MessageHandlerError");
    expect(emittedError.message).toContain("Failed to process steam message");
    expect(emittedError.subsystem).toBe("handler");
    expect(emittedError.rawMessage).toBe(parsed);
    expect(emittedError.cause).toBeInstanceOf(Error);
    expect(nextHandler.handle).not.toHaveBeenCalled();
  });

  it("cleanup detaches data listener from connection", () => {
    const { connection, handler } = createBase();
    const onData = connection.on.mock.calls[0]?.[1];

    handler.cleanUp();

    expect(connection.off).toHaveBeenCalledWith("data", onData);
  });

  it("skips filtered messages and does not emit steam-messages", async () => {
    const { emitter, parser, handler, onData } = createBase();
    parser.parse.mockResolvedValue([
      { eMsg: 1, isProto: true, rawBody: Buffer.alloc(0), header: {} },
    ]);

    vi.spyOn(
      handler as unknown as { isFiltered: (msg: unknown) => boolean },
      "isFiltered",
    ).mockReturnValue(true);

    await onData?.(Buffer.from([0x01]));

    expect(emitter.emit).not.toHaveBeenCalledWith("steam-messages", expect.anything());
  });

  it("skips handlers that cannot handle and ignores empty handler outputs", async () => {
    const { emitter, parser, handler, onData } = createBase();
    parser.parse.mockResolvedValue([
      { eMsg: 1, isProto: true, rawBody: Buffer.alloc(0), header: {} },
    ]);

    const skippedHandler = {
      canHandle: vi.fn().mockReturnValue(false),
      handle: vi.fn(),
    };
    const emptyHandler = {
      canHandle: vi.fn().mockReturnValue(true),
      handle: vi.fn().mockReturnValue(undefined),
    };

    handler.addHandler(skippedHandler as never, emptyHandler as never);

    await onData?.(Buffer.from([0x02]));

    expect(skippedHandler.handle).not.toHaveBeenCalled();
    expect(emptyHandler.handle).toHaveBeenCalledTimes(1);
    expect(emitter.emit).not.toHaveBeenCalledWith("steam-messages", expect.anything());
  });
});
