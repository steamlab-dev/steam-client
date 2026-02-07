/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CGameRecording_AudioSessionsChanged_Notification {
  sessions?: CGameRecording_AudioSessionsChanged_Notification.Session[];
}

export namespace CGameRecording_AudioSessionsChanged_Notification {
  export interface Session {
    id?: string;
    name?: string;
    is_system?: boolean;
    is_muted?: boolean;
    is_active?: boolean;
    is_captured?: boolean;
    recent_peak?: number;
    is_game?: boolean;
    is_steam?: boolean;
    is_saved?: boolean;
  }
}
