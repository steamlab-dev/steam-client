import type {
  CCredentials_GetAccountAuthSecret_Request,
  CCredentials_GetAccountAuthSecret_Response,
  CCredentials_GetSteamGuardDetails_Request,
  CCredentials_GetSteamGuardDetails_Response,
  CCredentials_LastCredentialChangeTime_Request,
  CCredentials_LastCredentialChangeTime_Response,
  CCredentials_SteamGuardPhishingReport_Request,
  CCredentials_SteamGuardPhishingReport_Response,
  CCredentials_ValidateEmailAddress_Request,
  CCredentials_ValidateEmailAddress_Response,
  CredentialsService,
} from "@/common/steam-language/protos-definitions/steam/steammessages_credentials.steamclient";

export default class Credentials implements CredentialsService {
  GetSteamGuardDetails(
    _request: CCredentials_GetSteamGuardDetails_Request,
  ): Promise<CCredentials_GetSteamGuardDetails_Response> {
    throw new Error("Method not implemented.");
  }
  ValidateEmailAddress(
    _request: CCredentials_ValidateEmailAddress_Request,
  ): Promise<CCredentials_ValidateEmailAddress_Response> {
    throw new Error("Method not implemented.");
  }
  SteamGuardPhishingReport(
    _request: CCredentials_SteamGuardPhishingReport_Request,
  ): Promise<CCredentials_SteamGuardPhishingReport_Response> {
    throw new Error("Method not implemented.");
  }
  GetCredentialChangeTimeDetails(
    _request: CCredentials_LastCredentialChangeTime_Request,
  ): Promise<CCredentials_LastCredentialChangeTime_Response> {
    throw new Error("Method not implemented.");
  }
  GetAccountAuthSecret(
    _request: CCredentials_GetAccountAuthSecret_Request,
  ): Promise<CCredentials_GetAccountAuthSecret_Response> {
    throw new Error("Method not implemented.");
  }
}
