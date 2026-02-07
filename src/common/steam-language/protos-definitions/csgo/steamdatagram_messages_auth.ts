/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";

export interface CMsgSteamDatagramRelayAuthTicket {
  time_expiry?: number;
  authorized_client_identity_string?: string;
  gameserver_identity_string?: string;
  authorized_public_ip?: number;
  gameserver_address?: Buffer;
  app_id?: number;
  virtual_port?: number;
  extra_fields?: CMsgSteamDatagramRelayAuthTicket.ExtraField[];
  legacy_authorized_steam_id?: Long;
  legacy_gameserver_steam_id?: Long;
  legacy_gameserver_pop_id?: number;
  legacy_authorized_client_identity_binary?: Buffer;
  legacy_gameserver_identity_binary?: Buffer;
}

export namespace CMsgSteamDatagramRelayAuthTicket {
  export interface ExtraField {
    name?: string;
    string_value?: string;
    int64_value?: Long;
    fixed64_value?: Long;
  }
}

export interface CMsgSteamDatagramSignedRelayAuthTicket {
  reserved_do_not_use?: Long;
  ticket?: Buffer;
  signature?: Buffer;
  key_id?: Long;
  certs?: CMsgSteamDatagramCertificateSigned[];
}

export interface CMsgSteamDatagramCachedCredentialsForApp {
  private_key?: Buffer;
  cert?: Buffer;
  relay_tickets?: Buffer[];
}

export interface CMsgSteamDatagramGameCoordinatorServerLogin {
  time_generated?: number;
  appid?: number;
  routing?: Buffer;
  appdata?: Buffer;
  legacy_identity_binary?: Buffer;
  identity_string?: string;
  dummy_steam_id?: Long;
}

export interface CMsgSteamDatagramSignedGameCoordinatorServerLogin {
  cert?: CMsgSteamDatagramCertificateSigned;
  login?: Buffer;
  signature?: Buffer;
}

export interface CMsgSteamDatagramHostedServerAddressPlaintext {
  ipv4?: number;
  ipv6?: Buffer;
  port?: number;
  routing_secret?: Long;
  protocol_version?: number;
}
