import { describe, expect, it, vi } from "vitest";
import MessageHandlerFactory from "@/steam-protocol/message-handler";
import MessageHandler from "@/steam-protocol/message-handler/message-handler";
import MessageParser from "@/steam-protocol/message-handler/parser";

vi.mock("@/steam-protocol/message-handler/message-handler", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/message-handler/parser", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/message-handler/handlers/error-handler", () => ({
  default: vi.fn(function ErrorResponseHandlerMock() {
    return { name: "error-handler" };
  }),
}));
vi.mock("@/steam-protocol/message-handler/handlers/proto-handler", () => ({
  default: vi.fn(function ProtoResponseHandlerMock() {
    return { name: "proto-handler" };
  }),
}));
vi.mock("@/steam-protocol/message-handler/handlers/service-call-handler", () => ({
  default: vi.fn(function ServiceMethodResponseHandlerMock() {
    return { name: "service-call-handler" };
  }),
}));
vi.mock("@/steam-protocol/message-handler/handlers/non-proto-response-handler", () => ({
  default: vi.fn(function NonProtoResponseHandlerMock() {
    return { name: "non-proto-handler" };
  }),
}));
vi.mock("@/steam-protocol/message-handler/handlers/logon-handler", () => ({
  default: vi.fn(function LogOnResponseHandlerMock() {
    return { name: "logon-handler" };
  }),
}));

describe("message-handler factory", () => {
  it("creates parser by default and attaches default handlers", () => {
    const dispatcher = { addHandler: vi.fn() };
    vi.mocked(MessageParser).mockImplementation(function MessageParserMock() {
      return { parse: vi.fn() } as never;
    });
    vi.mocked(MessageHandler).mockImplementation(function MessageHandlerMock() {
      return dispatcher as never;
    });

    const deps = {
      connection: {},
      emitter: {},
      protos: {},
      protoMessenger: {},
      serviceCallMessenger: {},
      session: {},
      heartBeat: {},
    };

    const built = MessageHandlerFactory(deps as never);

    expect(MessageParser).toHaveBeenCalledWith(deps.protos);
    expect(MessageHandler).toHaveBeenCalledWith(deps.connection, deps.emitter, expect.any(Object));
    expect(dispatcher.addHandler).toHaveBeenCalledTimes(1);
    const handlers = dispatcher.addHandler.mock.calls[0];
    expect(handlers).toHaveLength(5);
    expect(built).toBe(dispatcher);
  });

  it("uses provided parser when supplied", () => {
    const dispatcher = { addHandler: vi.fn() };
    vi.mocked(MessageHandler).mockImplementation(function MessageHandlerMock() {
      return dispatcher as never;
    });
    const parser = { parse: vi.fn() };

    MessageHandlerFactory({
      connection: {},
      emitter: {},
      protos: {},
      protoMessenger: {},
      serviceCallMessenger: {},
      session: {},
      heartBeat: {},
      messageParser: parser as never,
    } as never);

    expect(MessageHandler).toHaveBeenCalledWith(expect.anything(), expect.anything(), parser);
  });
});
