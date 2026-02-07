/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./steammessages_base";

export interface CGameServers_GetServerSteamIDsByIP_Request {
  server_ips?: string[];
}

export interface CGameServers_IPsWithSteamIDs_Response {
  servers?: CGameServers_IPsWithSteamIDs_Response.Server[];
}

export namespace CGameServers_IPsWithSteamIDs_Response {
  export interface Server {
    addr?: string;
    steamid?: Long;
  }
}

export interface CGameServers_GetServerIPsBySteamID_Request {
  server_steamids?: Long[];
}

export interface CGameServers_QueryByFakeIP_Request {
  fake_ip?: number;
  fake_port?: number;
  app_id?: number;
  query_type?: CGameServers_QueryByFakeIP_Request.EQueryType;
}

export namespace CGameServers_QueryByFakeIP_Request {
  export const EQueryType = {
    Query_Invalid: 0,
    Query_Ping: 1,
    Query_Players: 2,
    Query_Rules: 3,
  } as const;

  export type EQueryType = (typeof EQueryType)[keyof typeof EQueryType];
}

export interface CMsgGameServerPingQueryData {
  server_ip?: CMsgIPAddress;
  query_port?: number;
  game_port?: number;
  spectator_port?: number;
  spectator_server_name?: string;
  server_name?: string;
  steamid?: Long;
  app_id?: number;
  gamedir?: string;
  map?: string;
  game_description?: string;
  gametype?: string;
  num_players?: number;
  max_players?: number;
  num_bots?: number;
  password?: boolean;
  secure?: boolean;
  dedicated?: boolean;
  version?: string;
  sdr_popid?: number;
  sdr_location_string?: string;
}

export interface CMsgGameServerPlayersQueryData {
  players?: CMsgGameServerPlayersQueryData.Player[];
}

export namespace CMsgGameServerPlayersQueryData {
  export interface Player {
    name?: string;
    score?: number;
    time_played?: number;
  }
}

export interface CMsgGameServerRulesQueryData {
  rules?: CMsgGameServerRulesQueryData.Rule[];
}

export namespace CMsgGameServerRulesQueryData {
  export interface Rule {
    rule?: string;
    value?: string;
  }
}

export interface CGameServers_GameServerQuery_Response {
  ping_data?: CMsgGameServerPingQueryData;
  players_data?: CMsgGameServerPlayersQueryData;
  rules_data?: CMsgGameServerRulesQueryData;
}

export interface CGameServers_ReportServerPingReply_Notification {
  server_data?: CMsgGameServerPingQueryData;
  ping_ms?: number;
  client_sdr_location_string?: string;
}

export type GameServerClient_QueryServerData_Request = Record<string, never>;

export interface GameServerClient_QueryServerData_Response {
  ping_data?: CMsgGameServerPingQueryData;
  players_data?: CMsgGameServerPlayersQueryData;
  rules_data?: CMsgGameServerRulesQueryData;
}

export abstract class GameServersService {
  abstract GetServerSteamIDsByIP(
    request: CGameServers_GetServerSteamIDsByIP_Request,
  ): Promise<CGameServers_IPsWithSteamIDs_Response>;
  abstract GetServerIPsBySteamID(
    request: CGameServers_GetServerIPsBySteamID_Request,
  ): Promise<CGameServers_IPsWithSteamIDs_Response>;
  abstract QueryByFakeIP(
    request: CGameServers_QueryByFakeIP_Request,
  ): Promise<CGameServers_GameServerQuery_Response>;
  abstract ReportServerPingReply(
    request: CGameServers_ReportServerPingReply_Notification,
  ): Promise<void>;
}

export abstract class GameServerClientService {
  abstract QueryServerData(
    request: GameServerClient_QueryServerData_Request,
  ): Promise<GameServerClient_QueryServerData_Response>;
}
