/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const ENetworkDisconnectionReason = {
  NETWORK_DISCONNECT_INVALID: 0,
  NETWORK_DISCONNECT_SHUTDOWN: 1,
  NETWORK_DISCONNECT_DIRECT_CONNECT_RESERVATION: 50,
  NETWORK_DISCONNECT_RECONNECTION: 53,
} as const;

export type ENetworkDisconnectionReason =
  (typeof ENetworkDisconnectionReason)[keyof typeof ENetworkDisconnectionReason];
