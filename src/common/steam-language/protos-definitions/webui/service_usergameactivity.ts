/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CUserGameActivity_Event {
  timestamp?: number;
  event_type?: number;
  event_sub_type?: number;
  data1?: Long;
  data2?: Long;
  data3?: Long;
  data4?: Long;
  item_appid?: number;
  item_contextid?: Long;
  item_assetid?: Long;
  proto_data?: Buffer;
}

export interface CUserGameActivity_GetActivity_Request {
  steamid?: Long;
  appid?: number;
  count?: number;
  starttime?: number;
  endtime?: number;
}

export interface CUserGameActivity_GetActivity_Response {
  steamid?: Long;
  appid?: number;
  events?: CUserGameActivity_Event[];
}

export abstract class UserGameActivityService {
  abstract GetActivity(
    request: CUserGameActivity_GetActivity_Request,
  ): Promise<CUserGameActivity_GetActivity_Response>;
}
