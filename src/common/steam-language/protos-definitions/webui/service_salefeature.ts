/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CAchievementDetails {
  statid?: number;
  fieldid?: number;
  achievement_name_internal?: string;
  rtime_unlocked?: number;
}

export interface CFriendSharedYearInView {
  steamid?: Long;
  privacy_state?: number;
  rt_privacy_updated?: number;
  privacy_override?: boolean;
}

export interface CGameAchievements {
  appid?: number;
  achievements?: CAchievementDetails[];
  all_time_unlocked_achievements?: number;
  unlocked_more_in_future?: boolean;
}

export interface CGamePlaytimeStats {
  appid?: number;
  stats?: CPlaytimeStats;
  playtime_streak?: CPlaytimeStreak;
  playtime_ranks?: CPlaytimeRanks;
  rtime_first_played?: number;
  relative_game_stats?: CPlaytimeStats;
}

export interface CGameRank {
  appid?: number;
  rank?: number;
  relative_playtime_percentagex100?: number;
}

export interface CGameRankings {
  overall_ranking?: CRankingCategory;
  vr_ranking?: CRankingCategory;
  deck_ranking?: CRankingCategory;
  controller_ranking?: CRankingCategory;
  linux_ranking?: CRankingCategory;
  mac_ranking?: CRankingCategory;
  windows_ranking?: CRankingCategory;
}

export interface CGameSummary {
  appid?: number;
  new_this_year?: boolean;
  rtime_first_played_lifetime?: number;
  demo?: boolean;
  playtest?: boolean;
  played_during_early_access?: boolean;
  played_vr?: boolean;
  played_deck?: boolean;
  played_controller?: boolean;
  played_linux?: boolean;
  played_mac?: boolean;
  played_windows?: boolean;
  total_playtime_percentagex100?: number;
  total_sessions?: number;
  rtime_release_date?: number;
  parent_appid?: number;
}

export interface CGlobalPercentiles {
  median_achievements?: number;
  median_games?: number;
  median_streak?: number;
}

export interface CGlobalPlaytimeDistribution {
  new_releases?: number;
  recent_releases?: number;
  classic_releases?: number;
  recent_cutoff_year?: number;
}

export interface CMonthlyPlaytimeStats {
  rtime_month?: number;
  stats?: CPlaytimeStats;
  appid?: CGamePlaytimeStats[];
  relative_monthly_stats?: CPlaytimeStats;
  game_summary?: CSimpleGameSummary[];
}

export interface CPlaytimeByNumbers {
  screenshots_shared?: number;
  gifts_sent?: number;
  loyalty_reactions?: number;
  written_reviews?: number;
  guides_submitted?: number;
  workshop_contributions?: number;
  badges_earned?: number;
  friends_added?: number;
  forum_posts?: number;
  workshop_subscriptions?: number;
  guide_subscribers?: number;
  workshop_subscribers?: number;
  games_played_pct?: number;
  achievements_pct?: number;
  game_streak_pct?: number;
  games_played_avg?: number;
  achievements_avg?: number;
  game_streak_avg?: number;
}

export interface CPlaytimeRanks {
  overall_rank?: number;
  vr_rank?: number;
  deck_rank?: number;
  controller_rank?: number;
  linux_rank?: number;
  mac_rank?: number;
  windows_rank?: number;
}

export interface CPlaytimeStats {
  total_playtime_seconds?: number;
  total_sessions?: number;
  vr_sessions?: number;
  deck_sessions?: number;
  controller_sessions?: number;
  linux_sessions?: number;
  macos_sessions?: number;
  windows_sessions?: number;
  total_playtime_percentagex100?: number;
  vr_playtime_percentagex100?: number;
  deck_playtime_percentagex100?: number;
  controller_playtime_percentagex100?: number;
  linux_playtime_percentagex100?: number;
  macos_playtime_percentagex100?: number;
  windows_playtime_percentagex100?: number;
}

export interface CPlaytimeStreak {
  longest_consecutive_days?: number;
  rtime_start?: number;
  streak_games?: CPlaytimeStreakGame[];
}

export interface CPlaytimeStreakGame {
  appid?: number;
}

export interface CPreviousYIRSummaryData {
  games_played?: number;
  unlocked_achievements?: number;
  longest_streak?: number;
}

