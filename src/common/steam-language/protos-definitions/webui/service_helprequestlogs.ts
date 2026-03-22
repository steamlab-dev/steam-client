/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CHelpRequestLogs_GetApplicationLogDemand_Request {
  appid?: number;
}

export interface CHelpRequestLogs_GetApplicationLogDemand_Response {
  request_id?: bigint;
}

export interface CHelpRequestLogs_UploadUserApplicationLog_Request {
  appid?: number;
  log_type?: string;
  version_string?: string;
  log_contents?: string;
  request_id?: bigint;
}

export interface CHelpRequestLogs_UploadUserApplicationLog_Response {
  id?: bigint;
}

export abstract class HelpRequestLogsService {
  abstract GetApplicationLogDemand(
    request: CHelpRequestLogs_GetApplicationLogDemand_Request,
  ): Promise<CHelpRequestLogs_GetApplicationLogDemand_Response>;
  abstract UploadUserApplicationLog(
    request: CHelpRequestLogs_UploadUserApplicationLog_Request,
  ): Promise<CHelpRequestLogs_UploadUserApplicationLog_Response>;
}
