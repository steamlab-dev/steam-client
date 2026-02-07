/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CFamilyGroups_CancelFamilyGroupInvite_Request {
  family_groupid?: Long;
  steamid_to_cancel?: Long;
}

export type CFamilyGroups_CancelFamilyGroupInvite_Response = Record<string, never>;

export interface CFamilyGroups_ClearCooldownSkip_Request {
  steamid?: Long;
  invite_id?: Long;
}

export type CFamilyGroups_ClearCooldownSkip_Response = Record<string, never>;

export interface CFamilyGroups_ConfirmInviteToFamilyGroup_Request {
  family_groupid?: Long;
  invite_id?: Long;
  nonce?: Long;
}

export type CFamilyGroups_ConfirmInviteToFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_ConfirmJoinFamilyGroup_Request {
  family_groupid?: Long;
  invite_id?: Long;
  nonce?: Long;
}

export type CFamilyGroups_ConfirmJoinFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_CreateFamilyGroup_Request {
  name?: string;
  steamid?: Long;
}

export interface CFamilyGroups_CreateFamilyGroup_Response {
  family_groupid?: Long;
  cooldown_skip_granted?: boolean;
}

export interface CFamilyGroups_DeleteFamilyGroup_Request {
  family_groupid?: Long;
}

export type CFamilyGroups_DeleteFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_ForceAcceptInvite_Request {
  family_groupid?: Long;
  steamid?: Long;
}

export type CFamilyGroups_ForceAcceptInvite_Response = Record<string, never>;

export interface CFamilyGroups_GetChangeLog_Request {
  family_groupid?: Long;
}

export interface CFamilyGroups_GetChangeLog_Response {
  changes?: CFamilyGroups_GetChangeLog_Response_Change[];
}

export interface CFamilyGroups_GetChangeLog_Response_Change {
  timestamp?: Long;
  actor_steamid?: Long;
  type?: number;
  body?: string;
  by_support?: boolean;
}

export interface CFamilyGroups_GetFamilyGroup_Request {
  family_groupid?: Long;
  send_running_apps?: boolean;
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
  steamid?: Long;
  include_family_group_response?: boolean;
}

export interface CFamilyGroups_GetFamilyGroupForUser_Response {
  family_groupid?: Long;
  is_not_member_of_any_group?: boolean;
  latest_time_joined?: number;
  latest_joined_family_groupid?: Long;
  pending_group_invites?: FamilyGroupPendingInviteForUser[];
  role?: number;
  cooldown_seconds_remaining?: number;
  family_group?: CFamilyGroups_GetFamilyGroup_Response;
  can_undelete_last_joined_family?: boolean;
  membership_history?: FamilyGroupMembership[];
}

export interface CFamilyGroups_GetInviteCheckResults_Request {
  family_groupid?: Long;
  steamid?: Long;
}

export interface CFamilyGroups_GetInviteCheckResults_Response {
  wallet_country_matches?: boolean;
  ip_match?: boolean;
  join_restriction?: number;
}

export interface CFamilyGroups_GetPlaytimeSummary_Request {
  family_groupid?: Long;
}

export interface CFamilyGroups_GetPlaytimeSummary_Response {
  entries?: CFamilyGroups_PlaytimeEntry[];
  entries_by_owner?: CFamilyGroups_PlaytimeEntry[];
}

export interface CFamilyGroups_GetPreferredLenders_Request {
  family_groupid?: Long;
}

export interface CFamilyGroups_GetPreferredLenders_Response {
  members?: CFamilyGroups_GetPreferredLenders_Response_FamilyMember[];
}

export interface CFamilyGroups_GetPreferredLenders_Response_FamilyMember {
  steamid?: Long;
  preferred_appids?: number[];
}

export interface CFamilyGroups_GetPurchaseRequests_Request {
  family_groupid?: Long;
  request_ids?: Long[];
  rt_include_completed_since?: number;
}

export interface CFamilyGroups_GetPurchaseRequests_Response {
  requests?: PurchaseRequest[];
}

export interface CFamilyGroups_GetSharedLibraryApps_Request {
  family_groupid?: Long;
  include_own?: boolean;
  include_excluded?: boolean;
  language?: string;
  max_apps?: number;
  include_non_games?: boolean;
  steamid?: Long;
}

export interface CFamilyGroups_GetSharedLibraryApps_Response {
  apps?: CFamilyGroups_GetSharedLibraryApps_Response_SharedApp[];
  owner_steamid?: Long;
}

export interface CFamilyGroups_GetSharedLibraryApps_Response_SharedApp {
  appid?: number;
  owner_steamids?: Long[];
  name?: string;
  sort_as?: string;
  capsule_filename?: string;
  img_icon_hash?: string;
  exclude_reason?: number;
  rt_time_acquired?: number;
  rt_last_played?: number;
  rt_playtime?: number;
  app_type?: number;
  content_descriptors?: number[];
}

export interface CFamilyGroups_GetUsersSharingDevice_Request {
  family_groupid?: Long;
  client_instance_id?: Long;
}

export interface CFamilyGroups_GetUsersSharingDevice_Response {
  users?: Long[];
}

