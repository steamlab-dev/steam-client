import Long from "long";

export const SteamProtoConstants = {
  JobNone: Long.fromString("18446744073709551615", true),
  ProtoMask: 0x80000000,
  ProtocolVersion: 65581,
  Win11: 20,
} as const;

export default SteamProtoConstants;
