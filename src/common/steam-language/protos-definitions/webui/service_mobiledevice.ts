/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMobileDevice_DeregisterMobileDevice_Notification {
  deviceid?: string;
}

export interface CMobileDevice_HasMobileDevice_Request {
  app_type?: number;
  push_enabled_only?: boolean;
  minimum_version?: string;
  twofactor_device_identifier?: string;
}

export interface CMobileDevice_HasMobileDevice_Response {
  found_device?: boolean;
  up_to_date?: boolean;
  max_version?: string;
}

export interface CMobileDevice_RegisterMobileDevice_Request {
  deviceid?: string;
  language?: string;
  push_enabled?: boolean;
  app_version?: string;
  os_version?: string;
  device_model?: string;
  twofactor_device_identifier?: string;
  mobile_app?: number;
}

export interface CMobileDevice_RegisterMobileDevice_Response {
  unique_deviceid?: number;
}

export abstract class MobileDeviceService {
  abstract DeregisterMobileDevice(
    request: CMobileDevice_DeregisterMobileDevice_Notification,
  ): Promise<void>;
  abstract HasMobileDevice(
    request: CMobileDevice_HasMobileDevice_Request,
  ): Promise<CMobileDevice_HasMobileDevice_Response>;
  abstract RegisterMobileDevice(
    request: CMobileDevice_RegisterMobileDevice_Request,
  ): Promise<CMobileDevice_RegisterMobileDevice_Response>;
}
