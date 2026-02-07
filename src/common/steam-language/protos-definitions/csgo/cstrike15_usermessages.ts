/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CEconItemPreviewDataBlock,
  CMsgGCCStrike15_ClientDeepStats,
  CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve,
  CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded,
  PlayerDecalDigitalSignature,
  ScoreLeaderboardData,
} from "./cstrike15_gcmessages";
import type {
  CMsgQAngle,
  CMsgRGBA,
  CMsgTransform,
  CMsgVector,
  CMsgVector2D,
} from "./networkbasetypes";

export const ECstrike15UserMessages = {
  CS_UM_VGUIMenu: 301,
  CS_UM_Geiger: 302,
  CS_UM_Train: 303,
  CS_UM_HudText: 304,
  CS_UM_SayText: 305,
  CS_UM_SayText2: 306,
  CS_UM_TextMsg: 307,
  CS_UM_HudMsg: 308,
  CS_UM_ResetHud: 309,
  CS_UM_GameTitle: 310,
  CS_UM_Shake: 312,
  CS_UM_Fade: 313,
  CS_UM_Rumble: 314,
  CS_UM_CloseCaption: 315,
  CS_UM_CloseCaptionDirect: 316,
  CS_UM_SendAudio: 317,
  CS_UM_RawAudio: 318,
  CS_UM_VoiceMask: 319,
  CS_UM_RequestState: 320,
  CS_UM_Damage: 321,
  CS_UM_RadioText: 322,
  CS_UM_HintText: 323,
  CS_UM_KeyHintText: 324,
  CS_UM_ProcessSpottedEntityUpdate: 325,
  CS_UM_ReloadEffect: 326,
  CS_UM_AdjustMoney: 327,
  CS_UM_UpdateTeamMoney: 328,
  CS_UM_StopSpectatorMode: 329,
  CS_UM_KillCam: 330,
  CS_UM_DesiredTimescale: 331,
  CS_UM_CurrentTimescale: 332,
  CS_UM_AchievementEvent: 333,
  CS_UM_MatchEndConditions: 334,
  CS_UM_DisconnectToLobby: 335,
  CS_UM_PlayerStatsUpdate: 336,
  CS_UM_ClientInfo: 339,
  CS_UM_XRankGet: 340,
  CS_UM_XRankUpd: 341,
  CS_UM_CallVoteFailed: 345,
  CS_UM_VoteStart: 346,
  CS_UM_VotePass: 347,
  CS_UM_VoteFailed: 348,
  CS_UM_VoteSetup: 349,
  CS_UM_ServerRankRevealAll: 350,
  CS_UM_SendLastKillerDamageToClient: 351,
  CS_UM_ServerRankUpdate: 352,
  CS_UM_ItemPickup: 353,
  CS_UM_ShowMenu: 354,
  CS_UM_BarTime: 355,
  CS_UM_AmmoDenied: 356,
  CS_UM_MarkAchievement: 357,
  CS_UM_MatchStatsUpdate: 358,
  CS_UM_ItemDrop: 359,
  CS_UM_SendPlayerItemDrops: 361,
  CS_UM_RoundBackupFilenames: 362,
  CS_UM_SendPlayerItemFound: 363,
  CS_UM_ReportHit: 364,
  CS_UM_XpUpdate: 365,
  CS_UM_QuestProgress: 366,
  CS_UM_ScoreLeaderboardData: 367,
  CS_UM_PlayerDecalDigitalSignature: 368,
  CS_UM_WeaponSound: 369,
  CS_UM_UpdateScreenHealthBar: 370,
  CS_UM_EntityOutlineHighlight: 371,
  CS_UM_SSUI: 372,
  CS_UM_SurvivalStats: 373,
  CS_UM_DisconnectToLobby2: 374,
  CS_UM_EndOfMatchAllPlayersData: 375,
  CS_UM_PostRoundDamageReport: 376,
  CS_UM_RoundEndReportData: 379,
  CS_UM_CurrentRoundOdds: 380,
  CS_UM_DeepStats: 381,
  CS_UM_ShootInfo: 383,
  CS_UM_CounterStrafe: 385,
  CS_UM_DamagePrediction: 386,
  CS_UM_RecurringMissionSchema: 387,
  CS_UM_SendPlayerLoadout: 388,
} as const;

export type ECstrike15UserMessages =
  (typeof ECstrike15UserMessages)[keyof typeof ECstrike15UserMessages];

export const ECSUsrMsg_DisconnectToLobby_Action = {
  k_ECSUsrMsg_DisconnectToLobby_Action_Default: 0,
  k_ECSUsrMsg_DisconnectToLobby_Action_GoQueue: 1,
} as const;

