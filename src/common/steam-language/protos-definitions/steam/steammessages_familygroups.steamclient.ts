/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { EProtoAppType } from "./enums";

export const EFamilyGroupRole = {
  k_EFamilyGroupRole_None: 0,
  k_EFamilyGroupRole_Adult: 1,
  k_EFamilyGroupRole_Child: 2,
  k_EFamilyGroupRole_MAX: 3,
} as const;

export type EFamilyGroupRole = (typeof EFamilyGroupRole)[keyof typeof EFamilyGroupRole];

export const EFamilyGroupsTwoFactorMethod = {
  k_EFamilyGroupsTwoFactorMethodNone: 0,
  k_EFamilyGroupsTwoFactorMethodMobile: 1,
  k_EFamilyGroupsTwoFactorMethodEmail: 2,
} as const;

export type EFamilyGroupsTwoFactorMethod =
  (typeof EFamilyGroupsTwoFactorMethod)[keyof typeof EFamilyGroupsTwoFactorMethod];

export const EPurchaseRequestAction = {
  k_EPurchaseRequestAction_None: 0,
  k_EPurchaseRequestAction_Decline: 1,
  k_EPurchaseRequestAction_Purchased: 2,
  k_EPurchaseRequestAction_Abandoned: 3,
  k_EPurchaseRequestAction_Cancel: 4,
  k_EPurchaseRequestAction_MAX: 5,
} as const;

export type EPurchaseRequestAction =
  (typeof EPurchaseRequestAction)[keyof typeof EPurchaseRequestAction];

export const EFamilyGroupChangeLogType = {
  k_InvalidChangeType: 0,
  k_FamilyGroupCreated: 1,
  k_FamilyGroupModified: 2,
  k_FamilyGroupDeleted: 3,
  k_AccountInvited: 4,
  k_InviteDeniedByGroupSize: 5,
  k_JoinedFamilyGroup: 6,
  k_JoinDeniedByRegionMismatch: 7,
  k_JoinDeniedByMissingIpAddress: 8,
  k_JoinDeniedByFamilyCooldown: 9,
  k_JoinDeniedByUserCooldown: 10,
  k_JoinDeniedByOtherGroup: 11,
  k_AccountRemoved: 12,
  k_InviteCanceled: 13,
  k_PurchaseRequested: 14,
  k_ParentalSettingsEnabled: 15,
  k_ParentalSettingsDisabled: 16,
  k_ParentalSettingsChanged: 17,
  k_FamilyCooldownOverridesChanged: 18,
  k_PurchaseRequestCanceled: 19,
  k_PurchaseRequestApproved: 20,
  k_PurchaseRequestDeclined: 21,
  k_CooldownSkipConsumed: 22,
  k_FamilyGroupRestored: 23,
  k_JoinDenied: 24,
  k_SupportForceAcceptedInvite: 25,
} as const;

export type EFamilyGroupChangeLogType =
  (typeof EFamilyGroupChangeLogType)[keyof typeof EFamilyGroupChangeLogType];

export const ESharedLibraryExcludeReason = {
  k_ESharedLibrary_Included: 0,
  k_ESharedLibrary_AppExcluded_ByPartner: 1,
  k_ESharedLibrary_LicenseExcluded: 2,
  k_ESharedLibrary_FreeGame: 3,
  k_ESharedLibrary_LicensePrivate: 4,
  k_ESharedLibrary_AppExcluded_WrongAppType: 6,
  k_ESharedLibrary_AppExcluded_NonrefundableDLC: 7,
  k_ESharedLibrary_AppExcluded_UnreleasedApp: 8,
  k_ESharedLibrary_AppExcluded_ParentAppExcluded: 9,
  k_ESharedLibrary_PackageExcluded_ByPartner: 10,
  k_ESharedLibrary_PackageExcluded_Special: 11,
  k_ESharedLibrary_PackageExcluded_Dev: 12,
  k_ESharedLibrary_PackageExcluded_FreeWeekend: 13,
  k_ESharedLibrary_PackageExcluded_Invalid: 15,
  k_ESharedLibrary_PackageExcluded_RecurringLicense: 16,
  k_ESharedLibrary_PackageExcluded_WrongLicenseType: 17,
  k_ESharedLibrary_PackageExcluded_MasterSub: 18,
  k_ESharedLibrary_PackageExcluded_NoShareableApps: 19,
  k_ESharedLibrary_LicenseExcluded_PaymentMasterSub: 20,
  k_ESharedLibrary_LicenseExcluded_PaymentFamilyGroup: 21,
  k_ESharedLibrary_LicenseExcluded_PaymentAuthorizedDevice: 22,
  k_ESharedLibrary_LicenseExcluded_PaymentAutoGrant: 23,
  k_ESharedLibrary_LicenseExcluded_FlagPending: 24,
  k_ESharedLibrary_LicenseExcluded_FlagPendingRefund: 25,
  k_ESharedLibrary_LicenseExcluded_FlagBorrowed: 26,
  k_ESharedLibrary_LicenseExcluded_FlagAutoGrant: 27,
  k_ESharedLibrary_LicenseExcluded_FlagTimedTrial: 28,
  k_ESharedLibrary_LicenseExcluded_FreeSub: 29,
  k_ESharedLibrary_LicenseExcluded_Inactive: 30,
} as const;

