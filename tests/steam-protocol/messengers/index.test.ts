import { beforeEach, describe, expect, it, vi } from "vitest";
import MessengerFactory from "@/steam-protocol/messengers";
import ProtoHeaderBuilder from "@/steam-protocol/messengers/common/proto-header-builder";
import ProtoMessenger from "@/steam-protocol/messengers/proto-messenger";
import ServiceCallMessenger from "@/steam-protocol/messengers/service-call-messenger";

vi.mock("@/steam-protocol/messengers/common/proto-header-builder", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/messengers/proto-messenger", () => ({
  default: vi.fn(),
}));
vi.mock("@/steam-protocol/messengers/service-call-messenger", () => ({
  default: vi.fn(),
}));

describe("MessengerFactory", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates default header builder when none is provided", () => {
    const headerBuilder = { id: "builder" };
    const protoMessenger = { id: "proto" };
    const serviceCallMessenger = { id: "service" };
    vi.mocked(ProtoHeaderBuilder).mockImplementation(function ProtoHeaderBuilderMock() {
      return headerBuilder as never;
    });
    vi.mocked(ProtoMessenger).mockImplementation(function ProtoMessengerMock() {
      return protoMessenger as never;
    });
    vi.mocked(ServiceCallMessenger).mockImplementation(function ServiceCallMessengerMock() {
      return serviceCallMessenger as never;
    });

    const deps = { connection: {}, protos: {}, session: {} };
    const messengers = MessengerFactory(deps as never);

    expect(ProtoHeaderBuilder).toHaveBeenCalledWith(deps.protos, deps.session);
    expect(ProtoMessenger).toHaveBeenCalledWith(deps.protos, deps.connection, headerBuilder);
    expect(ServiceCallMessenger).toHaveBeenCalledWith(
      deps.protos,
      deps.connection,
      deps.session,
      headerBuilder,
    );
    expect(messengers).toEqual({
      protoMessenger,
      serviceCallMessenger,
    });
  });

  it("uses provided header builder", () => {
    const provided = { id: "provided" };
    MessengerFactory({
      connection: {},
      protos: {},
      session: {},
      headerBuilder: provided as never,
    } as never);

    expect(ProtoHeaderBuilder).not.toHaveBeenCalled();
    expect(ProtoMessenger).toHaveBeenCalledWith(expect.anything(), expect.anything(), provided);
    expect(ServiceCallMessenger).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.anything(),
      provided,
    );
  });
});
