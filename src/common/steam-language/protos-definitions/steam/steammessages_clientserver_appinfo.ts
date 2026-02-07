/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientAppInfoUpdate {
  last_changenumber?: number;
  send_changelist?: boolean;
}

export interface CMsgClientAppInfoChanges {
  current_change_number?: number;
  force_full_update?: boolean;
  appIDs?: number[];
}

export interface CMsgClientAppInfoRequest {
  apps?: CMsgClientAppInfoRequest.App[];
  supports_batches?: boolean;
}

export namespace CMsgClientAppInfoRequest {
  export interface App {
    app_id?: number;
    section_flags?: number;
    section_CRC?: number[];
  }
}

export interface CMsgClientPICSChangesSinceRequest {
  since_change_number?: number;
  send_app_info_changes?: boolean;
  send_package_info_changes?: boolean;
  num_app_info_cached?: number;
  num_package_info_cached?: number;
}

export interface CMsgClientPICSChangesSinceResponse {
  current_change_number?: number;
  since_change_number?: number;
  force_full_update?: boolean;
  package_changes?: CMsgClientPICSChangesSinceResponse.PackageChange[];
  app_changes?: CMsgClientPICSChangesSinceResponse.AppChange[];
  force_full_app_update?: boolean;
  force_full_package_update?: boolean;
}

export namespace CMsgClientPICSChangesSinceResponse {
  export interface PackageChange {
    packageid?: number;
    change_number?: number;
    needs_token?: boolean;
  }

  export interface AppChange {
    appid?: number;
    change_number?: number;
    needs_token?: boolean;
  }
}

export interface CMsgClientPICSProductInfoRequest {
  packages?: CMsgClientPICSProductInfoRequest.PackageInfo[];
  apps?: CMsgClientPICSProductInfoRequest.AppInfo[];
  meta_data_only?: boolean;
  num_prev_failed?: number;
  OBSOLETE_supports_package_tokens?: number;
  sequence_number?: number;
  single_response?: boolean;
}

export namespace CMsgClientPICSProductInfoRequest {
  export interface AppInfo {
    appid?: number;
    access_token?: Long;
    only_public_obsolete?: boolean;
  }

  export interface PackageInfo {
    packageid?: number;
    access_token?: Long;
  }
}

export interface CMsgClientPICSProductInfoResponse {
  apps?: CMsgClientPICSProductInfoResponse.AppInfo[];
  unknown_appids?: number[];
  packages?: CMsgClientPICSProductInfoResponse.PackageInfo[];
  unknown_packageids?: number[];
  meta_data_only?: boolean;
  response_pending?: boolean;
  http_min_size?: number;
  http_host?: string;
}

export namespace CMsgClientPICSProductInfoResponse {
  export interface AppInfo {
    appid?: number;
    change_number?: number;
    missing_token?: boolean;
    sha?: Buffer;
    buffer?: Buffer;
    only_public?: boolean;
    size?: number;
  }

  export interface PackageInfo {
    packageid?: number;
    change_number?: number;
    missing_token?: boolean;
    sha?: Buffer;
    buffer?: Buffer;
    size?: number;
  }
}

export interface CMsgClientPICSAccessTokenRequest {
  packageids?: number[];
  appids?: number[];
}

export interface CMsgClientPICSAccessTokenResponse {
  package_access_tokens?: CMsgClientPICSAccessTokenResponse.PackageToken[];
  package_denied_tokens?: number[];
  app_access_tokens?: CMsgClientPICSAccessTokenResponse.AppToken[];
  app_denied_tokens?: number[];
}

export namespace CMsgClientPICSAccessTokenResponse {
  export interface PackageToken {
    packageid?: number;
    access_token?: Long;
  }

  export interface AppToken {
    appid?: number;
    access_token?: Long;
  }
}

export interface CMsgClientPICSPrivateBetaRequest {
  appid?: number;
  access_token?: Long;
  beta_name?: string;
  password_hash?: Buffer;
}

export interface CMsgClientPICSPrivateBetaResponse {
  eresult?: number;
  depot_section?: Buffer;
}
