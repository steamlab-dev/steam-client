import { setTimeout } from "node:timers/promises";
import Long from "long";
import GenericError from "@/common/generic-error";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import { ESessionPersistence } from "@/common/steam-language/protos-definitions/steam/enums";
import {
  type CAuthentication_AccessToken_GenerateForApp_Request,
  type CAuthentication_AccessToken_GenerateForApp_Response,
  type CAuthentication_BeginAuthSessionViaCredentials_Request,
  type CAuthentication_BeginAuthSessionViaCredentials_Response,
  type CAuthentication_BeginAuthSessionViaQR_Request,
  type CAuthentication_BeginAuthSessionViaQR_Response,
  type CAuthentication_DeviceDetails,
  type CAuthentication_GetAuthSessionInfo_Request,
  type CAuthentication_GetAuthSessionInfo_Response,
  type CAuthentication_GetAuthSessionRiskInfo_Request,
  type CAuthentication_GetAuthSessionRiskInfo_Response,
  type CAuthentication_GetAuthSessionsForAccount_Request,
  type CAuthentication_GetAuthSessionsForAccount_Response,
  type CAuthentication_GetPasswordRSAPublicKey_Request,
  type CAuthentication_GetPasswordRSAPublicKey_Response,
  type CAuthentication_NotifyRiskQuizResults_Notification,
  type CAuthentication_PollAuthSessionStatus_Request,
  type CAuthentication_PollAuthSessionStatus_Response,
  type CAuthentication_RefreshToken_Enumerate_Request,
  type CAuthentication_RefreshToken_Enumerate_Response,
  type CAuthentication_RefreshToken_Revoke_Request,
  type CAuthentication_RefreshToken_Revoke_Response,
  type CAuthentication_Token_Revoke_Request,
  type CAuthentication_Token_Revoke_Response,
  type CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  type CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response,
  type CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  type CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response,
  EAuthSessionGuardType,
  EAuthTokenPlatformType,
  type AuthenticationService as IAuthenticationService,
} from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import {
  createMachineId,
  createMachineName,
  encryptRsaPassword,
  genImageQR,
  genTerminalQR,
  hasConfirmationType,
  jwtToJson,
} from "@/common/utils";
import SteamProtoConstants from "@/steam-protocol/constants";
import type SteamProtocol from "@/steam-protocol/steam-protocol";

export interface loginViaCredentialsReq {
  account_name: string;
  password: string;
  device_details?: CAuthentication_DeviceDetails;
}

export interface AuthenticationEvents {
  authentication_qr: (body: { imageQr: string; terminalQr: string }) => void;
  authentication_2fa_required: (guardType: EAuthSessionGuardType) => void;
  steam_auth_tokens: (tokens: { refreshToken: string; accessToken: string }) => void;
}

export class AuthenticationError extends GenericError {}

export default class AuthenticationService implements IAuthenticationService {
  private lock = false;

  constructor(
    private readonly steamProtocol: SteamProtocol,
    private readonly emitter: TypedEventEmitter<AuthenticationEvents>,
  ) {}

  async loginViaQr(
    req: CAuthentication_DeviceDetails = {},
  ): Promise<SteamProtos["CMsgClientLogOnResponse"]> {
    this.adquireLock();

    const device_details: CAuthentication_DeviceDetails = {
      device_friendly_name: createMachineName(),
      machine_id: createMachineId(),
      ...req,
    };

    try {
      // 1. Begin authentication via QR
      const beginAuthRes = await this.BeginAuthSessionViaQR({ device_details });

      // 2. Send confirmation QR to user
      const challengeUrl = beginAuthRes.challenge_url;
      if (!challengeUrl) {
        throw new AuthenticationError("Missing challenge URL from BeginAuthSessionViaQR");
      }
      this.emitter.emit("authentication_qr", {
        imageQr: await genImageQR(challengeUrl),
        terminalQr: await genTerminalQR(challengeUrl),
      });

      // 3. Start polling for user response to the QR
      const { client_id, request_id } = beginAuthRes;
      if (!client_id || !request_id) {
        throw new AuthenticationError("Missing client_id or request_id from BeginAuthSessionViaQR");
      }
      const pollingRes = await this.PollAuthSessionStatus({
        client_id,
        request_id,
      });

      // 4. Get steamid from refresh_token and set it to the session
      if (!pollingRes.refresh_token || !pollingRes.access_token) {
        throw new AuthenticationError("Polling response missing refresh/access token");
      }

      this.emitter.emit("steam_auth_tokens", {
        refreshToken: pollingRes.refresh_token,
        accessToken: pollingRes.access_token,
      });

      const token = jwtToJson(pollingRes.refresh_token);
      const steamId = Long.fromString(token.payload.sub, true);
      this.steamProtocol.setSteamId(steamId);

      // 5. attempt login
      return this.logonRequest({
        machine_name: device_details.device_friendly_name,
        machine_id: device_details.machine_id,
        access_token: pollingRes.refresh_token,
      });
    } finally {
      this.releaseLock();
    }
  }