export type ECSUsrMsg_DisconnectToLobby_Action =
  (typeof ECSUsrMsg_DisconnectToLobby_Action)[keyof typeof ECSUsrMsg_DisconnectToLobby_Action];

export interface CCSUsrMsg_VGUIMenu {
  name?: string;
  show?: boolean;
  keys?: CCSUsrMsg_VGUIMenu.Keys[];
}

export namespace CCSUsrMsg_VGUIMenu {
  export interface Keys {
    name?: string;
    value?: string;
  }
}

export interface CCSUsrMsg_Geiger {
  range?: number;
}

export interface CCSUsrMsg_Train {
  train?: number;
}

export interface CCSUsrMsg_HudText {
  text?: string;
}

export interface CCSUsrMsg_HudMsg {
  channel?: number;
  pos?: CMsgVector2D;
  clr1?: CMsgRGBA;
  clr2?: CMsgRGBA;
  effect?: number;
  fade_in_time?: number;
  fade_out_time?: number;
  hold_time?: number;
  fx_time?: number;
  text?: string;
}

export interface CCSUsrMsg_Shake {
  command?: number;
  local_amplitude?: number;
  frequency?: number;
  duration?: number;
}

export interface CCSUsrMsg_Fade {
  duration?: number;
  hold_time?: number;
  flags?: number;
  clr?: CMsgRGBA;
}

export interface CCSUsrMsg_Rumble {
  index?: number;
  data?: number;
  flags?: number;
}

export interface CCSUsrMsg_CloseCaption {
  hash?: number;
  duration?: number;
  from_player?: boolean;
  cctoken?: string;
}

export interface CCSUsrMsg_CloseCaptionDirect {
  hash?: number;
  duration?: number;
  from_player?: boolean;
}

export interface CCSUsrMsg_SendAudio {
  radio_sound?: string;
}

export interface CCSUsrMsg_RawAudio {
  pitch?: number;
  entidx?: number;
  duration?: number;
  voice_filename?: string;
}

export interface CCSUsrMsg_VoiceMask {
  player_masks?: CCSUsrMsg_VoiceMask.PlayerMask[];
  player_mod_enable?: boolean;
}

export namespace CCSUsrMsg_VoiceMask {
  export interface PlayerMask {
    game_rules_mask?: number;
    ban_masks?: number;
  }
}

export interface CCSUsrMsg_Damage {
  amount?: number;
  inflictor_world_pos?: CMsgVector;
  victim_entindex?: number;
}

export interface CCSUsrMsg_RadioText {
  msg_dst?: number;
  client?: number;
  msg_name?: string;
  params?: string[];
}

export interface CCSUsrMsg_HintText {
  message?: string;
}

export interface CCSUsrMsg_KeyHintText {
  messages?: string[];
}

export interface CCSUsrMsg_ProcessSpottedEntityUpdate {
  new_update?: boolean;
  entity_updates?: CCSUsrMsg_ProcessSpottedEntityUpdate.SpottedEntityUpdate[];
}

export namespace CCSUsrMsg_ProcessSpottedEntityUpdate {
  export interface SpottedEntityUpdate {
    entity_idx?: number;
    class_id?: number;
    origin_x?: number;
    origin_y?: number;
    origin_z?: number;
    angle_y?: number;
    defuser?: boolean;
    player_has_defuser?: boolean;
    player_has_c4?: boolean;
  }
}

export interface CCSUsrMsg_SendPlayerItemDrops {
  entity_updates?: CEconItemPreviewDataBlock[];
}

export interface CCSUsrMsg_SendPlayerItemFound {
  iteminfo?: CEconItemPreviewDataBlock;
  playerslot?: number;
}

export interface CCSUsrMsg_ReloadEffect {
  entidx?: number;
  actanim?: number;
  origin_x?: number;
  origin_y?: number;
  origin_z?: number;
}

export interface CCSUsrMsg_WeaponSound {
  entidx?: number;
  origin_x?: number;
  origin_y?: number;
  origin_z?: number;
  sound?: string;
  game_timestamp?: number;
  source_soundscapeid?: number;
}

export interface CCSUsrMsg_UpdateScreenHealthBar {
  entidx?: number;
  healthratio_old?: number;
  healthratio_new?: number;
  style?: number;
}

export interface CCSUsrMsg_EntityOutlineHighlight {
  entidx?: number;
  removehighlight?: boolean;
}

export interface CCSUsrMsg_AdjustMoney {
  amount?: number;
}