export interface CFamilyGroups_InviteToFamilyGroup_Request {
  family_groupid?: Long;
  receiver_steamid?: Long;
  receiver_role?: number;
}

export interface CFamilyGroups_InviteToFamilyGroup_Response {
  invite_id?: Long;
  two_factor_method?: number;
}

export interface CFamilyGroups_JoinFamilyGroup_Request {
  family_groupid?: Long;
  nonce?: Long;
}

export interface CFamilyGroups_JoinFamilyGroup_Response {
  two_factor_method?: number;
  cooldown_skip_granted?: boolean;
  invite_already_accepted?: boolean;
  cooldown_seconds_remaining?: number;
}

export interface CFamilyGroups_ModifyFamilyGroupDetails_Request {
  family_groupid?: Long;
  name?: string;
}

export type CFamilyGroups_ModifyFamilyGroupDetails_Response = Record<string, never>;

export interface CFamilyGroups_PlaytimeEntry {
  steamid?: Long;
  appid?: number;
  first_played?: number;
  latest_played?: number;
  seconds_played?: number;
}

export interface CFamilyGroups_RemoveFromFamilyGroup_Request {
  family_groupid?: Long;
  steamid_to_remove?: Long;
}

export type CFamilyGroups_RemoveFromFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_RequestPurchase_Request {
  family_groupid?: Long;
  gidshoppingcart?: Long;
  store_country_code?: string;
  use_account_cart?: boolean;
}

export interface CFamilyGroups_RequestPurchase_Response {
  gidshoppingcart?: Long;
  request_id?: Long;
}

export interface CFamilyGroups_ResendInvitationToFamilyGroup_Request {
  family_groupid?: Long;
  steamid?: Long;
}

export type CFamilyGroups_ResendInvitationToFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_RespondToRequestedPurchase_Request {
  family_groupid?: Long;
  action?: number;
  request_id?: Long;
}

export type CFamilyGroups_RespondToRequestedPurchase_Response = Record<string, never>;

export interface CFamilyGroups_RollbackFamilyGroup_Request {
  family_groupid?: Long;
  rtime32_target?: number;
}

export type CFamilyGroups_RollbackFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroups_SetFamilyCooldownOverrides_Request {
  family_groupid?: Long;
  cooldown_count?: number;
}

export type CFamilyGroups_SetFamilyCooldownOverrides_Response = Record<string, never>;

export interface CFamilyGroups_SetPreferredLender_Request {
  family_groupid?: Long;
  appid?: number;
  lender_steamid?: Long;
}

export type CFamilyGroups_SetPreferredLender_Response = Record<string, never>;

export interface CFamilyGroups_UndeleteFamilyGroup_Request {
  family_groupid?: Long;
}

export type CFamilyGroups_UndeleteFamilyGroup_Response = Record<string, never>;

export interface CFamilyGroupsClient_GroupChanged_Notification {
  family_groupid?: Long;
}

export type CFamilyGroupsClient_InviteStatus_Notification = Record<string, never>;

export interface CFamilyGroupsClient_NotifyRunningApps_Notification {
  family_groupid?: Long;
  running_apps?: CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp[];
}

export interface CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember {
  member_steamid?: Long;
  owner_steamid?: Long;
}

export interface CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp {
  appid?: number;
  playing_members?: CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember[];
}

export interface FamilyGroupFormerMember {
  steamid?: Long;
}

export interface FamilyGroupMember {
  steamid?: Long;
  role?: number;
  time_joined?: number;
  cooldown_seconds_remaining?: number;
}

export interface FamilyGroupMembership {
  family_groupid?: Long;
  rtime_joined?: number;
  rtime_left?: number;
  role?: number;
  participated?: boolean;
}

export interface FamilyGroupPendingInvite {
  steamid?: Long;
  role?: number;
}

export interface FamilyGroupPendingInviteForUser {
  family_groupid?: Long;
  role?: number;
  inviter_steamid?: Long;
  awaiting_2fa?: boolean;
  invite_id?: Long;
}

export interface PurchaseRequest {
  requester_steamid?: Long;
  gidshoppingcart?: Long;
  time_requested?: number;
  time_responded?: number;
  responder_steamid?: Long;
  response_action?: number;
  is_completed?: boolean;
  request_id?: Long;
  requested_packageids?: number[];
  purchased_packageids?: number[];
  requested_bundleids?: number[];
  purchased_bundleids?: number[];
}

