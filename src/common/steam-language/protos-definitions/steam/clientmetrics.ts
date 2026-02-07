/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CClientMetrics_ClientBootstrap_RequestInfo {
  original_hostname?: string;
  actual_hostname?: string;
  path?: string;
  base_name?: string;
  success?: boolean;
  status_code?: number;
  address_of_request_url?: string;
  response_time_ms?: number;
  bytes_received?: Long;
  num_retries?: number;
}

export interface CClientMetrics_ClientBootstrap_Summary {
  launcher_type?: number;
  steam_realm?: number;
  beta_name?: string;
  download_completed?: boolean;
  total_time_ms?: number;
  manifest_requests?: CClientMetrics_ClientBootstrap_RequestInfo[];
  package_requests?: CClientMetrics_ClientBootstrap_RequestInfo[];
}

export interface CClientMetrics_ContentDownloadResponse_Counts {
  class_100?: number;
  class_200?: number;
  class_300?: number;
  class_400?: number;
  class_500?: number;
  no_response?: number;
  class_unknown?: number;
}

export interface CClientMetrics_ContentDownloadResponse_HostCounts {
  hostname?: string;
  source_type?: number;
  counts?: CClientMetrics_ContentDownloadResponse_Counts;
}

export interface CClientMetrics_ContentDownloadResponse_Hosts {
  hosts?: CClientMetrics_ContentDownloadResponse_HostCounts[];
}