export interface CCSUsrMsg_ReportHit {
  pos_x?: number;
  pos_y?: number;
  timestamp?: number;
  pos_z?: number;
}

export interface CCSUsrMsg_KillCam {
  obs_mode?: number;
  first_target?: number;
  second_target?: number;
}

export interface CCSUsrMsg_DesiredTimescale {
  desired_timescale?: number;
  duration_realtime_sec?: number;
  interpolator_type?: number;
  start_blend_time?: number;
}

export interface CCSUsrMsg_CurrentTimescale {
  cur_timescale?: number;
}

export interface CCSUsrMsg_AchievementEvent {
  achievement?: number;
  count?: number;
  user_id?: number;
}

export interface CCSUsrMsg_MatchEndConditions {
  fraglimit?: number;
  mp_maxrounds?: number;
  mp_winlimit?: number;
  mp_timelimit?: number;
}

export interface CCSUsrMsg_PlayerStatsUpdate {
  version?: number;
  stats?: CCSUsrMsg_PlayerStatsUpdate.Stat[];
  ehandle?: number;
  crc?: number;
}

export namespace CCSUsrMsg_PlayerStatsUpdate {
  export interface Stat {
    idx?: number;
    delta?: number;
  }
}

export interface CCSUsrMsg_QuestProgress {
  quest_id?: number;
  normal_points?: number;
  bonus_points?: number;
  is_event_quest?: boolean;
}

export interface CCSUsrMsg_ScoreLeaderboardData {
  data?: ScoreLeaderboardData;
}

export interface CCSUsrMsg_PlayerDecalDigitalSignature {
  data?: PlayerDecalDigitalSignature;
}

export interface CCSUsrMsg_XRankGet {
  mode_idx?: number;
  controller?: number;
}

export interface CCSUsrMsg_XRankUpd {
  mode_idx?: number;
  controller?: number;
  ranking?: number;
}

export interface CCSUsrMsg_CallVoteFailed {
  reason?: number;
  time?: number;
}

export interface CCSUsrMsg_VoteStart {
  team?: number;
  player_slot?: number;
  vote_type?: number;
  disp_str?: string;
  details_str?: string;
  other_team_str?: string;
  is_yes_no_vote?: boolean;
  player_slot_target?: number;
}

export interface CCSUsrMsg_VotePass {
  team?: number;
  vote_type?: number;
  disp_str?: string;
  details_str?: string;
}

export interface CCSUsrMsg_VoteFailed {
  team?: number;
  reason?: number;
}

export interface CCSUsrMsg_VoteSetup {
  potential_issues?: string[];
}

export interface CCSUsrMsg_SendLastKillerDamageToClient {
  num_hits_given?: number;
  damage_given?: number;
  num_hits_taken?: number;
  damage_taken?: number;
  actual_damage_given?: number;
  actual_damage_taken?: number;
}

export interface CCSUsrMsg_ServerRankUpdate {
  rank_update?: CCSUsrMsg_ServerRankUpdate.RankUpdate[];
}

export namespace CCSUsrMsg_ServerRankUpdate {
  export interface RankUpdate {
    account_id?: number;
    rank_old?: number;
    rank_new?: number;
    num_wins?: number;
    rank_change?: number;
    rank_type_id?: number;
  }
}

export interface CCSUsrMsg_XpUpdate {
  data?: CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded;
}

export interface CCSUsrMsg_ItemPickup {
  item?: string;
}

export interface CCSUsrMsg_ShowMenu {
  bits_valid_slots?: number;
  display_time?: number;
  menu_string?: string;
}

export interface CCSUsrMsg_BarTime {
  time?: string;
}

export interface CCSUsrMsg_AmmoDenied {
  ammoidx?: number;
}

export interface CCSUsrMsg_MarkAchievement {
  achievement?: string;
}

export interface CCSUsrMsg_MatchStatsUpdate {
  update?: string;
}

export interface CCSUsrMsg_ItemDrop {
  itemid?: Long;
  death?: boolean;
}

export interface CCSUsrMsg_RoundBackupFilenames {
  count?: number;
  index?: number;
  filename?: string;
  nicename?: string;
}

export interface CCSUsrMsg_SSUI {
  show?: boolean;
  start_time?: number;
  end_time?: number;
}

export interface CCSUsrMsg_SurvivalStats {
  xuid?: Long;
  facts?: CCSUsrMsg_SurvivalStats.Fact[];
  users?: CCSUsrMsg_SurvivalStats.Placement[];
  damages?: CCSUsrMsg_SurvivalStats.Damage[];
  ticknumber?: number;
}

