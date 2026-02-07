/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CFriendsList_FavoritesChanged_Notification {
  favorites?: CFriendsListFavoriteEntry[];
}

export type CFriendsList_GetCategories_Request = Record<string, never>;

export interface CFriendsList_GetCategories_Response {
  categories?: CFriendsListCategory[];
}

export type CFriendsList_GetFavorites_Request = Record<string, never>;

export interface CFriendsList_GetFavorites_Response {
  favorites?: CFriendsListFavoriteEntry[];
}

export type CFriendsList_GetFriendsList_Request = Record<string, never>;

export interface CFriendsList_GetFriendsList_Response {
  friendslist?: CMsgClientFriendsList;
}

export interface CFriendsList_SetFavorites_Request {
  favorites?: CFriendsListFavoriteEntry[];
}

export type CFriendsList_SetFavorites_Response = Record<string, never>;

export interface CFriendsListCategory {
  groupid?: number;
  name?: string;
  accountid_members?: number[];
}

export interface CFriendsListFavoriteEntry {
  accountid?: number;
  clanid?: number;
  chat_group_id?: Long;
}

export interface CMsgClientFriendsList {
  bincremental?: boolean;
  friends?: CMsgClientFriendsList_Friend[];
  max_friend_count?: number;
  active_friend_count?: number;
  friends_limit_hit?: boolean;
}

export interface CMsgClientFriendsList_Friend {
  ulfriendid?: Long;
  efriendrelationship?: number;
}

export abstract class FriendsListService {
  abstract GetCategories(
    request: CFriendsList_GetCategories_Request,
  ): Promise<CFriendsList_GetCategories_Response>;
  abstract GetFavorites(
    request: CFriendsList_GetFavorites_Request,
  ): Promise<CFriendsList_GetFavorites_Response>;
  abstract GetFriendsList(
    request: CFriendsList_GetFriendsList_Request,
  ): Promise<CFriendsList_GetFriendsList_Response>;
  abstract SetFavorites(
    request: CFriendsList_SetFavorites_Request,
  ): Promise<CFriendsList_SetFavorites_Response>;
}

export abstract class FriendsListClientService {
  abstract FavoritesChanged(request: CFriendsList_FavoritesChanged_Notification): Promise<void>;
}
