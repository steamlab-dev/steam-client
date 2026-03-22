/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CDataPublisher_ClientContentCorruptionReport_Notification {
  appid?: number;
  depotid?: number;
  download_source?: string;
  objectid?: string;
  cellid?: number;
  is_manifest?: boolean;
  object_size?: bigint;
  corruption_type?: number;
  used_https?: boolean;
  oc_proxy_detected?: boolean;
}

export interface CDataPublisher_ClientUpdateAppJob_Notification {
  app_id?: number;
  depot_ids?: number[];
  app_state?: number;
  job_app_error?: number;
  error_details?: string;
  job_duration?: number;
  files_validation_failed?: number;
  job_bytes_downloaded?: bigint;
  job_bytes_staged?: bigint;
  bytes_comitted?: bigint;
  start_app_state?: number;
  stats_machine_id?: bigint;
  branch_name?: string;
  total_bytes_downloaded?: bigint;
  total_bytes_staged?: bigint;
  total_bytes_restored?: bigint;
  is_borrowed?: boolean;
  is_free_weekend?: boolean;
  total_bytes_patched?: bigint;
  total_bytes_saved?: bigint;
  cell_id?: number;
  is_workshop?: boolean;
  is_shader?: boolean;
  seconds_not_played?: number;
}

export interface CDataPublisher_GetVRDeviceInfo_Request {
  month_count?: number;
}

export interface CDataPublisher_GetVRDeviceInfo_Response {
  device?: CDataPublisher_GetVRDeviceInfo_Response.Device[];
}

export namespace CDataPublisher_GetVRDeviceInfo_Response {
  export interface Device {
    name?: string;
    ref?: number;
    aggregation_ref?: number;
    total?: number;
    driver?: string;
    device_class?: number;
  }
}

export interface CDataPublisher_SetVRDeviceInfoAggregationReference_Request {
  ref?: number;
  aggregation_ref?: number;
}

export interface CDataPublisher_SetVRDeviceInfoAggregationReference_Response {
  result?: number;
}

export interface CDataPublisher_AddVRDeviceInfo_Request {
  manufacturer?: string;
  model?: string;
  driver?: string;
  controller_type?: string;
  device_class?: number;
}

export interface CDataPublisher_AddVRDeviceInfo_Response {
  result?: number;
  ref?: number;
}

export interface CValveHWSurvey_GetSurveySchedule_Request {
  surveydatetoken?: string;
  surveydatetokenversion?: bigint;
}

export interface CValveHWSurvey_GetSurveySchedule_Response {
  surveydatetoken?: number;
  surveydatetokenversion?: bigint;
}

export abstract class DataPublisherService {
  abstract ClientContentCorruptionReport(
    request: CDataPublisher_ClientContentCorruptionReport_Notification,
  ): Promise<void>;
  abstract ClientUpdateAppJobReport(
    request: CDataPublisher_ClientUpdateAppJob_Notification,
  ): Promise<void>;
  abstract GetVRDeviceInfo(
    request: CDataPublisher_GetVRDeviceInfo_Request,
  ): Promise<CDataPublisher_GetVRDeviceInfo_Response>;
  abstract SetVRDeviceInfoAggregationReference(
    request: CDataPublisher_SetVRDeviceInfoAggregationReference_Request,
  ): Promise<CDataPublisher_SetVRDeviceInfoAggregationReference_Response>;
  abstract AddVRDeviceInfo(
    request: CDataPublisher_AddVRDeviceInfo_Request,
  ): Promise<CDataPublisher_AddVRDeviceInfo_Response>;
}

export abstract class ValveHWSurveyService {
  abstract GetSurveySchedule(
    request: CValveHWSurvey_GetSurveySchedule_Request,
  ): Promise<CValveHWSurvey_GetSurveySchedule_Response>;
}
