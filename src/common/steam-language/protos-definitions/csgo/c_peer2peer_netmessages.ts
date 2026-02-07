/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgVoiceAudio } from "./netmessages";
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export const P2P_Messages = {
  p2p_TextMessage: 256,
  p2p_Voice: 257,
  p2p_Ping: 258,
  p2p_VRAvatarPosition: 259,
  p2p_WatchSynchronization: 260,
  p2p_FightingGame_GameData: 261,
  p2p_FightingGame_Connection: 262,
} as const;

export type P2P_Messages = (typeof P2P_Messages)[keyof typeof P2P_Messages];

export interface CP2P_TextMessage {
  text?: Buffer;
}

export interface CSteam_Voice_Encoding {
  voice_data?: Buffer;
}

export interface CP2P_Voice {
  audio?: CMsgVoiceAudio;
  broadcast_group?: number;
}

export namespace CP2P_Voice {
  export const Handler_Flags = {
    Played_Audio: 1,
  } as const;

  export type Handler_Flags = (typeof Handler_Flags)[keyof typeof Handler_Flags];
}

export interface CP2P_Ping {
  send_time?: Long;
  is_reply?: boolean;
}

export interface CP2P_VRAvatarPosition {
  body_parts?: CP2P_VRAvatarPosition.COrientation[];
  hat_id?: number;
  scene_id?: number;
  world_scale?: number;
}

export namespace CP2P_VRAvatarPosition {
  export interface COrientation {
    pos?: CMsgVector;
    ang?: CMsgQAngle;
  }
}

export interface CP2P_WatchSynchronization {
  demo_tick?: number;
  paused?: boolean;
  tv_listen_voice_indices?: Long;
  dota_spectator_mode?: number;
  dota_spectator_watching_broadcaster?: boolean;
  dota_spectator_hero_index?: number;
  dota_spectator_autospeed?: number;
  dota_replay_speed?: number;
}
