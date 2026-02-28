import { setTimeout as delay } from "node:timers/promises";
import Long from "long";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import {
  EAuthSessionGuardType,
  EAuthTokenPlatformType,
} from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
import {
  createMachineId,
  createMachineName,
  encryptRsaPassword,
  genImageQR,
  genTerminalQR,
  jwtToJson,
} from "@/common/utils";
import AuthenticationService, { AuthenticationError } from "@/services/authentication";
import SteamProtoConstants from "@/steam-protocol/constants";

vi.mock("node:timers/promises", () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}));

vi.mock("@/common/utils", () => ({
  createMachineId: vi.fn(() => Buffer.from([0x01, 0x02, 0x03])),
  createMachineName: vi.fn(() => "DESKTOP-ABCDE"),
  encryptRsaPassword: vi.fn(() => Promise.resolve("enc-pass")),
  genImageQR: vi.fn((url: string) => Promise.resolve(`img:${url}`)),
  genTerminalQR: vi.fn((url: string) => Promise.resolve(`term:${url}`)),
  hasConfirmationType: vi.fn(
    (
      confirmations: Array<{ confirmation_type?: number }> | undefined,
      confirmationType: number,
    ) => {
      return (confirmations ?? []).some((item) => item.confirmation_type === confirmationType);
    },
  ),
  jwtToJson: vi.fn(() => ({ payload: { sub: "76561197960265729" } })),
}));

