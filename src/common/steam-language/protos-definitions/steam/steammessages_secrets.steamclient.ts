/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EKeyEscrowUsage = {
  k_EKeyEscrowUsageStreamingDevice: 0,
} as const;

export type EKeyEscrowUsage = (typeof EKeyEscrowUsage)[keyof typeof EKeyEscrowUsage];

export interface CKeyEscrow_Request {
  rsa_oaep_sha_ticket?: Buffer;
  password?: Buffer;
  usage?: EKeyEscrowUsage;
  device_name?: string;
}

export interface CKeyEscrow_Ticket {
  password?: Buffer;
  identifier?: Long;
  payload?: Buffer;
  timestamp?: number;
  usage?: EKeyEscrowUsage;
  device_name?: string;
  device_model?: string;
  device_serial?: string;
  device_provisioning_id?: number;
}

export interface CKeyEscrow_Response {
  ticket?: CKeyEscrow_Ticket;
}

export abstract class SecretsService {
  abstract KeyEscrow(request: CKeyEscrow_Request): Promise<CKeyEscrow_Response>;
}
