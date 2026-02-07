/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientFriendMsg {
  steamid?: Long;
  chat_entry_type?: number;
  message?: Buffer;
  rtime32_server_timestamp?: number;
  echo_to_sender?: boolean;
}

export interface CMsgClientFriendMsgIncoming {
  steamid_from?: Long;
  chat_entry_type?: number;
  from_limited_account?: boolean;
  message?: Buffer;
  rtime32_server_timestamp?: number;
}

export interface CMsgClientAddFriend {
  steamid_to_add?: Long;
  accountname_or_email_to_add?: string;
}

export interface CMsgClientAddFriendResponse {
  eresult?: number;
  steam_id_added?: Long;
  persona_name_added?: string;
}

export interface CMsgClientRemoveFriend {
  friendid?: Long;
}

export interface CMsgClientHideFriend {
  friendid?: Long;
  hide?: boolean;
}

export interface CMsgClientFriendsList {
  bincremental?: boolean;
  friends?: CMsgClientFriendsList.Friend[];
  max_friend_count?: number;
  active_friend_count?: number;
  friends_limit_hit?: boolean;
}

export namespace CMsgClientFriendsList {
  export interface Friend {
    ulfriendid?: Long;
    efriendrelationship?: number;
  }
}

export interface CMsgClientFriendsGroupsList {
  bremoval?: boolean;
  bincremental?: boolean;
  friendGroups?: CMsgClientFriendsGroupsList.FriendGroup[];
  memberships?: CMsgClientFriendsGroupsList.FriendGroupsMembership[];
}

export namespace CMsgClientFriendsGroupsList {
  export interface FriendGroup {
    nGroupID?: number;
    strGroupName?: string;
  }

  export interface FriendGroupsMembership {
    ulSteamID?: Long;
    nGroupID?: number;
  }
}

export interface CMsgClientPlayerNicknameList {
  removal?: boolean;
  incremental?: boolean;
  nicknames?: CMsgClientPlayerNicknameList.PlayerNickname[];
}

export namespace CMsgClientPlayerNicknameList {
  export interface PlayerNickname {
    steamid?: Long;
    nickname?: string;
  }
}

export interface CMsgClientSetPlayerNickname {
  steamid?: Long;
  nickname?: string;
}

export interface CMsgClientSetPlayerNicknameResponse {
  eresult?: number;
}

export interface CMsgClientRequestFriendData {
  persona_state_requested?: number;
  friends?: Long[];
}

export interface CMsgClientChangeStatus {
  persona_state?: number;
  player_name?: string;
  is_auto_generated_name?: boolean;
  high_priority?: boolean;
  persona_set_by_user?: boolean;
  persona_state_flags?: number;
  need_persona_response?: boolean;
  is_client_idle?: boolean;
}

export interface CMsgPersonaChangeResponse {
  result?: number;
  player_name?: string;
}

export interface CMsgClientPersonaState {
  status_flags?: number;
  friends?: CMsgClientPersonaState.Friend[];
}

export namespace CMsgClientPersonaState {
  export interface Friend {
    friendid?: Long;
    persona_state?: number;
    game_played_app_id?: number;
    game_server_ip?: number;
    game_server_port?: number;
    persona_state_flags?: number;
    online_session_instances?: number;
    persona_set_by_user?: boolean;
    player_name?: string;
    query_port?: number;
    steamid_source?: Long;
    avatar_hash?: Buffer;
    last_logoff?: number;
    last_logon?: number;
    last_seen_online?: number;
    clan_rank?: number;
    game_name?: string;
    gameid?: Long;
    game_data_blob?: Buffer;
    clan_tag?: string;
    broadcast_id?: Long;
    game_lobby_id?: Long;
    watching_broadcast_accountid?: number;
    watching_broadcast_appid?: number;
    watching_broadcast_viewers?: number;
    watching_broadcast_title?: string;
    is_community_banned?: boolean;
    player_name_pending_review?: boolean;
    avatar_pending_review?: boolean;
    on_steam_deck?: boolean;
    gaming_device_type?: number;
  }

  export namespace Friend {
    export interface ClanData {
      ogg_app_id?: number;
      chat_group_id?: Long;
    }

    export interface KV {
      key?: string;
      value?: string;
    }

    export interface OtherGameData {
      gameid?: Long;
    }
  }
}

export interface CMsgClientFriendProfileInfo {
  steamid_friend?: Long;
}

export interface CMsgClientFriendProfileInfoResponse {
  eresult?: number;
  steamid_friend?: Long;
  time_created?: number;
  real_name?: string;
  city_name?: string;
  state_name?: string;
  country_name?: string;
  headline?: string;
  summary?: string;
}

export interface CMsgClientCreateFriendsGroup {
  steamid?: Long;
  groupname?: string;
  steamid_friends?: Long[];
}

export interface CMsgClientCreateFriendsGroupResponse {
  eresult?: number;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroup {
  steamid?: Long;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientManageFriendsGroup {
  groupid?: number;
  groupname?: string;
  steamid_friends_added?: Long[];
  steamid_friends_removed?: Long[];
}

export interface CMsgClientManageFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientAddFriendToGroup {
  groupid?: number;
  steamiduser?: Long;
}

export interface CMsgClientAddFriendToGroupResponse {
  eresult?: number;
}

export interface CMsgClientRemoveFriendFromGroup {
  groupid?: number;
  steamiduser?: Long;
}

export interface CMsgClientRemoveFriendFromGroupResponse {
  eresult?: number;
}

export type CMsgClientGetEmoticonList = Record<string, never>;

export interface CMsgClientEmoticonList {
  emoticons?: CMsgClientEmoticonList.Emoticon[];
  stickers?: CMsgClientEmoticonList.Sticker[];
  effects?: CMsgClientEmoticonList.Effect[];
}

export namespace CMsgClientEmoticonList {
  export interface Emoticon {
    name?: string;
    count?: number;
    time_last_used?: number;
    use_count?: number;
    time_received?: number;
    appid?: number;
  }

  export interface Sticker {
    name?: string;
    count?: number;
    time_received?: number;
    appid?: number;
    time_last_used?: number;
    use_count?: number;
  }

  export interface Effect {
    name?: string;
    count?: number;
    time_received?: number;
    infinite_use?: boolean;
    appid?: number;
  }
}