export namespace CCSUsrMsg_SurvivalStats {
  export interface Fact {
    type?: number;
    display?: number;
    value?: number;
    interestingness?: number;
  }

  export interface Placement {
    xuid?: Long;
    teamnumber?: number;
    placement?: number;
  }

  export interface Damage {
    xuid?: Long;
    to?: number;
    to_hits?: number;
    from?: number;
    from_hits?: number;
  }
}

export interface CCSUsrMsg_EndOfMatchAllPlayersData {
  allplayerdata?: CCSUsrMsg_EndOfMatchAllPlayersData.PlayerData[];
  scene?: number;
}

export namespace CCSUsrMsg_EndOfMatchAllPlayersData {
  export interface Accolade {
    eaccolade?: number;
    value?: number;
    position?: number;
  }

  export interface PlayerData {
    slot?: number;
    xuid?: Long;
    name?: string;
    teamnumber?: number;
    nomination?: CCSUsrMsg_EndOfMatchAllPlayersData.Accolade;
    items?: CEconItemPreviewDataBlock[];
    playercolor?: number;
    isbot?: boolean;
  }
}

export interface CCSUsrMsg_RoundEndReportData {
  init_conditions?: CCSUsrMsg_RoundEndReportData.InitialConditions;
  all_rer_event_data?: CCSUsrMsg_RoundEndReportData.RerEvent[];
}

export namespace CCSUsrMsg_RoundEndReportData {
  export interface RerEvent {
    timestamp?: number;
    terrorist_odds?: number;
    ct_alive?: number;
    t_alive?: number;
  }

  export namespace RerEvent {
    export interface Victim {
      team_number?: number;
      playerslot?: number;
      xuid?: Long;
      color?: number;
      is_bot?: boolean;
      is_dead?: boolean;
    }

    export interface Objective {
      type?: number;
    }

    export interface Damage {
      other_playerslot?: number;
      other_xuid?: Long;
      health_removed?: number;
      num_hits?: number;
      return_health_removed?: number;
      return_num_hits?: number;
    }
  }
  export interface InitialConditions {
    ct_equip_value?: number;
    t_equip_value?: number;
    terrorist_odds?: number;
  }
}

export interface CCSUsrMsg_PostRoundDamageReport {
  other_xuid?: Long;
  given_kill_type?: number;
  given_health_removed?: number;
  given_num_hits?: number;
  taken_kill_type?: number;
  taken_health_removed?: number;
  taken_num_hits?: number;
}

export interface CCSUsrMsg_CurrentRoundOdds {
  odds?: number;
}

export interface CCSUsrMsg_DeepStats {
  stats?: CMsgGCCStrike15_ClientDeepStats;
}

export interface CCSUsrMsg_ShootInfo {
  frame_number?: number;
  hitbox_transforms?: CMsgTransform[];
  shoot_pos?: CMsgVector;
  shoot_dir?: CMsgQAngle;
}

export interface CCSUsrMsg_ResetHud {
  reset?: boolean;
}

export interface CCSUsrMsg_GameTitle {
  dummy?: number;
}

export interface CCSUsrMsg_RequestState {
  dummy?: number;
}

export interface CCSUsrMsg_StopSpectatorMode {
  dummy?: number;
}

export interface CCSUsrMsg_DisconnectToLobby {
  dummy?: number;
}

export interface CCSUsrMsg_ClientInfo {
  dummy?: number;
}

export interface CCSUsrMsg_ServerRankRevealAll {
  seconds_till_shutdown?: number;
  reservation?: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
}

export interface CCSUsrMsgPreMatchSayText {
  account_id?: number;
  text?: string;
  all_chat?: boolean;
}

export interface CCSUsrMsg_CounterStrafe {
  press_to_release_ns?: number;
  total_keys_down?: number;
}

export interface CCSUsrMsg_DamagePrediction {
  command_num?: number;
  pellet_idx?: number;
  victim_slot?: number;
  victim_starting_health?: number;
  victim_damage?: number;
  shoot_pos?: CMsgVector;
  shoot_dir?: CMsgQAngle;
  aim_punch?: CMsgQAngle;
}

export interface CCSUsrMsg_RecurringMissionSchema {
  period?: number;
  mission_schema?: Buffer;
}

export interface CCSUsrMsg_SendPlayerLoadout {
  loadout?: CCSUsrMsg_SendPlayerLoadout.LoadoutItem[];
  playerslot?: number;
}

export namespace CCSUsrMsg_SendPlayerLoadout {
  export interface LoadoutItem {
    econ_item?: CEconItemPreviewDataBlock;
    team?: number;
    slot?: number;
  }
}
