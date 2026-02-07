/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { Offline_Ticket } from "./offline_ticket";

export interface COffline_GetOfflineLogonTicket_Request {
  priority?: number;
  perform_encryption?: boolean;
}

export interface COffline_GetOfflineLogonTicket_Response {
  serialized_ticket?: Buffer;
  signature?: Buffer;
  encrypted_ticket?: Offline_Ticket;
}

export type COffline_GetUnsignedOfflineLogonTicket_Request = Record<string, never>;

export interface COffline_OfflineLogonTicket {
  accountid?: number;
  rtime32_creation_time?: number;
}

export interface COffline_GetUnsignedOfflineLogonTicket_Response {
  ticket?: COffline_OfflineLogonTicket;
}

export abstract class OfflineService {
  abstract GetOfflineLogonTicket(
    request: COffline_GetOfflineLogonTicket_Request,
  ): Promise<COffline_GetOfflineLogonTicket_Response>;
  abstract GetUnsignedOfflineLogonTicket(
    request: COffline_GetUnsignedOfflineLogonTicket_Request,
  ): Promise<COffline_GetUnsignedOfflineLogonTicket_Response>;
}
