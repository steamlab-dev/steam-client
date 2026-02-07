/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";

export const ESteamNetworkingSocketsCipher = {
  k_ESteamNetworkingSocketsCipher_INVALID: 0,
  k_ESteamNetworkingSocketsCipher_NULL: 1,
  k_ESteamNetworkingSocketsCipher_AES_256_GCM: 2,
} as const;

export type ESteamNetworkingSocketsCipher =
  (typeof ESteamNetworkingSocketsCipher)[keyof typeof ESteamNetworkingSocketsCipher];

export interface CMsgSteamDatagramSessionCryptInfo {
  key_type?: CMsgSteamDatagramSessionCryptInfo.EKeyType;
  key_data?: Buffer;
  nonce?: Long;
  protocol_version?: number;
  ciphers?: ESteamNetworkingSocketsCipher[];
}

export namespace CMsgSteamDatagramSessionCryptInfo {
  export const EKeyType = {
    INVALID: 0,
    CURVE25519: 1,
  } as const;

  export type EKeyType = (typeof EKeyType)[keyof typeof EKeyType];
}

export interface CMsgSteamDatagramSessionCryptInfoSigned {
  info?: Buffer;
  signature?: Buffer;
}

export interface CMsgSteamDatagramDiagnostic {
  severity?: number;
  text?: string;
}

export interface CMsgSteamDatagramLinkInstantaneousStats {
  out_packets_per_sec_x10?: number;
  out_bytes_per_sec?: number;
  in_packets_per_sec_x10?: number;
  in_bytes_per_sec?: number;
  ping_ms?: number;
  packets_dropped_pct?: number;
  packets_weird_sequence_pct?: number;
  peak_jitter_usec?: number;
}

export interface CMsgSteamDatagramLinkLifetimeStats {
  connected_seconds?: number;
  packets_sent?: Long;
  kb_sent?: Long;
  packets_recv?: Long;
  kb_recv?: Long;
  packets_recv_sequenced?: Long;
  packets_recv_dropped?: Long;
  packets_recv_out_of_order?: Long;
  packets_recv_out_of_order_corrected?: Long;
  packets_recv_duplicate?: Long;
  packets_recv_lurch?: Long;
  multipath_packets_recv_sequenced?: Long[];
  multipath_packets_recv_later?: Long[];
  multipath_send_enabled?: number;
  quality_histogram_100?: number;
  quality_histogram_99?: number;
  quality_histogram_97?: number;
  quality_histogram_95?: number;
  quality_histogram_90?: number;
  quality_histogram_75?: number;
  quality_histogram_50?: number;
  quality_histogram_1?: number;
  quality_histogram_dead?: number;
  quality_ntile_2nd?: number;
  quality_ntile_5th?: number;
  quality_ntile_25th?: number;
  quality_ntile_50th?: number;
  ping_histogram_25?: number;
  ping_histogram_50?: number;
  ping_histogram_75?: number;
  ping_histogram_100?: number;
  ping_histogram_125?: number;
  ping_histogram_150?: number;
  ping_histogram_200?: number;
  ping_histogram_300?: number;
  ping_histogram_max?: number;
  ping_ntile_5th?: number;
  ping_ntile_50th?: number;
  ping_ntile_75th?: number;
  ping_ntile_95th?: number;
  ping_ntile_98th?: number;
  jitter_histogram_negligible?: number;
  jitter_histogram_1?: number;
  jitter_histogram_2?: number;
  jitter_histogram_5?: number;
  jitter_histogram_10?: number;
  jitter_histogram_20?: number;
}

export interface CMsgSteamDatagramConnectionQuality {
  instantaneous?: CMsgSteamDatagramLinkInstantaneousStats;
  lifetime?: CMsgSteamDatagramLinkLifetimeStats;
}

export interface CMsgICECandidate {
  candidate?: string;
}

export interface CMsgICERendezvous {
  auth?: CMsgICERendezvous.Auth;
  add_candidate?: CMsgICECandidate;
}

export namespace CMsgICERendezvous {
  export interface Auth {
    pwd_frag?: string;
  }
}

export interface CMsgSteamNetworkingP2PRendezvous {
  from_identity?: string;
  from_connection_id?: number;
  to_identity?: string;
  to_connection_id?: number;
  sdr_routes?: Buffer;
  ack_peer_routes_revision?: number;
  ice_enabled?: boolean;
  hosted_server_ticket?: Buffer;
  connect_request?: CMsgSteamNetworkingP2PRendezvous.ConnectRequest;
  connect_ok?: CMsgSteamNetworkingP2PRendezvous.ConnectOK;
  connection_closed?: CMsgSteamNetworkingP2PRendezvous.ConnectionClosed;
  ack_reliable_msg?: number;
  first_reliable_msg?: number;
  reliable_messages?: CMsgSteamNetworkingP2PRendezvous.ReliableMessage[];
  application_messages?: CMsgSteamNetworkingP2PRendezvous.ApplicationMessage[];
}

export namespace CMsgSteamNetworkingP2PRendezvous {
  export interface ConnectRequest {
    crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
    cert?: CMsgSteamDatagramCertificateSigned;
    to_virtual_port?: number;
    from_virtual_port?: number;
    from_fakeip?: string;
  }

  export interface ConnectOK {
    crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
    cert?: CMsgSteamDatagramCertificateSigned;
  }

  export interface ConnectionClosed {
    debug?: string;
    reason_code?: number;
  }

  export interface ReliableMessage {
    ice?: CMsgICERendezvous;
  }

  export interface ApplicationMessage {
    data?: Buffer;
    msg_num?: Long;
    flags?: number;
    lane_idx?: number;
  }
}

export interface CMsgSteamNetworkingICESessionSummary {
  failure_reason_code?: number;
  local_candidate_types?: number;
  remote_candidate_types?: number;
  initial_route_kind?: number;
  initial_ping?: number;
  initial_score?: number;
  negotiation_ms?: number;
  best_route_kind?: number;
  best_ping?: number;
  best_score?: number;
  best_time?: number;
  selected_seconds?: number;
  user_settings?: number;
  ice_enable_var?: number;
  local_candidate_types_allowed?: number;
}
