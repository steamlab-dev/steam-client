/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const GCClientLauncherType = {
  GCClientLauncherType_DEFAULT: 0,
  GCClientLauncherType_PERFECTWORLD: 1,
  GCClientLauncherType_STEAMCHINA: 2,
  GCClientLauncherType_SOURCE2: 3,
} as const;

export type GCClientLauncherType = (typeof GCClientLauncherType)[keyof typeof GCClientLauncherType];

export const GCConnectionStatus = {
  GCConnectionStatus_HAVE_SESSION: 0,
  GCConnectionStatus_GC_GOING_DOWN: 1,
  GCConnectionStatus_NO_SESSION: 2,
  GCConnectionStatus_NO_SESSION_IN_LOGON_QUEUE: 3,
  GCConnectionStatus_NO_STEAM: 4,
} as const;

export type GCConnectionStatus = (typeof GCConnectionStatus)[keyof typeof GCConnectionStatus];

export interface CMsgSOIDOwner {
  type?: number;
  id?: Long;
}

export interface CMsgSOSingleObject {
  type_id?: number;
  object_data?: Buffer;
  version?: Long;
  owner_soid?: CMsgSOIDOwner;
}

export interface CMsgSOMultipleObjects {
  objects_modified?: CMsgSOMultipleObjects.SingleObject[];
  version?: Long;
  owner_soid?: CMsgSOIDOwner;
}

export namespace CMsgSOMultipleObjects {
  export interface SingleObject {
    type_id?: number;
    object_data?: Buffer;
  }
}

export interface CMsgSOCacheSubscribed {
  objects?: CMsgSOCacheSubscribed.SubscribedType[];
  version?: Long;
  owner_soid?: CMsgSOIDOwner;
}

export namespace CMsgSOCacheSubscribed {
  export interface SubscribedType {
    type_id?: number;
    object_data?: Buffer[];
  }
}

export interface CMsgSOCacheUnsubscribed {
  owner_soid?: CMsgSOIDOwner;
}

export interface CMsgSOCacheSubscriptionCheck {
  version?: Long;
  owner_soid?: CMsgSOIDOwner;
}

export interface CMsgSOCacheSubscriptionRefresh {
  owner_soid?: CMsgSOIDOwner;
}

export interface CMsgSOCacheVersion {
  version?: Long;
}

export interface CMsgAccountDetails {
  valid?: boolean;
  account_name?: string;
  public_profile?: boolean;
  public_inventory?: boolean;
  vac_banned?: boolean;
  cyber_cafe?: boolean;
  school_account?: boolean;
  free_trial_account?: boolean;
  subscribed?: boolean;
  low_violence?: boolean;
  limited?: boolean;
  trusted?: boolean;
  package?: number;
  time_cached?: number;
  account_locked?: boolean;
  community_banned?: boolean;
  trade_banned?: boolean;
  eligible_for_community_market?: boolean;
}

export interface CMsgGCMultiplexMessage {
  msgtype?: number;
  payload?: Buffer;
  steamids?: Long[];
  replytogc?: boolean;
}

export interface CMsgGCMultiplexMessage_Response {
  msgtype?: number;
}

export interface CGCToGCMsgMasterAck {
  dir_index?: number;
  gc_type?: number;
}

export interface CGCToGCMsgMasterAck_Response {
  eresult?: number;
}

export type CGCToGCMsgMasterStartupComplete = Record<string, never>;

export interface CGCToGCMsgRouted {
  msg_type?: number;
  sender_id?: Long;
  net_message?: Buffer;
  ip?: number;
}

export interface CGCToGCMsgRoutedReply {
  msg_type?: number;
  net_message?: Buffer;
}

export interface CMsgGCUpdateSessionIP {
  steamid?: Long;
  ip?: number;
}

export interface CMsgGCRequestSessionIP {
  steamid?: Long;
}

export interface CMsgGCRequestSessionIPResponse {
  ip?: number;
}

export interface CMsgSOCacheHaveVersion {
  soid?: CMsgSOIDOwner;
  version?: Long;
}

export interface CMsgClientHello {
  version?: number;
  socache_have_versions?: CMsgSOCacheHaveVersion[];
  client_session_need?: number;
  client_launcher?: number;
  partner_srcid?: number;
  partner_accountid?: number;
  partner_accountflags?: number;
  partner_accountbalance?: number;
  steam_launcher?: number;
}

export interface CMsgServerHello {
  version?: number;
  socache_have_versions?: CMsgSOCacheHaveVersion[];
  legacy_client_session_need?: number;
  client_launcher?: number;
  legacy_steamdatagram_routing?: Buffer;
  required_internal_addr?: number;
  steamdatagram_login?: Buffer;
  socache_control?: number;
}

