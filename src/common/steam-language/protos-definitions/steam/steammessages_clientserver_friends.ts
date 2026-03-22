/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMsgClientFriendMsg {
  steamid?: bigint;
  chat_entry_type?: number;
  message?: Buffer;
  rtime32_server_timestamp?: number;
  echo_to_sender?: boolean;
}

export interface CMsgClientFriendMsgIncoming {
  steamid_from?: bigint;
  chat_entry_type?: number;
  from_limited_account?: boolean;
  message?: Buffer;
  rtime32_server_timestamp?: number;
}

export interface CMsgClientAddFriend {
  steamid_to_add?: bigint;
  accountname_or_email_to_add?: string;
}

export interface CMsgClientAddFriendResponse {
  eresult?: number;
  steam_id_added?: bigint;
  persona_name_added?: string;
}

export interface CMsgClientRemoveFriend {
  friendid?: bigint;
}

export interface CMsgClientHideFriend {
  friendid?: bigint;
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
    ulfriendid?: bigint;
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
    ulSteamID?: bigint;
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
    steamid?: bigint;
    nickname?: string;
  }
}

export interface CMsgClientSetPlayerNickname {
  steamid?: bigint;
  nickname?: string;
}

export interface CMsgClientSetPlayerNicknameResponse {
  eresult?: number;
}

export interface CMsgClientRequestFriendData {
  persona_state_requested?: number;
  friends?: bigint[];
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
    friendid?: bigint;
    persona_state?: number;
    game_played_app_id?: number;
    game_server_ip?: number;
    game_server_port?: number;
    persona_state_flags?: number;
    online_session_instances?: number;
    persona_set_by_user?: boolean;
    player_name?: string;
    query_port?: number;
    steamid_source?: bigint;
    avatar_hash?: Buffer;
    last_logoff?: number;
    last_logon?: number;
    last_seen_online?: number;
    clan_rank?: number;
    game_name?: string;
    gameid?: bigint;
    game_data_blob?: Buffer;
    clan_tag?: string;
    broadcast_id?: bigint;
    game_lobby_id?: bigint;
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
      chat_group_id?: bigint;
    }

    export interface KV {
      key?: string;
      value?: string;
    }

    export interface OtherGameData {
      gameid?: bigint;
    }
  }
}

export interface CMsgClientFriendProfileInfo {
  steamid_friend?: bigint;
}

export interface CMsgClientFriendProfileInfoResponse {
  eresult?: number;
  steamid_friend?: bigint;
  time_created?: number;
  real_name?: string;
  city_name?: string;
  state_name?: string;
  country_name?: string;
  headline?: string;
  summary?: string;
}

export interface CMsgClientCreateFriendsGroup {
  steamid?: bigint;
  groupname?: string;
  steamid_friends?: bigint[];
}

export interface CMsgClientCreateFriendsGroupResponse {
  eresult?: number;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroup {
  steamid?: bigint;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientManageFriendsGroup {
  groupid?: number;
  groupname?: string;
  steamid_friends_added?: bigint[];
  steamid_friends_removed?: bigint[];
}

export interface CMsgClientManageFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientAddFriendToGroup {
  groupid?: number;
  steamiduser?: bigint;
}

export interface CMsgClientAddFriendToGroupResponse {
  eresult?: number;
}

export interface CMsgClientRemoveFriendFromGroup {
  groupid?: number;
  steamiduser?: bigint;
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
