/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { UserSystemInformation } from "./common";

export type CUser_GetSavedHardwareInfo_Request = Record<string, never>;

export interface CUser_GetSavedHardwareInfo_Response {
  friendly_name?: string;
  saved_hardware_id?: Long;
  system_info?: UserSystemInformation;
}

export interface CUser_SaveHardwareInfo_Request {
  friendly_name?: string;
}

export interface CUser_SaveHardwareInfo_Response {
  saved_hardware_id?: Long;
}

export abstract class UserService {
  abstract GetSavedHardwareInfo(
    request: CUser_GetSavedHardwareInfo_Request,
  ): Promise<CUser_GetSavedHardwareInfo_Response>;
  abstract SaveHardwareInfo(
    request: CUser_SaveHardwareInfo_Request,
  ): Promise<CUser_SaveHardwareInfo_Response>;
}
