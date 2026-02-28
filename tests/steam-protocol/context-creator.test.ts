import { beforeEach, describe, expect, it, vi } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import Connection from "@/connection";
import ContextCreator from "@/steam-protocol/context-creator";
import HeartBeatManager from "@/steam-protocol/heartbeat-manager";
import MessageHandlerFactory from "@/steam-protocol/message-handler";
import MessengerFactory from "@/steam-protocol/messengers";
import ProtoManager from "@/steam-protocol/proto-manager";
import SessionManager from "@/steam-protocol/session-manager";

vi.mock("@/connection", () => ({
  default: { create: vi.fn() },
}));
vi.mock("@/steam-protocol/messengers", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/message-handler", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/heartbeat-manager", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/proto-manager", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/session-manager", () => ({
  default: vi.fn(),
}));

describe("ContextCreator", () => {
  const options = {
    steamCM: { host: "127.0.0.1", port: 27017 },
    timeout: 5000,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates a context from defaults when instances are not provided", () => {
    const connection = { id: "connection" };
    const protos = { id: "protos" };
    const session = { id: "session" };
    const protoMessenger = { id: "proto-messenger" };
    const serviceCallMessenger = { id: "service-call-messenger" };
    const heartBeat = { id: "heartbeat" };
    const messageHandler = { id: "message-handler" };

    vi.mocked(Connection.create).mockReturnValue(connection as never);
    vi.mocked(ProtoManager).mockImplementation(function ProtoManagerMock() {
      return protos as never;
    });
    vi.mocked(SessionManager).mockImplementation(function SessionManagerMock() {
      return session as never;
    });
    vi.mocked(MessengerFactory).mockReturnValue({
      protoMessenger,
      serviceCallMessenger,
    } as never);
    vi.mocked(HeartBeatManager).mockImplementation(function HeartBeatManagerMock() {
      return heartBeat as never;
    });
    vi.mocked(MessageHandlerFactory).mockReturnValue(messageHandler as never);

    const context = ContextCreator.create(options as never);

    expect(Connection.create).toHaveBeenCalledWith(options);
    expect(ProtoManager).toHaveBeenCalledWith("steam");
    expect(SessionManager).toHaveBeenCalledTimes(1);
    expect(MessengerFactory).toHaveBeenCalledWith({ connection, protos, session });
    expect(HeartBeatManager).toHaveBeenCalledWith(protoMessenger);
    expect(MessageHandlerFactory).toHaveBeenCalledWith(
      expect.objectContaining({
        connection,
        protos,
        protoMessenger,
        serviceCallMessenger,
        session,
        heartBeat,
        emitter: expect.any(TypedEventEmitter),
      }),
    );
    expect(context).toEqual(
      expect.objectContaining({
        options,
        connection,
        protos,
        session,
        protoMessenger,
        serviceCallMessenger,
        heartBeat,
        messageHandler,
        emitter: expect.any(TypedEventEmitter),
      }),
    );
  });

  it("uses injected instances when provided", () => {
    const connection = { id: "provided-connection" };
    const protos = { id: "provided-protos" };
    const session = { id: "provided-session" };
    const emitter = new TypedEventEmitter();
    const protoMessenger = { id: "proto-messenger" };
    const serviceCallMessenger = { id: "service-call-messenger" };
    const heartBeat = { id: "heartbeat" };
    const messageHandler = { id: "message-handler" };

    vi.mocked(MessengerFactory).mockReturnValue({
      protoMessenger,
      serviceCallMessenger,
    } as never);
    vi.mocked(HeartBeatManager).mockImplementation(function HeartBeatManagerMock() {
      return heartBeat as never;
    });
    vi.mocked(MessageHandlerFactory).mockReturnValue(messageHandler as never);

    const context = ContextCreator.create(options as never, {
      connection: connection as never,
      protos: protos as never,
      session: session as never,
      emitter: emitter as never,
    });

    expect(Connection.create).not.toHaveBeenCalled();
    expect(ProtoManager).not.toHaveBeenCalled();
    expect(SessionManager).not.toHaveBeenCalled();
    expect(MessengerFactory).toHaveBeenCalledWith({ connection, protos, session });
    expect(context.connection).toBe(connection);
    expect(context.protos).toBe(protos);
    expect(context.session).toBe(session);
    expect(context.emitter).toBe(emitter);
  });
});