export type ESharedLibraryExcludeReason =
  (typeof ESharedLibraryExcludeReason)[keyof typeof ESharedLibraryExcludeReason];

export interface CFamilyGroups_CreateFamilyGroup_Request {
  name?: string;
  steamid?: bigint;
}

export interface CFamilyGroups_CreateFamilyGroup_Response {
  family_groupid?: bigint;
  cooldown_skip_granted?: boolean;
}

export interface CFamilyGroups_GetFamilyGroup_Request {
  family_groupid?: bigint;
  send_running_apps?: boolean;
}

export interface FamilyGroupMember {
  steamid?: bigint;
  role?: EFamilyGroupRole;
  time_joined?: number;
  cooldown_seconds_remaining?: number;
}

export interface FamilyGroupPendingInvite {
  steamid?: bigint;
  role?: EFamilyGroupRole;
}

export interface FamilyGroupFormerMember {
  steamid?: bigint;
}

export interface CFamilyGroups_GetFamilyGroup_Response {
  name?: string;
  members?: FamilyGroupMember[];
  pending_invites?: FamilyGroupPendingInvite[];
  free_spots?: number;
  country?: string;
  slot_cooldown_remaining_seconds?: number;
  former_members?: FamilyGroupFormerMember[];
  slot_cooldown_overrides?: number;
}

export interface CFamilyGroups_GetFamilyGroupForUser_Request {
  steamid?: bigint;
  include_family_group_response?: boolean;
}

export interface FamilyGroupPendingInviteForUser {
  family_groupid?: bigint;
  role?: EFamilyGroupRole;
  inviter_steamid?: bigint;
  awaiting_2fa?: boolean;
  invite_id?: bigint;
}

export interface FamilyGroupMembership {
  family_groupid?: bigint;
  rtime_joined?: number;
  rtime_left?: number;
  role?: number;
  participated?: boolean;
}

export interface CFamilyGroups_GetFamilyGroupForUser_Response {
  family_groupid?: bigint;
  is_not_member_of_any_group?: boolean;
  latest_time_joined?: number;
  latest_joined_family_groupid?: bigint;
  pending_group_invites?: FamilyGroupPendingInviteForUser[];
  role?: number;
  cooldown_seconds_remaining?: number;
  family_group?: CFamilyGroups_GetFamilyGroup_Response;
  can_undelete_last_joined_family?: boolean;
  membership_history?: FamilyGroupMembership[];
}

export interface CFamilyGroups_ModifyFamilyGroupDetails_Request {
  family_groupid?: bigint;
  name?: string;
}

export type CFamilyGroups_ModifyFamilyGroupDetails_Response = Record<string, never>;

export interface CFamilyGroups_InviteToFamilyGroup_Request {
  family_groupid?: bigint;
  receiver_steamid?: bigint;
  receiver_role?: EFamilyGroupRole;
}

export interface CFamilyGroups_InviteToFamilyGroup_Response {
  invite_id?: bigint;
  two_factor_method?: EFamilyGroupsTwoFactorMethod;
}

export interface CFamilyGroups_ConfirmInviteToFamilyGroup_Request {
  family_groupid?: bigint;
  invite_id?: bigint;
  nonce?: bigint;
}

export type CFamilyGroups_ConfirmInviteToFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_ResendInvitationToFamilyGroup_Request {
  family_groupid?: bigint;
  steamid?: bigint;
}