export interface CRankingCategory {
  category?: string;
  rankings?: CGameRank[];
}

export interface CSaleFeature_GetAllUserActionDataForType_Request {
  gid?: Long;
  type?: number;
  count?: number;
  last_account_index?: number;
}

export interface CSaleFeature_GetAllUserActionDataForType_Response {
  entries?: CSaleFeature_GetAllUserActionDataForType_Response_Entry[];
  last_account_index?: number;
}

export interface CSaleFeature_GetAllUserActionDataForType_Response_Entry {
  gid?: Long;
  jsondata?: string;
  steamid?: Long;
}

export interface CSaleFeature_GetFriendsSharedYearInReview_Request {
  steamid?: Long;
  year?: number;
  return_private?: boolean;
}

export interface CSaleFeature_GetFriendsSharedYearInReview_Response {
  friend_shares?: CFriendSharedYearInView[];
  year?: number;
}

export interface CSaleFeature_GetMultipleUserActionData_Request {
  steamid?: Long;
  gids?: Long[];
  type?: number;
}

export interface CSaleFeature_GetMultipleUserActionData_Response {
  entries?: CSaleFeature_GetMultipleUserActionData_Response_Entry[];
}

export interface CSaleFeature_GetMultipleUserActionData_Response_Entry {
  gid?: Long;
  jsondata?: string;
  steamid?: Long;
}

export interface CSaleFeature_GetUserActionData_Request {
  steamid?: Long;
  gid?: Long;
  type?: number;
}

export interface CSaleFeature_GetUserActionData_Response {
  jsondata?: string;
}

export interface CSaleFeature_GetUserSharingPermissions_Request {
  steamid?: Long;
  year?: number;
}

export interface CSaleFeature_GetUserSharingPermissions_Response {
  privacy_state?: number;
  generated_value?: boolean;
  steamid?: Long;
  rt_privacy_updated?: number;
}

export interface CSaleFeature_GetUserYearAchievements_Request {
  steamid?: Long;
  year?: number;
  appids?: number[];
  total_only?: boolean;
}

export interface CSaleFeature_GetUserYearAchievements_Response {
  game_achievements?: CGameAchievements[];
  total_achievements?: number;
  total_rare_achievements?: number;
  total_games_with_achievements?: number;
}

export interface CSaleFeature_GetUserYearInReview_Request {
  steamid?: Long;
  year?: number;
  force_regenerate?: boolean;
  access_source?: number;
  fetch_previous_year_summary?: boolean;
}

export interface CSaleFeature_GetUserYearInReview_Response {
  stats?: CUserYearInReviewStats;
  performance_stats?: CYearInReviewPerformanceStats;
  percentiles?: CGlobalPercentiles;
  distribution?: CGlobalPlaytimeDistribution;
  previous_year_summary?: CPreviousYIRSummaryData;
}

export interface CSaleFeature_GetUserYearInReviewShareImage_Request {
  steamid?: Long;
  year?: number;
  language?: string;
}

export interface CSaleFeature_GetUserYearInReviewShareImage_Response {
  images?: CSaleFeature_GetUserYearInReviewShareImage_Response_Image[];
}

export interface CSaleFeature_GetUserYearInReviewShareImage_Response_Image {
  name?: string;
  url_path?: string;
}

export interface CSaleFeature_GetUserYearScreenshots_Request {
  steamid?: Long;
  year?: number;
  appids?: number[];
}

export interface CSaleFeature_GetUserYearScreenshots_Response {
  apps?: CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp[];
}

export interface CSaleFeature_GetUserYearScreenshots_Response_Screenshot {
  image_url?: string;
  preview_url?: string;
  image_width?: number;
  image_height?: number;
  maybe_inappropriate_sex?: boolean;
  maybe_inappropriate_violence?: boolean;
  visibility?: number;
  spoiler_tag?: boolean;
}

export interface CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp {
  appid?: number;
  screenshots?: CSaleFeature_GetUserYearScreenshots_Response_Screenshot[];
}

export interface CSaleFeature_GetYIRCurrentMonthlySummary_Request {
  steamid?: Long;
}

