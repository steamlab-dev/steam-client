/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CAchievements_GetInfo_Request {
  gameid?: Long;
}

export interface CAchievements_GetInfo_Response {
  achievements?: CAchievements_GetInfo_Response_Info[];
}

export interface CAchievements_GetInfo_Response_Info {
  id?: string;
  name?: string;
  desc?: string;
  image_url_achieved?: string;
  image_url_not_achieved?: string;
  achieved?: boolean;
  unlock_time?: number;
}

export abstract class AchievementsService {
  abstract GetInfo(request: CAchievements_GetInfo_Request): Promise<CAchievements_GetInfo_Response>;
}
