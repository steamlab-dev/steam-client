/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { UserSystemInformation } from "./steammessages_base";

export const EValveIndexComponent = {
  k_EValveIndexComponentUnknown: 0,
  k_EValveIndexComponentHMD: 1,
  k_EValveIndexComponentLeftKnuckle: 2,
  k_EValveIndexComponentRightKnuckle: 3,
  k_EValveIndexComponentSteamFrameHMD: 4,
  k_EValveIndexComponentSteamFrameLeftController: 5,
  k_EValveIndexComponentSteamFrameRightController: 6,
  k_EValveIndexComponentSteamFrameWirelessAdapter: 7,
} as const;

export type EValveIndexComponent = (typeof EValveIndexComponent)[keyof typeof EValveIndexComponent];

export interface CAccountHardware_RegisterSteamController_Request {
  serial_number?: string;
  controller_code?: string;
}

export type CAccountHardware_RegisterSteamController_Response = Record<string, never>;

export interface CAccountHardware_CompleteSteamControllerRegistration_Request {
  serial_number?: string;
  controller_code?: string;
}

export type CAccountHardware_CompleteSteamControllerRegistration_Response = Record<string, never>;

export interface CAccountHardware_QueryAccountsRegisteredToSerial_Request {
  serial_number?: string;
  controller_code?: string;
}

export interface CAccountHardware_QueryAccountsRegisteredToSerial_Accounts {
  accountid?: number;
  registration_complete?: boolean;
}

export interface CAccountHardware_QueryAccountsRegisteredToSerial_Response {
  accounts?: CAccountHardware_QueryAccountsRegisteredToSerial_Accounts[];
}

export interface CAccountHardware_UpdateControllerUsageReport_Request {
  controllers?: CAccountHardware_UpdateControllerUsageReport_Request.Controller[];
}

export namespace CAccountHardware_UpdateControllerUsageReport_Request {
  export interface Controller {
    serial_number?: string;
    controller_code?: string;
  }
}

export type CAccountHardware_UpdateControllerUsageReport_Response = Record<string, never>;

export interface CAccountHardware_SteamControllerSetConfig_ControllerConfig {
  appidorname?: string;
  publishedfileid?: Long;
  templatename?: string;
}

export interface CAccountHardware_SteamControllerSetConfig_Request {
  serial_number?: string;
  controller_code?: string;
  accountid?: number;
  configurations?: CAccountHardware_SteamControllerSetConfig_ControllerConfig[];
  controller_type?: number;
  only_for_this_serial?: boolean;
}

export type CAccountHardware_SteamControllerSetConfig_Response = Record<string, never>;

export interface CAccountHardware_SteamControllerGetConfig_Request {
  serial_number?: string;
  controller_code?: string;
  accountid?: number;
  appidorname?: string;
  controller_type?: number;
  only_for_this_serial?: boolean;
}

export interface CAccountHardware_SteamControllerGetConfig_ControllerConfig {
  appidorname?: string;
  publishedfileid?: Long;
  templatename?: string;
  serial_number?: string;
  autosave?: boolean;
}

export interface CAccountHardware_SteamControllerGetConfig_Response {
  configurations?: CAccountHardware_SteamControllerGetConfig_ControllerConfig[];
}

export interface CAccountHardware_DeRegisterSteamController_Request {
  serial_number?: string;
  controller_code?: string;
  accountid?: number;
}

export type CAccountHardware_DeRegisterSteamController_Response = Record<string, never>;

export interface CAccountHardware_SetPersonalizationFile_Request {
  serial_number?: string;
  publishedfileid?: Long;
  accountid?: number;
}

export type CAccountHardware_SetPersonalizationFile_Response = Record<string, never>;

export interface CAccountHardware_GetPersonalizationFile_Request {
  serial_number?: string;
  accountid?: number;
}

export interface CAccountHardware_GetPersonalizationFile_Response {
  publishedfileid?: Long;
}

export interface CAccountHardware_VRCompatibilityCheck_Request {
  product_name?: string;
  values?: CAccountHardware_VRCompatibilityCheck_Request.Pair[];
}

export namespace CAccountHardware_VRCompatibilityCheck_Request {
  export interface Pair {
    key?: string;
    value?: string;
  }
}

export interface CAccountHardware_VRCompatibilityCheck_Response {
  values?: CAccountHardware_VRCompatibilityCheck_Response.Pair[];
  components?: CAccountHardware_VRCompatibilityCheck_Response.ComponentDisplay[];
}

export namespace CAccountHardware_VRCompatibilityCheck_Response {
  export interface Pair {
    key?: string;
    value?: string;
  }

