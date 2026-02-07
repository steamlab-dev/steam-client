/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const ESteamNotificationType = {
  k_ESteamNotificationType_Invalid: 0,
  k_ESteamNotificationType_Test: 1,
  k_ESteamNotificationType_Gift: 2,
  k_ESteamNotificationType_Comment: 3,
  k_ESteamNotificationType_Item: 4,
  k_ESteamNotificationType_FriendInvite: 5,
  k_ESteamNotificationType_MajorSale: 6,
  k_ESteamNotificationType_PreloadAvailable: 7,
  k_ESteamNotificationType_Wishlist: 8,
  k_ESteamNotificationType_TradeOffer: 9,
  k_ESteamNotificationType_General: 10,
  k_ESteamNotificationType_HelpRequest: 11,
  k_ESteamNotificationType_AsyncGame: 12,
  k_ESteamNotificationType_ChatMsg: 13,
  k_ESteamNotificationType_ModeratorMsg: 14,
  k_ESteamNotificationType_ParentalFeatureAccessRequest: 15,
  k_ESteamNotificationType_FamilyInvite: 16,
  k_ESteamNotificationType_FamilyPurchaseRequest: 17,
  k_ESteamNotificationType_ParentalPlaytimeRequest: 18,
  k_ESteamNotificationType_FamilyPurchaseRequestResponse: 19,
  k_ESteamNotificationType_ParentalFeatureAccessResponse: 20,
  k_ESteamNotificationType_ParentalPlaytimeResponse: 21,
  k_ESteamNotificationType_RequestedGameAdded: 22,
  k_ESteamNotificationType_SendToPhone: 23,
  k_ESteamNotificationType_ClipDownloaded: 24,
  k_ESteamNotificationType_2FAPrompt: 25,
  k_ESteamNotificationType_MobileConfirmation: 26,
  k_ESteamNotificationType_PartnerEvent: 27,
  k_ESteamNotificationType_PlaytestInvite: 28,
  k_ESteamNotificationType_TradeReversal: 29,
} as const;

export type ESteamNotificationType =
  (typeof ESteamNotificationType)[keyof typeof ESteamNotificationType];

export interface SteamNotificationData {
  notification_id?: Long;
  notification_targets?: number;
  notification_type?: ESteamNotificationType;
  body_data?: string;
  read?: boolean;
  timestamp?: number;
  hidden?: boolean;
  expiry?: number;
  viewed?: number;
}

export interface CSteamNotification_NotificationsReceived_Notification {
  notifications?: SteamNotificationData[];
  pending_gift_count?: number;
  pending_friend_count?: number;
  pending_family_invite_count?: number;
}

export interface SteamNotificationPreference {
  notification_type?: ESteamNotificationType;
  notification_targets?: number;
}

export interface CSteamNotification_PreferencesUpdated_Notification {
  preferences?: SteamNotificationPreference[];
}

export abstract class SteamNotificationClientService {
  abstract NotificationsReceived(
    request: CSteamNotification_NotificationsReceived_Notification,
  ): Promise<void>;
  abstract PreferencesUpdated(
    request: CSteamNotification_PreferencesUpdated_Notification,
  ): Promise<void>;
}
