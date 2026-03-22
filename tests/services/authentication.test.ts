import { setTimeout as delay } from "node:timers/promises";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import {
  EAuthSessionGuardType,
  EAuthTokenPlatformType,
} from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
import { jwtToJson } from "@/common/utils";
import SteamClientError from "@/steam-client/error";
import AuthenticationService from "@/steam-client/services/authentication";
import {
  createMachineId,
  createMachineName,
  encryptRsaPassword,
  mapSteamGuardToString as mapGuardTypeToString,
} from "@/steam-client/services/utils";
import SteamProtoConstants from "@/steam-protocol/constants";
import { SteamProtocolEResultError } from "@/steam-protocol/error";

vi.mock("node:timers/promises", () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}));

vi.mock("@/common/utils", () => ({
  jwtToJson: vi.fn(() => ({ payload: { sub: "76561197960265729" } })),
}));

vi.mock("@/steam-client/services/utils", async () => {
  const actual = await vi.importActual<typeof import("@/steam-client/services/utils")>(
    "@/steam-client/services/utils",
  );
  return {
    ...actual,
    createMachineId: vi.fn(() => Buffer.from([0x01, 0x02, 0x03])),
    createMachineName: vi.fn(() => "DESKTOP-ABCDE"),
    encryptRsaPassword: vi.fn(() => Promise.resolve("enc-pass")),
    hasConfirmationType: vi.fn(
      (
        confirmations: Array<{ confirmation_type?: number }> | undefined,
        confirmationType: number,
      ) => {
        return (confirmations ?? []).some((item) => item.confirmation_type === confirmationType);
      },
    ),
  };
});

