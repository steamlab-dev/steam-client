/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CAccountPrivateAppList {
  appids?: number[];
}

export type CAccountPrivateApps_GetPrivateAppList_Request = Record<string, never>;

export interface CAccountPrivateApps_GetPrivateAppList_Response {
  private_apps?: CAccountPrivateAppList;
}

export interface CAccountPrivateApps_ToggleAppPrivacy_Request {
  appids?: number[];
  private?: boolean;
}

export type CAccountPrivateApps_ToggleAppPrivacy_Response = Record<string, never>;

export interface CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification {
  private_apps?: CAccountPrivateAppList;
}

export abstract class AccountPrivateAppsService {
  abstract GetPrivateAppList(
    request: CAccountPrivateApps_GetPrivateAppList_Request,
  ): Promise<CAccountPrivateApps_GetPrivateAppList_Response>;
  abstract ToggleAppPrivacy(
    request: CAccountPrivateApps_ToggleAppPrivacy_Request,
  ): Promise<CAccountPrivateApps_ToggleAppPrivacy_Response>;
}

export abstract class AccountPrivateAppsClientService {
  abstract NotifyPrivateAppListChanged(
    request: CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification,
  ): Promise<void>;
}