export type CFamilyGroups_ResendInvitationToFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_JoinFamilyGroup_Request {
  family_groupid?: bigint;
  nonce?: bigint;
}

export interface CFamilyGroups_JoinFamilyGroup_Response {
  two_factor_method?: EFamilyGroupsTwoFactorMethod;
  cooldown_skip_granted?: boolean;
  invite_already_accepted?: boolean;
  cooldown_seconds_remaining?: number;
}

export interface CFamilyGroups_ConfirmJoinFamilyGroup_Request {
  family_groupid?: bigint;
  invite_id?: bigint;
  nonce?: bigint;
}

export type CFamilyGroups_ConfirmJoinFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_RemoveFromFamilyGroup_Request {
  family_groupid?: bigint;
  steamid_to_remove?: bigint;
}

export type CFamilyGroups_RemoveFromFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_CancelFamilyGroupInvite_Request {
  family_groupid?: bigint;
  steamid_to_cancel?: bigint;
}

export type CFamilyGroups_CancelFamilyGroupInvite_Response = Record<string, never>;

export interface CFamilyGroups_GetUsersSharingDevice_Request {
  family_groupid?: bigint;
  client_instance_id?: bigint;
}

export interface CFamilyGroups_GetUsersSharingDevice_Response {
  users?: bigint[];
}

export interface CFamilyGroups_DeleteFamilyGroup_Request {
  family_groupid?: bigint;
}

export type CFamilyGroups_DeleteFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_UndeleteFamilyGroup_Request {
  family_groupid?: bigint;
}

export type CFamilyGroups_UndeleteFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_GetPlaytimeSummary_Request {
  family_groupid?: bigint;
}

export interface CFamilyGroups_PlaytimeEntry {
  steamid?: bigint;
  appid?: number;
  first_played?: number;
  latest_played?: number;
  seconds_played?: number;
}

export interface CFamilyGroups_GetPlaytimeSummary_Response {
  entries?: CFamilyGroups_PlaytimeEntry[];
  entries_by_owner?: CFamilyGroups_PlaytimeEntry[];
}

export interface CFamilyGroups_RequestPurchase_Request {
  family_groupid?: bigint;
  gidshoppingcart?: bigint;
  store_country_code?: string;
  use_account_cart?: boolean;
}

export interface CFamilyGroups_RequestPurchase_Response {
  gidshoppingcart?: bigint;
  request_id?: bigint;
}

export interface CFamilyGroups_GetPurchaseRequests_Request {
  family_groupid?: bigint;
  request_ids?: bigint[];
  rt_include_completed_since?: number;
}

export interface PurchaseRequest {
  requester_steamid?: bigint;
  gidshoppingcart?: bigint;
  time_requested?: number;
  time_responded?: number;
  responder_steamid?: bigint;
  response_action?: EPurchaseRequestAction;
  is_completed?: boolean;
  request_id?: bigint;
  requested_packageids?: number[];
  purchased_packageids?: number[];
  requested_bundleids?: number[];
  purchased_bundleids?: number[];
}

export interface CFamilyGroups_GetPurchaseRequests_Response {
  requests?: PurchaseRequest[];
}

export interface CFamilyGroups_RespondToRequestedPurchase_Request {
  family_groupid?: bigint;
  action?: EPurchaseRequestAction;
  request_id?: bigint;
}

export type CFamilyGroups_RespondToRequestedPurchase_Response = Record<string, never>;

export interface CFamilyGroups_GetChangeLog_Request {
  family_groupid?: bigint;
}

export interface CFamilyGroups_GetChangeLog_Response {
  changes?: CFamilyGroups_GetChangeLog_Response.Change[];
}

export namespace CFamilyGroups_GetChangeLog_Response {
  export interface Change {
    timestamp?: bigint;
    actor_steamid?: bigint;
    type?: EFamilyGroupChangeLogType;
    body?: string;
    by_support?: boolean;
  }
}

export interface CFamilyGroups_SetFamilyCooldownOverrides_Request {
  family_groupid?: bigint;
  cooldown_count?: number;
}

export type CFamilyGroups_SetFamilyCooldownOverrides_Response = Record<string, never>;

export interface CFamilyGroups_GetSharedLibraryApps_Request {
  family_groupid?: bigint;
  include_own?: boolean;
  include_excluded?: boolean;
  language?: string;
  max_apps?: number;
  include_non_games?: boolean;
  steamid?: bigint;
}

