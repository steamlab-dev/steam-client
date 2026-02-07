/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { UserSystemInformation } from "./steammessages_base";

export interface CUser_SaveHardwareInfo_Request {
  friendly_name?: string;
}

export interface CUser_SaveHardwareInfo_Response {
  saved_hardware_id?: Long;
}

export type CUser_GetSavedHardwareInfo_Request = Record<string, never>;

export interface CUser_GetSavedHardwareInfo_Response {
  friendly_name?: string;
  saved_hardware_id?: Long;
  system_info?: UserSystemInformation;
}

export abstract class UserService {
  abstract SaveHardwareInfo(
    request: CUser_SaveHardwareInfo_Request,
  ): Promise<CUser_SaveHardwareInfo_Response>;
  abstract GetSavedHardwareInfo(
    request: CUser_GetSavedHardwareInfo_Request,
  ): Promise<CUser_GetSavedHardwareInfo_Response>;
}
