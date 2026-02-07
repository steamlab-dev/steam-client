/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CUserNews_Event {
  eventtype?: number;
  eventtime?: number;
  steamid_actor?: Long;
  steamid_target?: Long;
  gameid?: Long;
  packageid?: number;
  shortcutid?: number;
  achievement_names?: string[];
  clan_eventid?: Long;
  clan_announcementid?: Long;
  publishedfileid?: Long;
  event_last_mod_time?: number;
  appids?: number[];
  event_post_time?: number;
}

export interface CUserNews_GetAppDetailsSpotlight_Request {
  appid?: number;
  include_already_seen?: boolean;
}

export interface CUserNews_GetAppDetailsSpotlight_Response {
  events?: CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent[];
}

export interface CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent {
  event_type?: number;
  event_time?: number;
  clan_id?: Long;
  clan_announcementid?: Long;
  appid?: number;
  rtime32_last_modified?: number;
}

export interface CUserNews_GetUserNews_Request {
  count?: number;
  starttime?: number;
  endtime?: number;
  language?: string;
  filterflags?: number;
  filterappid?: number;
}

export interface CUserNews_GetUserNews_Response {
  news?: CUserNews_Event[];
  achievement_display_data?: CUserNewsAchievementDisplayData[];
}

export interface CUserNewsAchievementDisplayData {
  appid?: number;
  achievements?: CUserNewsAchievementDisplayData_CAchievement[];
}

export interface CUserNewsAchievementDisplayData_CAchievement {
  name?: string;
  display_name?: string;
  display_description?: string;
  icon?: string;
  unlocked_pct?: number;
  hidden?: boolean;
}

export abstract class UserNewsService {
  abstract GetAppDetailsSpotlight(
    request: CUserNews_GetAppDetailsSpotlight_Request,
  ): Promise<CUserNews_GetAppDetailsSpotlight_Response>;
  abstract GetUserNews(
    request: CUserNews_GetUserNews_Request,
  ): Promise<CUserNews_GetUserNews_Response>;
}