export interface CFamilyGroups_GetSharedLibraryApps_Response {
  apps?: CFamilyGroups_GetSharedLibraryApps_Response.SharedApp[];
  owner_steamid?: bigint;
}

export namespace CFamilyGroups_GetSharedLibraryApps_Response {
  export interface SharedApp {
    appid?: number;
    owner_steamids?: bigint[];
    name?: string;
    sort_as?: string;
    capsule_filename?: string;
    img_icon_hash?: string;
    exclude_reason?: ESharedLibraryExcludeReason;
    rt_time_acquired?: number;
    rt_last_played?: number;
    rt_playtime?: number;
    app_type?: EProtoAppType;
    content_descriptors?: number[];
  }
}

export interface CFamilyGroups_SetPreferredLender_Request {
  family_groupid?: bigint;
  appid?: number;
  lender_steamid?: bigint;
}

export type CFamilyGroups_SetPreferredLender_Response = Record<string, never>;

export interface CFamilyGroups_GetPreferredLenders_Request {
  family_groupid?: bigint;
}

export interface CFamilyGroups_GetPreferredLenders_Response {
  members?: CFamilyGroups_GetPreferredLenders_Response.FamilyMember[];
}

export namespace CFamilyGroups_GetPreferredLenders_Response {
  export interface FamilyMember {
    steamid?: bigint;
    preferred_appids?: number[];
  }
}

export interface CFamilyGroups_ForceAcceptInvite_Request {
  family_groupid?: bigint;
  steamid?: bigint;
}

export type CFamilyGroups_ForceAcceptInvite_Response = Record<string, never>;

export interface CFamilyGroups_GetInviteCheckResults_Request {
  family_groupid?: bigint;
  steamid?: bigint;
}

export interface CFamilyGroups_GetInviteCheckResults_Response {
  wallet_country_matches?: boolean;
  ip_match?: boolean;
  join_restriction?: number;
}

export interface CFamilyGroups_ClearCooldownSkip_Request {
  steamid?: bigint;
  invite_id?: bigint;
}

export type CFamilyGroups_ClearCooldownSkip_Response = Record<string, never>;

export interface CFamilyGroups_RollbackFamilyGroup_Request {
  family_groupid?: bigint;
  rtime32_target?: number;
}

export type CFamilyGroups_RollbackFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroupsClient_NotifyRunningApps_Notification {
  family_groupid?: bigint;
  running_apps?: CFamilyGroupsClient_NotifyRunningApps_Notification.RunningApp[];
}

export namespace CFamilyGroupsClient_NotifyRunningApps_Notification {
  export interface PlayingMember {
    member_steamid?: bigint;
    owner_steamid?: bigint;
  }

  export interface RunningApp {
    appid?: number;
    playing_members?: CFamilyGroupsClient_NotifyRunningApps_Notification.PlayingMember[];
  }
}

export type CFamilyGroupsClient_InviteStatus_Notification = Record<string, never>;

export interface CFamilyGroupsClient_GroupChanged_Notification {
  family_groupid?: bigint;
}