export interface CSaleFeature_GetYIRCurrentMonthlySummary_Response {
  year?: number;
  month?: number;
  games_played?: number;
  top_played_appid?: number;
  longest_streak_days?: number;
  rt_streak_start?: number;
  achievements?: number;
  screenshots?: number;
}

export interface CSaleFeature_SetUserSharingPermissions_Request {
  steamid?: Long;
  year?: number;
  privacy_state?: number;
}

export interface CSaleFeature_SetUserSharingPermissions_Response {
  privacy_state?: number;
}

export interface CSimpleGameSummary {
  appid?: number;
  total_playtime_percentagex100?: number;
  relative_playtime_percentagex100?: number;
}

export interface CUserPlaytimeStats {
  total_stats?: CPlaytimeStats;
  games?: CGamePlaytimeStats[];
  playtime_streak?: CPlaytimeStreak;
  months?: CMonthlyPlaytimeStats[];
  game_summary?: CGameSummary[];
  demos_played?: number;
  game_rankings?: CGameRankings;
  playtests_played?: number;
  summary_stats?: CUserPlaytimeSummaryStats;
  substantial?: boolean;
  tag_stats?: CUserTagStats;
  by_numbers?: CPlaytimeByNumbers;
}

export interface CUserPlaytimeSummaryStats {
  total_achievements?: number;
  total_games_with_achievements?: number;
  total_rare_achievements?: number;
}

export interface CUserTagStats {
  stats?: CUserTagStats_Tag[];
}

export interface CUserTagStats_Tag {
  tag_id?: number;
  tag_weight?: number;
  tag_weight_pre_selection?: number;
}

export interface CUserYearInReviewStats {
  account_id?: number;
  year?: number;
  playtime_stats?: CUserPlaytimeStats;
  privacy_state?: number;
}

export interface CYearInReviewPerformanceStats {
  from_dbo?: boolean;
  overall_time_ms?: Long;
  dbo_load_ms?: Long;
  query_execution_ms?: Long;
  message_population_ms?: Long;
  dbo_lock_load_ms?: Long;
}

export abstract class SaleFeatureService {
  abstract GetAllUserActionDataForType(
    request: CSaleFeature_GetAllUserActionDataForType_Request,
  ): Promise<CSaleFeature_GetAllUserActionDataForType_Response>;
  abstract GetFriendsSharedYearInReview(
    request: CSaleFeature_GetFriendsSharedYearInReview_Request,
  ): Promise<CSaleFeature_GetFriendsSharedYearInReview_Response>;
  abstract GetMultipleUserActionData(
    request: CSaleFeature_GetMultipleUserActionData_Request,
  ): Promise<CSaleFeature_GetMultipleUserActionData_Response>;
  abstract GetUserActionData(
    request: CSaleFeature_GetUserActionData_Request,
  ): Promise<CSaleFeature_GetUserActionData_Response>;
  abstract GetUserSharingPermissions(
    request: CSaleFeature_GetUserSharingPermissions_Request,
  ): Promise<CSaleFeature_GetUserSharingPermissions_Response>;
  abstract GetUserYearAchievements(
    request: CSaleFeature_GetUserYearAchievements_Request,
  ): Promise<CSaleFeature_GetUserYearAchievements_Response>;
  abstract GetUserYearInReview(
    request: CSaleFeature_GetUserYearInReview_Request,
  ): Promise<CSaleFeature_GetUserYearInReview_Response>;
  abstract GetUserYearInReviewShareImage(
    request: CSaleFeature_GetUserYearInReviewShareImage_Request,
  ): Promise<CSaleFeature_GetUserYearInReviewShareImage_Response>;
  abstract GetUserYearScreenshots(
    request: CSaleFeature_GetUserYearScreenshots_Request,
  ): Promise<CSaleFeature_GetUserYearScreenshots_Response>;
  abstract GetYIRCurrentMonthlySummary(
    request: CSaleFeature_GetYIRCurrentMonthlySummary_Request,
  ): Promise<CSaleFeature_GetYIRCurrentMonthlySummary_Response>;
  abstract SetUserSharingPermissions(
    request: CSaleFeature_SetUserSharingPermissions_Request,
  ): Promise<CSaleFeature_SetUserSharingPermissions_Response>;
}
