/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CTimedTrial_GetTimeRemaining_Request {
  appid?: number;
}

export interface CTimedTrial_GetTimeRemaining_Response {
  seconds_played?: number;
  seconds_allowed?: number;
  packageid?: number;
  mastersub_appid?: number;
}

export interface CTimedTrial_RecordPlaytime_Request {
  appid?: number;
  seconds_played?: number;
}

export interface CTimedTrial_RecordPlaytime_Response {
  seconds_played?: number;
  seconds_allowed?: number;
}

export interface CTimedTrial_ResetPlaytime_Request {
  appid?: number;
}

export interface CTimedTrial_ResetPlaytime_Response {
  seconds_played?: number;
  seconds_allowed?: number;
}

export abstract class TimedTrialService {
  abstract GetTimeRemaining(
    request: CTimedTrial_GetTimeRemaining_Request,
  ): Promise<CTimedTrial_GetTimeRemaining_Response>;
  abstract RecordPlaytime(
    request: CTimedTrial_RecordPlaytime_Request,
  ): Promise<CTimedTrial_RecordPlaytime_Response>;
  abstract ResetPlaytime(
    request: CTimedTrial_ResetPlaytime_Request,
  ): Promise<CTimedTrial_ResetPlaytime_Response>;
}