export interface CMsgClientWelcome {
  version?: number;
  game_data?: Buffer;
  outofdate_subscribed_caches?: CMsgSOCacheSubscribed[];
  uptodate_subscribed_caches?: CMsgSOCacheSubscriptionCheck[];
  location?: CMsgClientWelcome.Location;
  game_data2?: Buffer;
  rtime32_gc_welcome_timestamp?: number;
  currency?: number;
  balance?: number;
  balance_url?: string;
  txn_country_code?: string;
}

export namespace CMsgClientWelcome {
  export interface Location {
    latitude?: number;
    longitude?: number;
    country?: string;
  }
}

export interface CMsgConnectionStatus {
  status?: GCConnectionStatus;
  client_session_need?: number;
  queue_position?: number;
  queue_size?: number;
  wait_seconds?: number;
  estimated_wait_seconds_remaining?: number;
}

export interface CWorkshop_PopulateItemDescriptions_Request {
  appid?: number;
  languages?: CWorkshop_PopulateItemDescriptions_Request.ItemDescriptionsLanguageBlock[];
}

export namespace CWorkshop_PopulateItemDescriptions_Request {
  export interface SingleItemDescription {
    gameitemid?: number;
    item_description?: string;
    one_per_account?: boolean;
  }

  export interface ItemDescriptionsLanguageBlock {
    language?: string;
    descriptions?: CWorkshop_PopulateItemDescriptions_Request.SingleItemDescription[];
  }
}

export interface CWorkshop_GetContributors_Request {
  appid?: number;
  gameitemid?: number;
}

export interface CWorkshop_GetContributors_Response {
  contributors?: Long[];
}

export interface CWorkshop_SetItemPaymentRules_Request {
  appid?: number;
  gameitemid?: number;
  associated_workshop_files?: CWorkshop_SetItemPaymentRules_Request.WorkshopItemPaymentRule[];
  partner_accounts?: CWorkshop_SetItemPaymentRules_Request.PartnerItemPaymentRule[];
  validate_only?: boolean;
  make_workshop_files_subscribable?: boolean;
  associated_workshop_file_for_direct_payments?: CWorkshop_SetItemPaymentRules_Request.WorkshopDirectPaymentRule;
}

export namespace CWorkshop_SetItemPaymentRules_Request {
  export interface WorkshopItemPaymentRule {
    workshop_file_id?: Long;
    revenue_percentage?: number;
    rule_description?: string;
    rule_type?: number;
  }

  export interface WorkshopDirectPaymentRule {
    workshop_file_id?: Long;
    rule_description?: string;
  }

  export interface PartnerItemPaymentRule {
    account_id?: number;
    revenue_percentage?: number;
    rule_description?: string;
  }
}

export type CWorkshop_SetItemPaymentRules_Response = Record<string, never>;

export interface CGameServers_AggregationQuery_Request {
  filter?: string;
  group_fields?: string[];
}

export interface CGameServers_AggregationQuery_Response {
  groups?: CGameServers_AggregationQuery_Response.Group[];
}

export namespace CGameServers_AggregationQuery_Response {
  export interface Group {
    group_values?: string[];
    servers_empty?: number;
    servers_full?: number;
    servers_total?: number;
    players_humans?: number;
    players_bots?: number;
    player_capacity?: number;
  }
}

export interface CWorkshop_AddSpecialPayment_Request {
  appid?: number;
  gameitemid?: number;
  date?: string;
  payment_us_usd?: Long;
  payment_row_usd?: Long;
}

export type CWorkshop_AddSpecialPayment_Response = Record<string, never>;

export interface CProductInfo_SetRichPresenceLocalization_Request {
  appid?: number;
  languages?: CProductInfo_SetRichPresenceLocalization_Request.LanguageSection[];
  steamid?: Long;
}

export namespace CProductInfo_SetRichPresenceLocalization_Request {
  export interface Token {
    token?: string;
    value?: string;
  }

  export interface LanguageSection {
    language?: string;
    tokens?: CProductInfo_SetRichPresenceLocalization_Request.Token[];
  }
}

export type CProductInfo_SetRichPresenceLocalization_Response = Record<string, never>;

export interface CMsgSerializedSOCache {
  file_version?: number;
  caches?: CMsgSerializedSOCache.Cache[];
  gc_socache_file_version?: number;
}

export namespace CMsgSerializedSOCache {
  export interface TypeCache {
    type?: number;
    objects?: Buffer[];
    service_id?: number;
  }

  export interface Cache {
    type?: number;
    id?: Long;
    type_caches?: CMsgSerializedSOCache.TypeCache[];
  }

  export namespace Cache {
    export interface Version {
      service?: number;
      version?: Long;
    }
  }
}