describe("AuthenticationService", () => {
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

  it("loginViaQr succeeds and emits QR + token events", async () => {
    const { service, steamProtocol, emitter } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: Long.fromString("100", true),
      request_id: Buffer.from("req-1"),
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-token",
      access_token: "access-token",
    } as never);

    const response = await service.loginViaQr();

    expect(createMachineName).toHaveBeenCalled();
    expect(createMachineId).toHaveBeenCalled();
    expect(genImageQR).toHaveBeenCalledWith("https://challenge");
    expect(genTerminalQR).toHaveBeenCalledWith("https://challenge");
    expect(emitter.emit).toHaveBeenCalledWith("authentication-qr", {
      imageQr: "img:https://challenge",
      terminalQr: "term:https://challenge",
    });
    expect(emitter.emit).toHaveBeenCalledWith("steam-auth-tokens", {
      refreshToken: "refresh-token",
      accessToken: "access-token",
    });
    expect(jwtToJson).toHaveBeenCalledWith("refresh-token");
    expect(steamProtocol.setSteamId).toHaveBeenCalledWith(
      Long.fromString("76561197960265729", true),
    );
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
      client_id: Long.fromString("10", true),
      request_id: Buffer.from("r"),
    } as never);

    await expect(service.loginViaQr()).rejects.toThrow(
      "Missing challenge URL from BeginAuthSessionViaQR",
    );
  });

  it("loginViaQr throws when client_id is missing", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      request_id: Buffer.from("r"),
    } as never);

    await expect(service.loginViaQr()).rejects.toThrow(
      "Missing client_id or request_id from BeginAuthSessionViaQR",
    );
  });

  it("loginViaQr throws when request_id is missing", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: Long.fromString("1", true),
    } as never);

    await expect(service.loginViaQr()).rejects.toThrow(
      "Missing client_id or request_id from BeginAuthSessionViaQR",
    );
  });

  it("loginViaQr throws when poll response has no access token", async () => {
    const { service } = createService();
    vi.spyOn(service, "BeginAuthSessionViaQR").mockResolvedValue({
      challenge_url: "https://challenge",
      client_id: Long.fromString("1", true),
      request_id: Buffer.from("req"),
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-only",
    } as never);

    await expect(service.loginViaQr()).rejects.toThrow(
      "Polling response missing refresh/access token",
    );
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
      client_id: Long.fromString("55", true),
      steamid: Long.fromString("66", true),
      request_id: Buffer.from("req"),
    } as never);
    vi.spyOn(service, "UpdateAuthSessionWithSteamGuardCode").mockResolvedValue({} as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh-token",
      access_token: "access-token",
    } as never);
    const onSteamGuardRequired = vi.fn().mockResolvedValue("123456");

    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );

    expect(encryptRsaPassword).toHaveBeenCalledWith("password", expect.any(Object));
    expect(emitter.emit).toHaveBeenCalledWith(
      "authentication-2fa-required",
      EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode,
    );
    expect(onSteamGuardRequired).toHaveBeenCalledTimes(1);
    expect(service.UpdateAuthSessionWithSteamGuardCode).toHaveBeenCalledWith({
      code: "123456",
      code_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode,
      client_id: Long.fromString("55", true),
      steamid: Long.fromString("66", true),
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
      client_id: Long.fromString("11", true),
      request_id: Buffer.from("req"),
      steamid: Long.fromString("22", true),
    } as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      access_token: "access-only",
    } as never);

    await expect(
      service.loginViaCredentials(
        { account_name: "alice", password: "password" },
        vi.fn().mockResolvedValue("123456"),
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
      client_id: Long.fromString("11", true),
      request_id: Buffer.from("req"),
      steamid: Long.fromString("22", true),
    } as never);

    await expect(
      service.loginViaCredentials(
        { account_name: "alice", password: "password" },
        vi.fn().mockResolvedValue("123456"),
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

    const onSteamGuardRequired = vi.fn().mockResolvedValue("123456");

    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation },
      ],
      client_id: Long.fromString("11", true),
      request_id: Buffer.from("req"),
      steamid: Long.fromString("22", true),
    } as never);
    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );
    expect(emitter.emit).toHaveBeenCalledWith(
      "authentication-2fa-required",
      EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation,
    );
    expect(onSteamGuardRequired).not.toHaveBeenCalled();

    vi.mocked(emitter.emit).mockClear();
    vi.spyOn(service, "BeginAuthSessionViaCredentials").mockResolvedValue({
      allowed_confirmations: [
        { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation },
      ],
      client_id: Long.fromString("12", true),
      request_id: Buffer.from("req-2"),
      steamid: Long.fromString("23", true),
    } as never);
    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      onSteamGuardRequired,
    );
    expect(emitter.emit).toHaveBeenCalledWith(
      "authentication-2fa-required",
      EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation,
    );
    expect(onSteamGuardRequired).not.toHaveBeenCalled();
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
      client_id: Long.fromString("11", true),
      request_id: Buffer.from("req"),
      steamid: Long.fromString("22", true),
    } as never);
    vi.spyOn(service, "UpdateAuthSessionWithSteamGuardCode").mockResolvedValue({} as never);
    vi.spyOn(service, "PollAuthSessionStatus").mockResolvedValue({
      refresh_token: "refresh",
      access_token: "access",
    } as never);

    await service.loginViaCredentials(
      { account_name: "alice", password: "password" },
      vi.fn().mockResolvedValue("MAIL-CODE"),
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

    await expect(service.loginViaQr()).rejects.toBeInstanceOf(AuthenticationError);
    await expect(service.loginViaQr()).rejects.toThrow("There's an ongoing request.");
  });

  it("PollAuthSessionStatus returns immediately when tokens are present", async () => {
    const { service, steamProtocol } = createService();
    steamProtocol.sendServiceCallWithRes.mockResolvedValueOnce({
      refresh_token: "refresh",
      access_token: "access",
    });

    const result = await service.PollAuthSessionStatus({
      client_id: Long.fromString("1", true),
      request_id: Buffer.from("r"),
    } as never);

    expect(result).toEqual({
      refresh_token: "refresh",
      access_token: "access",
    });
  });

  it("PollAuthSessionStatus emits new challenge QR and continues polling", async () => {
    const { service, steamProtocol, emitter } = createService();
    steamProtocol.sendServiceCallWithRes
      .mockResolvedValueOnce({ new_challenge_url: "https://new-challenge" })
      .mockResolvedValueOnce({ refresh_token: "refresh", access_token: "access" });

    const result = await service.PollAuthSessionStatus({
      client_id: Long.fromString("1", true),
      request_id: Buffer.from("r"),
    } as never);

    expect(genImageQR).toHaveBeenCalledWith("https://new-challenge");
    expect(genTerminalQR).toHaveBeenCalledWith("https://new-challenge");
    expect(emitter.emit).toHaveBeenCalledWith("authentication-qr", {
      imageQr: "img:https://new-challenge",
      terminalQr: "term:https://new-challenge",
    });
    expect(delay).toHaveBeenCalled();
    expect(result).toEqual({ refresh_token: "refresh", access_token: "access" });
  });

  it("PollAuthSessionStatus rethrows non-timeout errors", async () => {
    const { service, steamProtocol } = createService();
    const networkError = new Error("network failure");
    steamProtocol.sendServiceCallWithRes.mockRejectedValue(networkError);

    await expect(
      service.PollAuthSessionStatus({
        client_id: Long.fromString("1", true),
        request_id: Buffer.from("r"),
      } as never),
    ).rejects.toBe(networkError);
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
        client_id: Long.fromString("1", true),
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
        client_id: Long.fromString("1", true),
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
      client_id: Long.fromString("1", true),
      steamid: Long.fromString("2", true),
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
