/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CAccountPrivacy_GetCookiePreferences_Request = Record<string, never>;

export interface CAccountPrivacy_GetCookiePreferences_Response {
  preferences?: CAccountPrivacyCookiePreferences;
}

export interface CAccountPrivacyCookiePreferences {
  version?: number;
  preference_state?: number;
  content_customization?: CAccountPrivacyCookiePreferences_ContentCustomization;
  valve_analytics?: CAccountPrivacyCookiePreferences_ValveAnalytics;
  third_party_analytics?: CAccountPrivacyCookiePreferences_ThirdPartyAnalytics;
  third_party_content?: CAccountPrivacyCookiePreferences_ThirdPartyContent;
  utm_enabled?: boolean;
}

export interface CAccountPrivacyCookiePreferences_ContentCustomization {
  recentapps?: boolean;
}

export interface CAccountPrivacyCookiePreferences_ThirdPartyAnalytics {
  google_analytics?: boolean;
}

export interface CAccountPrivacyCookiePreferences_ThirdPartyContent {
  youtube?: boolean;
  vimeo?: boolean;
  sketchfab?: boolean;
  twitter?: boolean;
}

export interface CAccountPrivacyCookiePreferences_ValveAnalytics {
  product_impressions_tracking?: boolean;
}

export abstract class AccountPrivacyService {
  abstract GetCookiePreferences(
    request: CAccountPrivacy_GetCookiePreferences_Request,
  ): Promise<CAccountPrivacy_GetCookiePreferences_Response>;
}
