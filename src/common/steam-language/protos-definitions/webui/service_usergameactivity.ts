/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CUserGameActivity_Event {
  timestamp?: number;
  event_type?: number;
  event_sub_type?: number;
  data1?: bigint;
  data2?: bigint;
  data3?: bigint;
  data4?: bigint;
  item_appid?: number;
  item_contextid?: bigint;
  item_assetid?: bigint;
  proto_data?: Buffer;
}

export interface CUserGameActivity_GetActivity_Request {
  steamid?: bigint;
  appid?: number;
  count?: number;
  starttime?: number;
  endtime?: number;
}

export interface CUserGameActivity_GetActivity_Response {
  steamid?: bigint;
  appid?: number;
  events?: CUserGameActivity_Event[];
}

export abstract class UserGameActivityService {
  abstract GetActivity(
    request: CUserGameActivity_GetActivity_Request,
  ): Promise<CUserGameActivity_GetActivity_Response>;
}
