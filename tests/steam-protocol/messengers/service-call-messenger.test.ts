import { describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import ServiceCallMessenger, {
  ServiceCallMessengerError,
} from "@/steam-protocol/senders/service-call-messenger";

describe("ServiceCallMessenger", () => {
  const createMessenger = (isLoggedIn: boolean) => {
    const protos = { encode: vi.fn().mockReturnValue(Buffer.from([0xcc])) };
    const connection = { send: vi.fn() };
    const session = { isLoggedIn: vi.fn().mockReturnValue(isLoggedIn) };
    const headerBuilder = { build: vi.fn().mockReturnValue(Buffer.from([0xdd])) };
    const pendingRequest = {
      add: vi.fn().mockReturnValue(Promise.resolve({ ok: true })),
      resolve: vi.fn().mockReturnValue(true),
      reject: vi.fn().mockReturnValue(true),
      cleanUp: vi.fn(),
    };

    const messenger = new ServiceCallMessenger(
      protos as never,
      connection as never,
      session as never,
      headerBuilder as never,
      pendingRequest as never,
    );

    return { messenger, connection, headerBuilder, pendingRequest };
  };

  it("uses authed eMsg when session is logged in", async () => {
    const { messenger, headerBuilder } = createMessenger(true);

    await messenger.sendWithResponse({
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {} as never,
    });

    expect(headerBuilder.build).toHaveBeenCalledWith(
      EMsg.k_EMsgServiceMethodCallFromClient,
      expect.objectContaining({ target_job_name: "Authentication.BeginAuthSessionViaQR#1" }),
    );
  });

  it("uses non-authed eMsg when session is not logged in", async () => {
    const { messenger, headerBuilder } = createMessenger(false);

    await messenger.sendWithResponse({
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {} as never,
    });

    expect(headerBuilder.build).toHaveBeenCalledWith(
      EMsg.k_EMsgServiceMethodCallFromClientNonAuthed,
      expect.objectContaining({ target_job_name: "Authentication.BeginAuthSessionViaQR#1" }),
    );
  });

  it("generates monotonic jobid_source values", async () => {
    const { messenger, headerBuilder } = createMessenger(true);

    await messenger.sendWithResponse({
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {} as never,
    });

    await messenger.sendWithResponse({
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {} as never,
    });

    const first = headerBuilder.build.mock.calls[0]?.[1]?.jobid_source;
    const second = headerBuilder.build.mock.calls[1]?.[1]?.jobid_source;

    expect(first).toBeDefined();
    expect(second).toBeDefined();
    expect(first.toString()).toBe("1");
    expect(second.toString()).toBe("2");
  });

  it("throws typed error for invalid proto message format", async () => {
    const { messenger } = createMessenger(true);

    await expect(
      messenger.sendWithResponse({
        message: "InvalidMessageName" as never,
        payload: {} as never,
      }),
    ).rejects.toBeInstanceOf(ServiceCallMessengerError);
    await expect(
      messenger.sendWithResponse({
        message: "InvalidMessageName" as never,
        payload: {} as never,
      }),
    ).rejects.toMatchObject({ subsystem: "service-call-messenger" });
  });

  it("resolveRequest/rejectRequest return false for missing job ids", () => {
    const { messenger, pendingRequest } = createMessenger(true);

    expect(messenger.resolveRequest(undefined, { ok: true })).toBe(false);
    expect(messenger.rejectRequest(undefined, new Error("x"))).toBe(false);
    expect(pendingRequest.resolve).not.toHaveBeenCalled();
    expect(pendingRequest.reject).not.toHaveBeenCalled();
  });

  it("resolveRequest/rejectRequest delegate to pending map for valid job ids", () => {
    const { messenger, pendingRequest } = createMessenger(true);

    expect(messenger.resolveRequest({ toString: () => "42" } as never, { ok: true })).toBe(true);
    expect(messenger.rejectRequest({ toString: () => "42" } as never, new Error("boom"))).toBe(
      true,
    );

    expect(pendingRequest.resolve).toHaveBeenCalledWith("42", { ok: true });
    expect(pendingRequest.reject).toHaveBeenCalledWith("42", expect.any(Error));
  });

  it("cleanup rejects pending requests with typed messenger error", () => {
    const { messenger, pendingRequest } = createMessenger(true);
    messenger.cleanUp();

    const cleanupError = pendingRequest.cleanUp.mock.calls[0]?.[0] as ServiceCallMessengerError;
    expect(cleanupError).toBeInstanceOf(ServiceCallMessengerError);
    expect(cleanupError.subsystem).toBe("service-call-messenger");
    expect(cleanupError.message).toContain("Cancelled by ServiceCallSender");
  });
});
