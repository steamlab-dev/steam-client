/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CUserGameNote {
  id?: string;
  appid?: number;
  shortcut_name?: string;
  shortcutid?: number;
  ordinal?: number;
  time_created?: number;
  time_modified?: number;
  title?: string;
  content?: string;
}

export interface CUserGameNotes_DeleteNote_Request {
  appid?: number;
  shortcut_name?: string;
  shortcutid?: number;
  note_id?: string;
}

export type CUserGameNotes_DeleteNote_Response = Record<string, never>;

export type CUserGameNotes_GetGamesWithNotes_Request = Record<string, never>;

export interface CUserGameNotes_GetGamesWithNotes_Response {
  games_with_notes?: CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes[];
}

export interface CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes {
  appid?: number;
  shortcutid?: number;
  shortcut_name?: string;
  last_modified?: number;
  note_count?: number;
}

export interface CUserGameNotes_GetNotesForGame_Request {
  appid?: number;
  shortcut_name?: string;
  shortcutid?: number;
  include_content?: boolean;
}

export interface CUserGameNotes_GetNotesForGame_Response {
  notes?: CUserGameNote[];
}

export interface CUserGameNotes_SaveNote_Request {
  appid?: number;
  shortcut_name?: string;
  shortcutid?: number;
  note_id?: string;
  create_new?: boolean;
  title?: string;
  content?: string;
}

export interface CUserGameNotes_SaveNote_Response {
  note_id?: string;
}

export abstract class UserGameNotesService {
  abstract DeleteNote(
    request: CUserGameNotes_DeleteNote_Request,
  ): Promise<CUserGameNotes_DeleteNote_Response>;
  abstract GetGamesWithNotes(
    request: CUserGameNotes_GetGamesWithNotes_Request,
  ): Promise<CUserGameNotes_GetGamesWithNotes_Response>;
  abstract GetNotesForGame(
    request: CUserGameNotes_GetNotesForGame_Request,
  ): Promise<CUserGameNotes_GetNotesForGame_Response>;
  abstract SaveNote(
    request: CUserGameNotes_SaveNote_Request,
  ): Promise<CUserGameNotes_SaveNote_Response>;
}