  export interface ComponentDisplay {
    name?: string;
    image?: string;
    value?: string;
  }
}

export interface CAccountHardware_RegisterValveIndexComponent_Request {
  serial_number?: string;
  manufacturer_serial_number?: string;
  component_code?: string;
  component_type?: EValveIndexComponent;
  estimated_time_registered?: number;
}

export type CAccountHardware_RegisterValveIndexComponent_Response = Record<string, never>;

export interface CAccountHardware_GetSteamDeckComponents_Request {
  serial_number?: string;
  controller_code?: string;
}

export interface CAccountHardware_GetSteamDeckComponents_Response {
  json_components?: string;
}

export interface CAccountHardware_SaveHardware_Request {
  friendly_name?: string;
  system_info?: UserSystemInformation;
  backfill_user_reviews?: boolean;
}

export interface CAccountHardware_SaveHardware_Response {
  hardware_id?: Long;
}

export interface CAccountHardware_ManageSavedHardware_Request {
  hardware_id?: Long;
  delete_hardware?: boolean;
  friendly_name_update?: string;
}

export type CAccountHardware_ManageSavedHardware_Response = Record<string, never>;

export interface CAccountHardware_GetSavedHardwareList_Request {
  steamid?: Long;
}

export interface CAccountHardware_SavedHardware_Details {
  hardware_id?: Long;
  friendly_name?: string;
  timestamp_created?: number;
  hardware_cluster_id?: Long;
  system_info?: UserSystemInformation;
}

export interface CAccountHardware_GetSavedHardwareList_Response {
  saved_hardware?: CAccountHardware_SavedHardware_Details[];
}

export abstract class AccountHardwareService {
  abstract RegisterSteamController(
    request: CAccountHardware_RegisterSteamController_Request,
  ): Promise<CAccountHardware_RegisterSteamController_Response>;
  abstract CompleteSteamControllerRegistration(
    request: CAccountHardware_CompleteSteamControllerRegistration_Request,
  ): Promise<CAccountHardware_CompleteSteamControllerRegistration_Response>;
  abstract QueryAccountsRegisteredToController(
    request: CAccountHardware_QueryAccountsRegisteredToSerial_Request,
  ): Promise<CAccountHardware_QueryAccountsRegisteredToSerial_Response>;
  abstract UpdateControllerUsageReport(
    request: CAccountHardware_UpdateControllerUsageReport_Request,
  ): Promise<CAccountHardware_UpdateControllerUsageReport_Response>;
  abstract SetDesiredControllerConfigForApp(
    request: CAccountHardware_SteamControllerSetConfig_Request,
  ): Promise<CAccountHardware_SteamControllerSetConfig_Response>;
  abstract GetDesiredControllerConfigForApp(
    request: CAccountHardware_SteamControllerGetConfig_Request,
  ): Promise<CAccountHardware_SteamControllerGetConfig_Response>;
  abstract DeRegisterSteamController(
    request: CAccountHardware_DeRegisterSteamController_Request,
  ): Promise<CAccountHardware_DeRegisterSteamController_Response>;
  abstract SetControllerPersonalizationFile(
    request: CAccountHardware_SetPersonalizationFile_Request,
  ): Promise<CAccountHardware_SetPersonalizationFile_Response>;
  abstract GetControllerPersonalizationFile(
    request: CAccountHardware_GetPersonalizationFile_Request,
  ): Promise<CAccountHardware_GetPersonalizationFile_Response>;
  abstract VRCompatibilityCheck(
    request: CAccountHardware_VRCompatibilityCheck_Request,
  ): Promise<CAccountHardware_VRCompatibilityCheck_Response>;
  abstract RegisterValveIndexComponent(
    request: CAccountHardware_RegisterValveIndexComponent_Request,
  ): Promise<CAccountHardware_RegisterValveIndexComponent_Response>;
  abstract GetSteamDeckComponents(
    request: CAccountHardware_GetSteamDeckComponents_Request,
  ): Promise<CAccountHardware_GetSteamDeckComponents_Response>;
  abstract SaveHardware(
    request: CAccountHardware_SaveHardware_Request,
  ): Promise<CAccountHardware_SaveHardware_Response>;
  abstract ManageSavedHardware(
    request: CAccountHardware_ManageSavedHardware_Request,
  ): Promise<CAccountHardware_ManageSavedHardware_Response>;
  abstract GetSavedHardwareList(
    request: CAccountHardware_GetSavedHardwareList_Request,
  ): Promise<CAccountHardware_GetSavedHardwareList_Response>;
}