export abstract class FamilyGroupsService {
  abstract CreateFamilyGroup(
    request: CFamilyGroups_CreateFamilyGroup_Request,
  ): Promise<CFamilyGroups_CreateFamilyGroup_Response>;
  abstract GetFamilyGroup(
    request: CFamilyGroups_GetFamilyGroup_Request,
  ): Promise<CFamilyGroups_GetFamilyGroup_Response>;
  abstract GetFamilyGroupForUser(
    request: CFamilyGroups_GetFamilyGroupForUser_Request,
  ): Promise<CFamilyGroups_GetFamilyGroupForUser_Response>;
  abstract ModifyFamilyGroupDetails(
    request: CFamilyGroups_ModifyFamilyGroupDetails_Request,
  ): Promise<CFamilyGroups_ModifyFamilyGroupDetails_Response>;
  abstract InviteToFamilyGroup(
    request: CFamilyGroups_InviteToFamilyGroup_Request,
  ): Promise<CFamilyGroups_InviteToFamilyGroup_Response>;
  abstract ConfirmInviteToFamilyGroup(
    request: CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
  ): Promise<CFamilyGroups_ConfirmInviteToFamilyGroup_Response>;
  abstract ResendInvitationToFamilyGroup(
    request: CFamilyGroups_ResendInvitationToFamilyGroup_Request,
  ): Promise<CFamilyGroups_ResendInvitationToFamilyGroup_Response>;
  abstract JoinFamilyGroup(
    request: CFamilyGroups_JoinFamilyGroup_Request,
  ): Promise<CFamilyGroups_JoinFamilyGroup_Response>;
  abstract ConfirmJoinFamilyGroup(
    request: CFamilyGroups_ConfirmJoinFamilyGroup_Request,
  ): Promise<CFamilyGroups_ConfirmJoinFamilyGroup_Response>;
  abstract RemoveFromFamilyGroup(
    request: CFamilyGroups_RemoveFromFamilyGroup_Request,
  ): Promise<CFamilyGroups_RemoveFromFamilyGroup_Response>;
  abstract CancelFamilyGroupInvite(
    request: CFamilyGroups_CancelFamilyGroupInvite_Request,
  ): Promise<CFamilyGroups_CancelFamilyGroupInvite_Response>;
  abstract GetUsersSharingDevice(
    request: CFamilyGroups_GetUsersSharingDevice_Request,
  ): Promise<CFamilyGroups_GetUsersSharingDevice_Response>;
  abstract DeleteFamilyGroup(
    request: CFamilyGroups_DeleteFamilyGroup_Request,
  ): Promise<CFamilyGroups_DeleteFamilyGroup_Response>;
  abstract UndeleteFamilyGroup(
    request: CFamilyGroups_UndeleteFamilyGroup_Request,
  ): Promise<CFamilyGroups_UndeleteFamilyGroup_Response>;
  abstract GetPlaytimeSummary(
    request: CFamilyGroups_GetPlaytimeSummary_Request,
  ): Promise<CFamilyGroups_GetPlaytimeSummary_Response>;
  abstract RequestPurchase(
    request: CFamilyGroups_RequestPurchase_Request,
  ): Promise<CFamilyGroups_RequestPurchase_Response>;
  abstract GetPurchaseRequests(
    request: CFamilyGroups_GetPurchaseRequests_Request,
  ): Promise<CFamilyGroups_GetPurchaseRequests_Response>;
  abstract RespondToRequestedPurchase(
    request: CFamilyGroups_RespondToRequestedPurchase_Request,
  ): Promise<CFamilyGroups_RespondToRequestedPurchase_Response>;
  abstract GetChangeLog(
    request: CFamilyGroups_GetChangeLog_Request,
  ): Promise<CFamilyGroups_GetChangeLog_Response>;
  abstract SetFamilyCooldownOverrides(
    request: CFamilyGroups_SetFamilyCooldownOverrides_Request,
  ): Promise<CFamilyGroups_SetFamilyCooldownOverrides_Response>;
  abstract GetSharedLibraryApps(
    request: CFamilyGroups_GetSharedLibraryApps_Request,
  ): Promise<CFamilyGroups_GetSharedLibraryApps_Response>;
  abstract SetPreferredLender(
    request: CFamilyGroups_SetPreferredLender_Request,
  ): Promise<CFamilyGroups_SetPreferredLender_Response>;
  abstract GetPreferredLenders(
    request: CFamilyGroups_GetPreferredLenders_Request,
  ): Promise<CFamilyGroups_GetPreferredLenders_Response>;
  abstract ForceAcceptInvite(
    request: CFamilyGroups_ForceAcceptInvite_Request,
  ): Promise<CFamilyGroups_ForceAcceptInvite_Response>;
  abstract GetInviteCheckResults(
    request: CFamilyGroups_GetInviteCheckResults_Request,
  ): Promise<CFamilyGroups_GetInviteCheckResults_Response>;
  abstract ClearCooldownSkip(
    request: CFamilyGroups_ClearCooldownSkip_Request,
  ): Promise<CFamilyGroups_ClearCooldownSkip_Response>;
  abstract RollbackFamilyGroup(
    request: CFamilyGroups_RollbackFamilyGroup_Request,
  ): Promise<CFamilyGroups_RollbackFamilyGroup_Response>;
}

export abstract class FamilyGroupsClientService {
  abstract NotifyRunningApps(
    request: CFamilyGroupsClient_NotifyRunningApps_Notification,
  ): Promise<void>;
  abstract NotifyInviteStatus(
    request: CFamilyGroupsClient_InviteStatus_Notification,
  ): Promise<void>;
  abstract NotifyGroupChanged(
    request: CFamilyGroupsClient_GroupChanged_Notification,
  ): Promise<void>;
}