  async loginViaCredentials(
    req: loginViaCredentialsReq,
    onSteamGuardRequired: () => Promise<string>,
  ): Promise<SteamProtos["CMsgClientLogOnResponse"]> {
    this.adquireLock();

    const device_details: CAuthentication_DeviceDetails = {
      device_friendly_name: createMachineName(),
      machine_id: createMachineId(),
      ...(req.device_details ?? {}),
    };

    try {
      // 1. Get RSA mod and key
      const rsAKeyRes = await this.GetPasswordRSAPublicKey({
        account_name: req.account_name,
      });

      // 2. Encrypt password
      const encrypted_password = await encryptRsaPassword(req.password, rsAKeyRes);

      // 3. Begin auth via credentials
      const res = await this.BeginAuthSessionViaCredentials({
        account_name: req.account_name,
        encrypted_password,
        encryption_timestamp: rsAKeyRes.timestamp,
        device_details,
      });

      // 4. Handle login confirmations
      await this.handleLoginConfirmations(
        res.allowed_confirmations ?? [],
        res.client_id,
        res.steamid,
        onSteamGuardRequired,
      );

      // 5. Start polling for user login confirmation
      const pollingRes = await this.PollAuthSessionStatus({
        client_id: res.client_id,
        request_id: res.request_id,
      });

      // 6. Get steamid from refresh_token and set it to the session
      if (!pollingRes.refresh_token || !pollingRes.access_token) {
        throw new AuthenticationError("Polling response missing refresh/access token");
      }

      this.emitter.emit("steam_auth_tokens", {
        refreshToken: pollingRes.refresh_token,
        accessToken: pollingRes.access_token,
      });

      const token = jwtToJson(pollingRes.refresh_token);
      const steamId = Long.fromString(token.payload.sub, true);
      this.steamProtocol.setSteamId(steamId);

      // 7. attempt login
      return this.logonRequest({
        machine_name: device_details.device_friendly_name,
        machine_id: device_details.machine_id,
        access_token: pollingRes.refresh_token,
      });
    } finally {
      this.releaseLock();
    }
  }

  private async handleLoginConfirmations(
    confirmations: SteamProtos["CAuthentication_AllowedConfirmation"][],
    client_id: Long | undefined,
    steamid: Long | undefined,
    onSteamGuardRequired: () => Promise<string>,
  ): Promise<void> {
    const GuardType = EAuthSessionGuardType;

    // Check for unsupported authentication methods
    if (
      hasConfirmationType(confirmations, GuardType.k_EAuthSessionGuardType_LegacyMachineAuth) ||
      hasConfirmationType(confirmations, GuardType.k_EAuthSessionGuardType_MachineToken)
    ) {
      throw new AuthenticationError("Machine token authentication is not supported yet.");
    }

    // Device or email confirmation (no code required, just notification)
    if (hasConfirmationType(confirmations, GuardType.k_EAuthSessionGuardType_DeviceConfirmation)) {
      this.emitter.emit(
        "authentication_2fa_required",
        GuardType.k_EAuthSessionGuardType_DeviceConfirmation,
      );
      return;
    }

    if (hasConfirmationType(confirmations, GuardType.k_EAuthSessionGuardType_EmailConfirmation)) {
      this.emitter.emit(
        "authentication_2fa_required",
        GuardType.k_EAuthSessionGuardType_EmailConfirmation,
      );
      return;
    }

    // Steam Guard code required (device or email)
    const hasDeviceCode = hasConfirmationType(
      confirmations,
      GuardType.k_EAuthSessionGuardType_DeviceCode,
    );
    const hasEmailCode = hasConfirmationType(
      confirmations,
      GuardType.k_EAuthSessionGuardType_EmailCode,
    );

    if (hasDeviceCode || hasEmailCode) {
      const guardType = hasDeviceCode
        ? GuardType.k_EAuthSessionGuardType_DeviceCode
        : GuardType.k_EAuthSessionGuardType_EmailCode;

      // Emit event to notify that Steam Guard code is needed
      this.emitter.emit("authentication_2fa_required", guardType);

      // Call callback to get the code
      const steamGuardCode = await onSteamGuardRequired();
      await this.UpdateAuthSessionWithSteamGuardCode({
        code: steamGuardCode,
        code_type: guardType,
        client_id,
        steamid,
      });
    }
  }

  private logonRequest(
    req: SteamProtos["CMsgClientLogon"],
  ): Promise<SteamProtos["CMsgClientLogOnResponse"]> {
    return this.steamProtocol.sendWithResponse({
      eMsg: EMsg.k_EMsgClientLogon,
      payload: {
        ...req,
        protocol_version: SteamProtoConstants.ProtocolVersion,
        cell_id: 4294967295,
        client_package_version: 1751405894,
        client_language: "english",
        client_os_type: SteamProtoConstants.Win11,
        should_remember_password: true,
        qos_level: 2,
        supports_rate_limit_response: true,
        priority_reason: 11,
      },
    });
  }

