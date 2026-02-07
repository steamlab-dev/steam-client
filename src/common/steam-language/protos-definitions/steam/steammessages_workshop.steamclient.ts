/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CWorkshop_GetEULAStatus_Request {
  appid?: number;
}

export interface CWorkshop_GetEULAStatus_Response {
  version?: number;
  timestamp_action?: number;
  accepted?: boolean;
  needs_action?: boolean;
}

export abstract class WorkshopService {
  abstract GetEULAStatus(
    request: CWorkshop_GetEULAStatus_Request,
  ): Promise<CWorkshop_GetEULAStatus_Response>;
}
