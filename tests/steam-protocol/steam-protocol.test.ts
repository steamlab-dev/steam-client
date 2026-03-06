import Long from "long";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import ConnectionError from "@/connection/error";
import ContextCreator from "@/steam-protocol/context-creator";
import SteamProtocol, { SteamProtocolError } from "@/steam-protocol/steam-protocol";

vi.mock("@/steam-protocol/context-creator", () => ({
  default: {
    create: vi.fn(),
  },
}));

describe("SteamProtocol", () => {
  const options = {
    steamCM: { host: "127.0.0.1", port: 27017 },
    timeout: 5000,
  };

  const createMockContext = () => {
    const connection = {
      hasActiveConnection: vi.fn().mockReturnValue(false),
      connect: vi.fn().mockResolvedValue(undefined),
      disconnect: vi.fn(),
      getState: vi.fn().mockReturnValue({ connected: true }),
      once: vi.fn(),
      off: vi.fn(),
    };

    const protos = {
      isLoaded: vi.fn().mockReturnValue(true),
      loadProtos: vi.fn().mockResolvedValue(undefined),
    };

    const session = {
      getSession: vi.fn().mockReturnValue({ steamId: Long.UZERO, clientId: 0, isLoggedIn: false }),
      setSteamId: vi.fn(),
      cleanUp: vi.fn(),
    };

    const messageHandler = {
      addHandler: vi.fn(),
      cleanUp: vi.fn(),
    };

    const protoMessenger = {
      send: vi.fn(),
      sendWithResponse: vi.fn(),
      cleanUp: vi.fn(),
    };

    const serviceCallMessenger = {
      send: vi.fn(),
      sendWithResponse: vi.fn(),
      cleanUp: vi.fn(),
    };

    const emitter = {
      emit: vi.fn(),
    };

    const heartBeat = {
      cleanUp: vi.fn(),
    };

    return {
      options,
      connection,
      protos,
      session,
      messageHandler,
      protoMessenger,
      serviceCallMessenger,
      emitter,
      heartBeat,
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("rejects connect when connection is already active with SteamProtocolError", async () => {
    const context = createMockContext();
    context.connection.hasActiveConnection.mockReturnValue(true);
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);

    await expect(protocol.connect()).rejects.toBeInstanceOf(SteamProtocolError);
    await expect(protocol.connect()).rejects.toMatchObject({ subsystem: "protocol" });
    await expect(protocol.connect()).rejects.toThrow("There's an active connection");
  });

  it("loads protos only when not already loaded", async () => {
    const context = createMockContext();
    context.protos.isLoaded.mockReturnValue(false);
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);
    await protocol.connect();

    expect(context.protos.loadProtos).toHaveBeenCalledTimes(1);

    context.protos.isLoaded.mockReturnValue(true);
    context.connection.hasActiveConnection.mockReturnValue(false);
    await protocol.disconnect();
  });

  it("sends ClientHello after successful connection", async () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);
    await protocol.connect();

    expect(context.connection.connect).toHaveBeenCalledTimes(1);
    expect(context.protoMessenger.send).toHaveBeenCalledWith({
      eMsg: EMsg.k_EMsgClientHello,
      payload: { protocol_version: 65581 },
    });
  });

  it("cleanup is idempotent when disconnected callback fires repeatedly", () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);
    const disconnectedHandler = context.connection.once.mock.calls[0]?.[1] as
      | ((msg: { error: ConnectionError; source: "socket" | "parser" }) => void)
      | undefined;

    expect(disconnectedHandler).toBeTypeOf("function");

    disconnectedHandler?.({
      error: new ConnectionError("closed", "transport"),
      source: "socket",
    });
    disconnectedHandler?.({
      error: new ConnectionError("closed again", "transport"),
      source: "socket",
    });

    expect(context.connection.off).toHaveBeenCalledTimes(1);
    expect(context.session.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.messageHandler.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.protoMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.serviceCallMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.heartBeat.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.emitter.emit).toHaveBeenCalledTimes(1);

    protocol.disconnect();
  });

  it("throws if internal context creation is attempted twice", () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);

    expect(() => (protocol as unknown as { createContext: () => void }).createContext()).toThrow(
      "SteamProtoContext is already defined",
    );
  });

  it("cleanup without a disconnect message does not emit disconnected", () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);

    (protocol as unknown as { cleanUp: () => void }).cleanUp();

    expect(context.emitter.emit).not.toHaveBeenCalled();
    expect(context.session.cleanUp).toHaveBeenCalledTimes(1);
  });

  it("throws Not Connected when trying to send while disconnected", () => {
    const context = createMockContext();
    context.connection.getState.mockReturnValue({ connected: false });
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);

    expect(() =>
      protocol.send({
        eMsg: EMsg.k_EMsgClientHello,
        payload: {} as never,
      }),
    ).toThrow("Not Connected");
  });

  it("manual disconnect stops heartbeat and runs full cleanup without emitting disconnected", () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);
    protocol.disconnect();

    expect(context.heartBeat.cleanUp).toHaveBeenCalledTimes(2);
    expect(context.connection.disconnect).toHaveBeenCalledTimes(1);
    expect(context.connection.off).toHaveBeenCalledTimes(1);
    expect(context.session.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.messageHandler.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.protoMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.serviceCallMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.emitter.emit).not.toHaveBeenCalled();
    expect(() => protocol.getEmitter()).toThrow("SteamProtoContext is undefined");
  });

  it("manual disconnect still cleans protocol resources if connection disconnect throws", () => {
    const context = createMockContext();
    const disconnectError = new Error("disconnect failed");
    context.connection.disconnect.mockImplementation(() => {
      throw disconnectError;
    });
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);

    expect(() => protocol.disconnect()).toThrow(disconnectError);
    expect(context.heartBeat.cleanUp).toHaveBeenCalledTimes(2);
    expect(context.connection.off).toHaveBeenCalledTimes(1);
    expect(context.session.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.messageHandler.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.protoMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.serviceCallMessenger.cleanUp).toHaveBeenCalledTimes(1);
    expect(context.emitter.emit).not.toHaveBeenCalled();
    expect(() => protocol.getEmitter()).toThrow("SteamProtoContext is undefined");
  });

  it("throws SteamProtoContext is undefined after context cleanup", () => {
    const context = createMockContext();
    vi.mocked(ContextCreator.create).mockReturnValue(context as never);

    const protocol = new SteamProtocol(options);
    (protocol as unknown as { cleanUp: () => void }).cleanUp();

    expect(() => protocol.getEmitter()).toThrow("SteamProtoContext is undefined");
  });
});
