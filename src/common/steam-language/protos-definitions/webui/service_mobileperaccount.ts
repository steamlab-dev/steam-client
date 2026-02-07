/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CMobilePerAccount_GetSettings_Request = Record<string, never>;

export interface CMobilePerAccount_GetSettings_Response {
  allow_sale_push?: boolean;
  allow_wishlist_push?: boolean;
  has_settings?: boolean;
  chat_notification_level?: number;
  notify_direct_chat?: boolean;
  notify_group_chat?: boolean;
  allow_event_push?: boolean;
}

export interface CMobilePerAccount_SetSettings_Request {
  allow_sale_push?: boolean;
  allow_wishlist_push?: boolean;
  chat_notification_level?: number;
  notify_direct_chat?: boolean;
  notify_group_chat?: boolean;
  allow_event_push?: boolean;
}

export type CMobilePerAccount_SetSettings_Response = Record<string, never>;

export abstract class MobilePerAccountService {
  abstract GetSettings(
    request: CMobilePerAccount_GetSettings_Request,
  ): Promise<CMobilePerAccount_GetSettings_Response>;
  abstract SetSettings(
    request: CMobilePerAccount_SetSettings_Request,
  ): Promise<CMobilePerAccount_SetSettings_Response>;
}
