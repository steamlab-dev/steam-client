/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CSiteManagerClient_IncomingClient_Request {
  site_instanceid?: bigint;
  client_steamid?: bigint;
  client_local_ip?: number;
  connection_key?: Buffer;
}

export type CSiteManagerClient_IncomingClient_Response = Record<string, never>;

export interface CSiteLicense_ClientSeatCheckout_Notification {
  appid?: number;
  eresult?: number;
}

export interface CSiteManagerClient_TrackedPayments_Notification {
  site_id?: bigint;
  payments?: CSiteManagerClient_TrackedPayments_Notification.Payment[];
}

export namespace CSiteManagerClient_TrackedPayments_Notification {
  export interface Payment {
    transid?: bigint;
    steamid?: bigint;
    amount?: bigint;
    ecurrency?: number;
    time_created?: number;
    purchase_status?: number;
    machine_name?: string;
    persona_name?: string;
    profile_url?: string;
    avatar_url?: string;
  }
}

export interface CSiteLicense_InitiateAssociation_Request {
  site_steamid?: bigint;
  site_instanceid?: bigint;
  client_local_ip?: number;
}

export interface CSiteLicense_InitiateAssociation_Response {
  connection_key?: Buffer;
}

export interface CSiteLicense_LCSAuthenticate_Request {
  instanceid?: bigint;
}

export interface CSiteLicense_LCSAuthenticate_Response {
  site_id?: bigint;
  site_name?: string;
  new_session?: boolean;
  no_site_licenses?: boolean;
}

export interface CSiteLicense_LCSAssociateUser_Request {
  steamid?: bigint;
  local_ip?: number;
  instanceid?: bigint;
  machine_name?: string;
}

export type CSiteLicense_LCSAssociateUser_Response = Record<string, never>;

export interface CSiteLicense_ClientSeatCheckout_Request {
  steamid?: bigint;
  instanceid?: bigint;
  appid?: number;
}

export type CSiteLicense_ClientSeatCheckout_Response = Record<string, never>;

export interface CSiteLicense_ClientGetAvailableSeats_Request {
  steamid?: bigint;
  instanceid?: bigint;
  appid?: number;
}

export interface CSiteLicense_ClientGetAvailableSeats_Response {
  available_seats?: number;
}

export abstract class SiteManagerClientService {
  abstract IncomingClient(
    request: CSiteManagerClient_IncomingClient_Request,
  ): Promise<CSiteManagerClient_IncomingClient_Response>;
  abstract ClientSeatCheckoutNotification(
    request: CSiteLicense_ClientSeatCheckout_Notification,
  ): Promise<void>;
  abstract TrackedPaymentsNotification(
    request: CSiteManagerClient_TrackedPayments_Notification,
  ): Promise<void>;
}

export abstract class SiteLicenseService {
  abstract InitiateAssociation(
    request: CSiteLicense_InitiateAssociation_Request,
  ): Promise<CSiteLicense_InitiateAssociation_Response>;
  abstract LCSAuthenticate(
    request: CSiteLicense_LCSAuthenticate_Request,
  ): Promise<CSiteLicense_LCSAuthenticate_Response>;
  abstract LCSAssociateUser(
    request: CSiteLicense_LCSAssociateUser_Request,
  ): Promise<CSiteLicense_LCSAssociateUser_Response>;
  abstract ClientSeatCheckout(
    request: CSiteLicense_ClientSeatCheckout_Request,
  ): Promise<CSiteLicense_ClientSeatCheckout_Response>;
  abstract ClientGetAvailableSeats(
    request: CSiteLicense_ClientGetAvailableSeats_Request,
  ): Promise<CSiteLicense_ClientGetAvailableSeats_Response>;
}
