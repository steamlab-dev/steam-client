/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgSteamNetworkingIdentityLegacyBinary {
  steam_id?: Long;
  generic_bytes?: Buffer;
  generic_string?: string;
  ipv6_and_port?: Buffer;
}

export interface CMsgSteamDatagramCertificate {
  key_type?: CMsgSteamDatagramCertificate.EKeyType;
  key_data?: Buffer;
  legacy_steam_id?: Long;
  legacy_identity_binary?: CMsgSteamNetworkingIdentityLegacyBinary;
  identity_string?: string;
  gameserver_datacenter_ids?: number[];
  time_created?: number;
  time_expiry?: number;
  app_ids?: number[];
  ip_addresses?: string[];
}

export namespace CMsgSteamDatagramCertificate {
  export const EKeyType = {
    INVALID: 0,
    ED25519: 1,
  } as const;

  export type EKeyType = (typeof EKeyType)[keyof typeof EKeyType];
}

export interface CMsgSteamDatagramCertificateSigned {
  cert?: Buffer;
  ca_key_id?: Long;
  ca_signature?: Buffer;
  private_key_data?: Buffer;
}

export interface CMsgSteamDatagramCertificateRequest {
  cert?: CMsgSteamDatagramCertificate;
}
