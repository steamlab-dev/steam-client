/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CFileVerification_SignatureCheck_Request {
  steamid?: Long;
  appid?: number;
  file_size?: Long;
  file_timestamp?: number;
  file_timestamp2?: number;
  signature_result?: number;
  filename?: string;
  client_package_version?: number;
  sha1hash?: Buffer;
}

export interface CFileVerification_SignatureCheck_Response {
  deny_operation?: boolean;
}

export interface CFileVerification_SteamServiceCheck_Request {
  service_status?: number;
  client_package_version?: number;
  launcher_type?: number;
  os_type?: number;
  service_repair?: number;
}

export interface CFileVerification_SteamServiceCheck_Response {
  attempt_repair?: boolean;
}

export abstract class FileVerificationService {
  abstract SignatureCheck(
    request: CFileVerification_SignatureCheck_Request,
  ): Promise<CFileVerification_SignatureCheck_Response>;
  abstract SteamServiceCheck(
    request: CFileVerification_SteamServiceCheck_Request,
  ): Promise<CFileVerification_SteamServiceCheck_Response>;
}