  GetPasswordRSAPublicKey(
    _request: CAuthentication_GetPasswordRSAPublicKey_Request,
  ): Promise<CAuthentication_GetPasswordRSAPublicKey_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_GetPasswordRSAPublicKey_Request",
      payload: _request,
    });
  }

  BeginAuthSessionViaQR(
    _request: CAuthentication_BeginAuthSessionViaQR_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaQR_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_BeginAuthSessionViaQR_Request",
      payload: {
        device_details: {
          ...(_request.device_details ?? {}),
          platform_type: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
          os_type: SteamProtoConstants.Win11,
          gaming_device_type: 1,
        },
      },
    });
  }

  BeginAuthSessionViaCredentials(
    _request: CAuthentication_BeginAuthSessionViaCredentials_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaCredentials_Response> {
    const req: CAuthentication_BeginAuthSessionViaCredentials_Request = {
      ..._request,
      remember_login: true,
      persistence: ESessionPersistence.k_ESessionPersistence_Persistent,
      website_id: "unknown",
      device_details: {
        ...(_request.device_details ?? {}),
        platform_type: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
        os_type: SteamProtoConstants.Win11,
        gaming_device_type: 1,
      },
    };

    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_BeginAuthSessionViaCredentials_Request",
      payload: req,
    });
  }

  async PollAuthSessionStatus(
    _request: CAuthentication_PollAuthSessionStatus_Request,
  ): Promise<CAuthentication_PollAuthSessionStatus_Response> {
    const pollInterval = 5_000; // 5 seconds
    const maxDuration = 120_000; // 2 minute

    // This signal will be automatically aborted after `maxDuration`.
    const signal = AbortSignal.timeout(maxDuration);

    while (!signal.aborted) {
      try {
        const response = await this.steamProtocol.sendServiceCallWithRes({
          message: "CAuthentication_PollAuthSessionStatus_Request",
          payload: _request,
        });

        // Check if we have both tokens - authentication is complete
        if (response.refresh_token && response.access_token) {
          return response;
        }

        if (response.new_challenge_url) {
          const url = response.new_challenge_url;
          this.emitter.emit("authentication_qr", {
            imageQr: await genImageQR(url),
            terminalQr: await genTerminalQR(url),
          });
        }

        // Use the promise-based setTimeout, which also respects the AbortSignal.
        // If the main signal is aborted, this delay will immediately throw an error.
        await setTimeout(pollInterval, undefined, { signal });
      } catch (error) {
        // If the error was caused by the signal aborting (e.g., from setTimeout),
        if (signal.aborted) {
          throw new AuthenticationError(`Polling timed out after ${maxDuration / 1000} seconds.`);
        }

        // Otherwise, re-throw the original error (e.g., a network failure).
        throw error;
      }
    }

    // 3. This code is now only reachable if the loop was exited due to the signal aborting.
    // We throw an explicit error to make the timeout failure clear to the caller.
    throw new AuthenticationError(`Polling timed out after ${maxDuration / 1000} seconds.`);
  }

  UpdateAuthSessionWithSteamGuardCode(
    payload: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request",
      payload,
    });
  }

  GetAuthSessionInfo(
    _request: CAuthentication_GetAuthSessionInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionInfo_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_GetAuthSessionInfo_Request",
      payload: _request,
    });
  }

  RevokeToken(
    payload: CAuthentication_Token_Revoke_Request,
  ): Promise<CAuthentication_Token_Revoke_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CAuthentication_Token_Revoke_Request",
      payload,
    });
  }

  GetAuthSessionRiskInfo(
    _request: CAuthentication_GetAuthSessionRiskInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionRiskInfo_Response> {
    throw new Error("Method not implemented.");
  }
  NotifyRiskQuizResults(
    _request: CAuthentication_NotifyRiskQuizResults_Notification,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  UpdateAuthSessionWithMobileConfirmation(
    _request: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response> {
    throw new Error("Method not implemented.");
  }
  GenerateAccessTokenForApp(
    _request: CAuthentication_AccessToken_GenerateForApp_Request,
  ): Promise<CAuthentication_AccessToken_GenerateForApp_Response> {
    throw new Error("Method not implemented.");
  }
  EnumerateTokens(
    _request: CAuthentication_RefreshToken_Enumerate_Request,
  ): Promise<CAuthentication_RefreshToken_Enumerate_Response> {
    throw new Error("Method not implemented.");
  }
  GetAuthSessionsForAccount(
    _request: CAuthentication_GetAuthSessionsForAccount_Request,
  ): Promise<CAuthentication_GetAuthSessionsForAccount_Response> {
    throw new Error("Method not implemented.");
  }
  MigrateMobileSession(
    _request: import("@/common/steam-language/protos-definitions/webui/service_authentication").CAuthentication_MigrateMobileSession_Request,
  ): Promise<
    import("@/common/steam-language/protos-definitions/webui/service_authentication").CAuthentication_MigrateMobileSession_Response
  > {
    throw new Error("Method not implemented.");
  }
  RevokeRefreshToken(
    _request: CAuthentication_RefreshToken_Revoke_Request,
  ): Promise<CAuthentication_RefreshToken_Revoke_Response> {
    throw new Error("Method not implemented.");
  }

  private adquireLock() {
    if (this.lock) {
      throw new AuthenticationError("There's an ongoing request.");
    }

    this.lock = true;
  }

  private releaseLock() {
    this.lock = false;
  }
}
