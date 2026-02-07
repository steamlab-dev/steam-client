/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const EProtoExecutionSite = {
  k_EProtoExecutionSiteUnknown: 0,
  k_EProtoExecutionSiteSteamClient: 2,
} as const;

export type EProtoExecutionSite = (typeof EProtoExecutionSite)[keyof typeof EProtoExecutionSite];

export const EProtoServiceType = {
  k_EProtoServiceTypeSteamMessages: 0,
  k_EProtoServiceTypeVRGamepadUIMessages: 1,
} as const;

export type EProtoServiceType = (typeof EProtoServiceType)[keyof typeof EProtoServiceType];

export type NoResponse = Record<string, never>;
