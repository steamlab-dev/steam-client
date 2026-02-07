/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const EBaseClientMessages = {
  CM_CustomGameEvent: 280,
  CM_CustomGameEventBounce: 281,
  CM_ClientUIEvent: 282,
  CM_DevPaletteVisibilityChanged: 283,
  CM_WorldUIControllerHasPanelChanged: 284,
  CM_RotateAnchor: 285,
  CM_ListenForResponseFound: 286,
  CM_MAX_BASE: 300,
} as const;

export type EBaseClientMessages = (typeof EBaseClientMessages)[keyof typeof EBaseClientMessages];

export const EClientUIEvent = {
  EClientUIEvent_Invalid: 0,
  EClientUIEvent_DialogFinished: 1,
  EClientUIEvent_FireOutput: 2,
} as const;

export type EClientUIEvent = (typeof EClientUIEvent)[keyof typeof EClientUIEvent];

export interface CClientMsg_CustomGameEvent {
  event_name?: string;
  data?: Buffer;
}

export interface CClientMsg_CustomGameEventBounce {
  event_name?: string;
  data?: Buffer;
  player_slot?: number;
}

export interface CClientMsg_ClientUIEvent {
  event?: EClientUIEvent;
  ent_ehandle?: number;
  client_ehandle?: number;
  data1?: string;
  data2?: string;
}

export interface CClientMsg_DevPaletteVisibilityChangedEvent {
  visible?: boolean;
}

export interface CClientMsg_WorldUIControllerHasPanelChangedEvent {
  has_panel?: boolean;
  client_ehandle?: number;
  literal_hand_type?: number;
}

export interface CClientMsg_RotateAnchor {
  angle?: number;
}

export interface CClientMsg_ListenForResponseFound {
  player_slot?: number;
}
