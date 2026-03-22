/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CChatRoom_GetChatRoomGroupSummary_Response } from "./common";

export interface CClanChatRooms_GetClanChatRoomInfo_Request {
  steamid?: bigint;
  autocreate?: boolean;
}

export interface CClanChatRooms_GetClanChatRoomInfo_Response {
  chat_group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
}

export interface CClanChatRooms_SetClanChatRoomPrivate_Request {
  steamid?: bigint;
  chat_room_private?: boolean;
}

export interface CClanChatRooms_SetClanChatRoomPrivate_Response {
  chat_room_private?: boolean;
}

export abstract class ClanChatRoomsService {
  abstract GetClanChatRoomInfo(
    request: CClanChatRooms_GetClanChatRoomInfo_Request,
  ): Promise<CClanChatRooms_GetClanChatRoomInfo_Response>;
  abstract SetClanChatRoomPrivate(
    request: CClanChatRooms_SetClanChatRoomPrivate_Request,
  ): Promise<CClanChatRooms_SetClanChatRoomPrivate_Response>;
}