describe("AuthenticationService", () => {
  it("maps guard type enum to consumer-friendly string", () => {
    expect(mapGuardTypeToString(EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode)).toBe(
      "device_code",
    );
    expect(
      mapGuardTypeToString(EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation),
    ).toBe("email_confirmation");
    expect(mapGuardTypeToString(999 as EAuthSessionGuardType)).toBe("unknown");
  });

  const createService = () => {
    const steamProtocol = {
      sendServiceCallWithRes: vi.fn(),
      sendWithResponse: vi.fn().mockResolvedValue({ eresult: 1 }),
      setSteamId: vi.fn(),
    };
    const emitter = {
      emit: vi.fn(),
    };

    const service = new AuthenticationService(steamProtocol as never, emitter as never);
    return { service, steamProtocol, emitter };
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(delay).mockResolvedValue(undefined);
  });

  it("loginViaQr succeeds and emits challenge URL + token events", async () => {
    const { service, steamProtocol, emitter } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: 100n,
      request_id: Buffer.from("req-1"),
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-token",
      access_token: "access-token",
    } as never);

    const response = await service.loginViaQr();

    expect(createMachineName).toHaveBeenCalled();
    expect(createMachineId).toHaveBeenCalled();
    expect(emitter.emit).toHaveBeenCalledWith("authentication-qr", {
      challengeUrl: "https://challenge",
    });
    expect(emitter.emit).toHaveBeenCalledWith("steam-auth-tokens", {
      tokens: {
        refreshToken: "refresh-token",
        accessToken: "access-token",
      },
    });
    expect(jwtToJson).toHaveBeenCalledWith("refresh-token");
    expect(steamProtocol.setSteamId).toHaveBeenCalledWith(76561197960265729n);
    expect(steamProtocol.sendWithResponse).toHaveBeenCalledWith({
      eMsg: EMsg.k_EMsgClientLogon,
      payload: expect.objectContaining({
        access_token: "refresh-token",
        machine_name: "DESKTOP-ABCDE",
        machine_id: Buffer.from([0x01, 0x02, 0x03]),
      }),
    });
    expect(response).toEqual({ eresult: 1 });
  });

  it("loginViaQr throws when challenge URL is missing", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      client_id: 10n,
      request_id: Buffer.from("r"),
    } as never);

    await expect(service.loginViaQr()).rejects.toMatchObject({
      message: "Missing challenge URL from BeginAuthSessionViaQR",
      subsystem: "validation",
    });
  });

  it("loginViaQr throws when client_id is missing", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      request_id: Buffer.from("r"),
    } as never);

    await expect(service.loginViaQr()).rejects.toMatchObject({
      message: "Missing client_id or request_id from BeginAuthSessionViaQR",
      subsystem: "validation",
    });
  });

  it("loginViaQr throws when request_id is missing", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: 1n,
    } as never);

    await expect(service.loginViaQr()).rejects.toThrow(
      "Missing client_id or request_id from BeginAuthSessionViaQR",
    );
  });

  it("loginViaQr throws when poll response has no access token", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: 1n,
      request_id: Buffer.from("req"),
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-only",
    } as never);

    await expect(service.loginViaQr()).rejects.toMatchObject({
      message: "Polling response missing refresh/access token",
      subsystem: "validation",
    });
  });

  it("loginViaCredentials succeeds with Steam Guard device code flow", async () => {
    const { service, steamProtocol, emitter } = createService();
    vi.spyOn(service, "GetPasswordRSAPublicKey").mockResolvedValue({
      publickey_mod: "aa",
      publickey_exp: "bb",
      timestamp: "123",
    } as never);
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode },
      ],
      client_id: 55n,
      steamid: 66n,
      request_id: Buffer.from("req"),
    } as never);
    vi.spyOn(service, "UpdateAuthSessionWithSteamGuardCode").mockResolvedValue({} as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-token",
      access_token: "access-token",
    } as never);
    const onSteamGuardRequired = Promise.resolve("123456");

    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );

    expect(encryptRsaPassword).toHaveBeenCalledWith("password", expect.any(Object));
    expect(emitter.emit).toHaveBeenCalledWith("authentication-2fa-required", {
      guardType: "device_code",
    });
    expect(service.UpdateAuthSessionWithSteamGuardCode).toHaveBeenCalledWith({
      code: "123456",
      code_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode,
      client_id: 55n,
      steamid: 66n,
    });
    expect(steamProtocol.setSteamId).toHaveBeenCalled();
    expect(steamProtocol.sendWithResponse).toHaveBeenCalledWith(
      expect.objectContaining({
        eMsg: EMsg.k_EMsgClientLogon,
      }),
    );
  });

  it("loginViaCredentials throws when polling response misses refresh token", async () => {
    const { service } = createService();
    vi.spyOn(service, "GetPasswordRSAPublicKey").mockResolvedValue({
      publickey_mod: "aa",
      publickey_exp: "bb",
      timestamp: "123",
    } as never);
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [],
      client_id: 11n,
      request_id: Buffer.from("req"),
      steamid: 22n,
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      access_token: "access-only",
    } as never);

    await expect(
      service.loginViaCredentials(
        { account_name: "alice", password: "password" },
        Promise.resolve("123456"),
      ),
    ).rejects.toThrow("Polling response missing refresh/access token");
  });

  it("loginViaCredentials throws for unsupported machine-token confirmations", async () => {
    const { service } = createService();
    vi.spyOn(service, "GetPasswordRSAPublicKey").mockResolvedValue({
      publickey_mod: "aa",
      publickey_exp: "bb",
      timestamp: "123",
    } as never);
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_MachineToken },
      ],
      client_id: 11n,
      request_id: Buffer.from("req"),
      steamid: 22n,
    } as never);

    await expect(
      service.loginViaCredentials(
        { account_name: "alice", password: "password" },
        Promise.resolve("123456"),
      ),
    ).rejects.toThrow("Machine token authentication is not supported yet.");
  });

  it("loginViaCredentials emits device/email confirmation without asking for code", async () => {
    const { service, emitter } = createService();
    vi.spyOn(service, "GetPasswordRSAPublicKey").mockResolvedValue({
      publickey_mod: "aa",
      publickey_exp: "bb",
      timestamp: "123",
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh",
      access_token: "access",
    } as never);

    const onSteamGuardRequired = Promise.resolve("123456");

    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation },
      ],
      client_id: 11n,
      request_id: Buffer.from("req"),
      steamid: 22n,
    } as never);
    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );
    expect(emitter.emit).toHaveBeenCalledWith("authentication-2fa-required", {
      guardType: "device_confirmation",
    });

    vi.mocked(emitter.emit).mockClear();
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation },
      ],
      client_id: 12n,
      request_id: Buffer.from("req-2"),
      steamid: 23n,
    } as never);
    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );
    expect(emitter.emit).toHaveBeenCalledWith("authentication-2fa-required", {
      guardType: "email_confirmation",
    });
  });

  it("loginViaCredentials uses email code guard type when device code is absent", async () => {
    const { service } = createService();
    vi.spyOn(service, "GetPasswordRSAPublicKey").mockResolvedValue({
      publickey_mod: "aa",
      publickey_exp: "bb",
      timestamp: "123",
    } as never);
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode },
      ],
      client_id: 11n,
      request_id: Buffer.from("req"),
      steamid: 22n,
    } as never);
    vi.spyOn(service, "UpdateAuthSessionWithSteamGuardCode").mockResolvedValue({} as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh",
      access_token: "access",
    } as never);

    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      Promise.resolve("MAIL-CODE"),
    );

    expect(service.UpdateAuthSessionWithSteamGuardCode).toHaveBeenCalledWith(
      expect.objectContaining({
        code_type: EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode,
      }),
    );
  });

  it("throws lock error when an auth request is already in progress", async () => {
    const { service } = createService();
    (service as unknown as { lock: boolean }).lock = true;

    await expect(service.loginViaQr()).rejects.toBeInstanceOf(SteamClientError);
    await expect(service.loginViaQr()).rejects.toMatchObject({
      message: "There's an ongoing request.",
      subsystem: "session",
    });
  });

  it("PollAuthSessionStatus returns immediately when tokens are present", async () => {
    const { service, steamProtocol } = createService();
    steamProtocol.sendServiceCallWithRes.mockResolvedValueOnce({
      refresh_token: "refresh",
      access_token: "access",
    });

    const result = await service.PollAuthSessionStatus({
      client_id: 1n,
      request_id: Buffer.from("r"),
    } as never);

    expect(result).toEqual({
      refresh_token: "refresh",
      access_token: "access",
    });
  });

  it("PollAuthSessionStatus emits new challenge URL and continues polling", async () => {
    const { service, steamProtocol, emitter } = createService();
    steamProtocol.sendServiceCallWithRes
      .mockResolvedValueOnce({ new_challenge_url: "https://new-challenge" })
      .mockResolvedValueOnce({ refresh_token: "refresh", access_token: "access" });

    const result = await service.PollAuthSessionStatus({
      client_id: 1n,
      request_id: Buffer.from("r"),
    } as never);

    expect(emitter.emit).toHaveBeenCalledWith("authentication-qr", {
      challengeUrl: "https://new-challenge",
    });
    expect(delay).toHaveBeenCalled();
    expect(result).toEqual({ refresh_token: "refresh", access_token: "access" });
  });

  it("PollAuthSessionStatus rethrows non-timeout errors", async () => {
    const { service, steamProtocol } = createService();
    const networkError = new Error("network failure");
    steamProtocol.sendServiceCallWithRes.mockRejectedValue(networkError);

    try {
      await service.PollAuthSessionStatus({
        client_id: 1n,
        request_id: Buffer.from("r"),
      } as never);
      throw new Error("Expected PollAuthSessionStatus to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "services",
        cause: networkError,
      });
    }
  });

  it("preserves SteamProtocolEResultError in cause for service failures", async () => {
    const { service } = createService();
    const eresultCause = new SteamProtocolEResultError({
      protoName: "CAuthentication_BeginAuthSessionViaQR_Response",
      eresultCode: 5,
      eMsg: 7512,
    });

    vi.spyOn(service, "BeginAuthSessionViaQR").mockRejectedValue(eresultCause);

    try {
      await service.loginViaQr();
      throw new Error("Expected loginViaQr to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "services",
        cause: eresultCause,
      });
      expect((err as SteamClientError).cause).toBeInstanceOf(SteamProtocolEResultError);
    }
  });

  it("PollAuthSessionStatus throws timeout when signal aborts inside wait", async () => {
    const { service, steamProtocol } = createService();
    const controller = new AbortController();
    const timeoutSpy = vi.spyOn(AbortSignal, "timeout").mockReturnValue(controller.signal);
    vi.mocked(delay).mockImplementation(async () => {
      controller.abort();
      throw new Error("aborted");
    });
    steamProtocol.sendServiceCallWithRes.mockResolvedValue({});

    await expect(
      service.PollAuthSessionStatus({
        client_id: 1n,
        request_id: Buffer.from("r"),
      } as never),
    ).rejects.toThrow("Polling timed out after 120 seconds.");

    timeoutSpy.mockRestore();
  });

  it("PollAuthSessionStatus throws timeout when signal is already aborted", async () => {
    const { service, steamProtocol } = createService();
    const timeoutSpy = vi.spyOn(AbortSignal, "timeout").mockReturnValue(AbortSignal.abort());

    await expect(
      service.PollAuthSessionStatus({
        client_id: 1n,
        request_id: Buffer.from("r"),
      } as never),
    ).rejects.toThrow("Polling timed out after 120 seconds.");
    expect(steamProtocol.sendServiceCallWithRes).not.toHaveBeenCalled();

    timeoutSpy.mockRestore();
  });

  it("service-call wrappers send expected messages/payloads", async () => {
    const { service, steamProtocol } = createService();
    steamProtocol.sendServiceCallWithRes.mockResolvedValue({});

    await service.GetPasswordRSAPublicKey({ account_name: "alice" } as never);
    await service.BeginAuthSessionViaQR({
      device_details: { device_friendly_name: "my-box" },
    } as never);
    await service.BeginAuthSessionViaCredentials({
      account_name: "alice",
      encrypted_password: "enc",
      encryption_timestamp: "1",
    } as never);
    await service.UpdateAuthSessionWithSteamGuardCode({
      code: "123456",
      code_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode,
      client_id: 1n,
      steamid: 2n,
    } as never);
    await service.GetAuthSessionInfo({ q: 1 } as never);
    await service.RevokeToken({ token: "t" } as never);

    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(1, {
      message: "CAuthentication_GetPasswordRSAPublicKey_Request",
      payload: { account_name: "alice" },
    });
    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(2, {
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {
        device_details: {
          device_friendly_name: "my-box",
          platform_type: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
          os_type: SteamProtoConstants.Win11,
          gaming_device_type: 1,
        },
      },
    });
    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(3, {
      message: "CAuthentication_BeginAuthSessionViaCredentials_Request",
      payload: expect.objectContaining({
        remember_login: true,
        persistence: expect.any(Number),
        website_id: "unknown",
        device_details: {
          platform_type: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
          os_type: SteamProtoConstants.Win11,
          gaming_device_type: 1,
        },
      }),
    });
    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(4, {
      message: "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request",
      payload: expect.objectContaining({ code: "123456" }),
    });
    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(5, {
      message: "CAuthentication_GetAuthSessionInfo_Request",
      payload: { q: 1 },
    });
    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenNthCalledWith(6, {
      message: "CAuthentication_Token_Revoke_Request",
      payload: { token: "t" },
    });
  });
});