export abstract class FamilyGroupsService {
  abstract CancelFamilyGroupInvite(
    request: CFamilyGroups_CancelFamilyGroupInvite_Request,
  ): Promise<CFamilyGroups_CancelFamilyGroupInvite_Response>;
  abstract ClearCooldownSkip(
    request: CFamilyGroups_ClearCooldownSkip_Request,
  ): Promise<CFamilyGroups_ClearCooldownSkip_Response>;
  abstract ConfirmInviteToFamilyGroup(
    request: CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
  ): Promise<CFamilyGroups_ConfirmInviteToFamilyGroup_Response>;
  abstract ConfirmJoinFamilyGroup(
    request: CFamilyGroups_ConfirmJoinFamilyGroup_Request,
  ): Promise<CFamilyGroups_ConfirmJoinFamilyGroup_Response>;
  abstract CreateFamilyGroup(
    request: CFamilyGroups_CreateFamilyGroup_Request,
  ): Promise<CFamilyGroups_CreateFamilyGroup_Response>;
  abstract DeleteFamilyGroup(
    request: CFamilyGroups_DeleteFamilyGroup_Request,
  ): Promise<CFamilyGroups_DeleteFamilyGroup_Response>;
  abstract ForceAcceptInvite(
    request: CFamilyGroups_ForceAcceptInvite_Request,
  ): Promise<CFamilyGroups_ForceAcceptInvite_Response>;
  abstract GetChangeLog(
    request: CFamilyGroups_GetChangeLog_Request,
  ): Promise<CFamilyGroups_GetChangeLog_Response>;
  abstract GetFamilyGroup(
    request: CFamilyGroups_GetFamilyGroup_Request,
  ): Promise<CFamilyGroups_GetFamilyGroup_Response>;
  abstract GetFamilyGroupForUser(
    request: CFamilyGroups_GetFamilyGroupForUser_Request,
  ): Promise<CFamilyGroups_GetFamilyGroupForUser_Response>;
  abstract GetInviteCheckResults(
    request: CFamilyGroups_GetInviteCheckResults_Request,
  ): Promise<CFamilyGroups_GetInviteCheckResults_Response>;
  abstract GetPlaytimeSummary(
    request: CFamilyGroups_GetPlaytimeSummary_Request,
  ): Promise<CFamilyGroups_GetPlaytimeSummary_Response>;
  abstract GetPreferredLenders(
    request: CFamilyGroups_GetPreferredLenders_Request,
  ): Promise<CFamilyGroups_GetPreferredLenders_Response>;
  abstract GetPurchaseRequests(
    request: CFamilyGroups_GetPurchaseRequests_Request,
  ): Promise<CFamilyGroups_GetPurchaseRequests_Response>;
  abstract GetSharedLibraryApps(
    request: CFamilyGroups_GetSharedLibraryApps_Request,
  ): Promise<CFamilyGroups_GetSharedLibraryApps_Response>;
  abstract GetUsersSharingDevice(
    request: CFamilyGroups_GetUsersSharingDevice_Request,
  ): Promise<CFamilyGroups_GetUsersSharingDevice_Response>;
  abstract InviteToFamilyGroup(
    request: CFamilyGroups_InviteToFamilyGroup_Request,
  ): Promise<CFamilyGroups_InviteToFamilyGroup_Response>;
  abstract JoinFamilyGroup(
    request: CFamilyGroups_JoinFamilyGroup_Request,
  ): Promise<CFamilyGroups_JoinFamilyGroup_Response>;
  abstract ModifyFamilyGroupDetails(
    request: CFamilyGroups_ModifyFamilyGroupDetails_Request,
  ): Promise<CFamilyGroups_ModifyFamilyGroupDetails_Response>;
  abstract RemoveFromFamilyGroup(
    request: CFamilyGroups_RemoveFromFamilyGroup_Request,
  ): Promise<CFamilyGroups_RemoveFromFamilyGroup_Response>;
  abstract RequestPurchase(
    request: CFamilyGroups_RequestPurchase_Request,
  ): Promise<CFamilyGroups_RequestPurchase_Response>;
  abstract ResendInvitationToFamilyGroup(
    request: CFamilyGroups_ResendInvitationToFamilyGroup_Request,
  ): Promise<CFamilyGroups_ResendInvitationToFamilyGroup_Response>;
  abstract RespondToRequestedPurchase(
    request: CFamilyGroups_RespondToRequestedPurchase_Request,
  ): Promise<CFamilyGroups_RespondToRequestedPurchase_Response>;
  abstract RollbackFamilyGroup(
    request: CFamilyGroups_RollbackFamilyGroup_Request,
  ): Promise<CFamilyGroups_RollbackFamilyGroup_Response>;
  abstract SetFamilyCooldownOverrides(
    request: CFamilyGroups_SetFamilyCooldownOverrides_Request,
  ): Promise<CFamilyGroups_SetFamilyCooldownOverrides_Response>;
  abstract SetPreferredLender(
    request: CFamilyGroups_SetPreferredLender_Request,
  ): Promise<CFamilyGroups_SetPreferredLender_Response>;
  abstract UndeleteFamilyGroup(
    request: CFamilyGroups_UndeleteFamilyGroup_Request,
  ): Promise<CFamilyGroups_UndeleteFamilyGroup_Response>;
}

export abstract class FamilyGroupsClientService {
  abstract NotifyGroupChanged(
    request: CFamilyGroupsClient_GroupChanged_Notification,
  ): Promise<void>;
  abstract NotifyInviteStatus(
    request: CFamilyGroupsClient_InviteStatus_Notification,
  ): Promise<void>;
  abstract NotifyRunningApps(
    request: CFamilyGroupsClient_NotifyRunningApps_Notification,
  ): Promise<void>;
}
