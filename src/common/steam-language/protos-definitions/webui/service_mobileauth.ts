/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMobileAuth_MigrateMobileSession_Request {
  steamid?: bigint;
  token?: string;
  signature?: Buffer;
  device_details?: CMobileAuth_MigrateMobileSession_Request_DeviceDetails;
}

export interface CMobileAuth_MigrateMobileSession_Request_DeviceDetails {
  device_friendly_name?: string;
  platform_type?: number;
  os_type?: number;
  gaming_device_type?: number;
}

export interface CMobileAuth_MigrateMobileSession_Response {
  refresh_token?: string;
  access_token?: string;
}

export abstract class MobileAuthService {
  abstract MigrateMobileSession(
    request: CMobileAuth_MigrateMobileSession_Request,
  ): Promise<CMobileAuth_MigrateMobileSession_Response>;
}
