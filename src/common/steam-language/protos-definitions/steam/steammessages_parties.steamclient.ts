/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CParties_JoinParty_Request {
  steamid?: bigint;
  beacon_id?: bigint;
}

export interface CParties_JoinParty_Response {
  beacon_id?: bigint;
  connect_string?: string;
}

export interface CParties_BeaconLocation {
  location_type?: number;
  location_id?: bigint;
}

export interface CParties_CreateBeacon_Request {
  appid?: number;
  num_open_slots?: number;
  locations?: CParties_BeaconLocation[];
  connect_string?: string;
  metadata?: string;
}

export interface CParties_CreateBeacon_Response {
  beacon_id?: bigint;
}

export interface CParties_OnReservationCompleted_Request {
  beacon_id?: bigint;
  user_steamid?: bigint;
}

export interface CParties_OnReservationCompleted_Response {
  beacon_id?: bigint;
}

export interface CParties_CancelReservation_Request {
  beacon_id?: bigint;
  user_steamid?: bigint;
}

export interface CParties_CancelReservation_Response {
  beacon_id?: bigint;
}

export interface CParties_ChangeNumOpenSlots_Request {
  beacon_id?: bigint;
  num_open_slots?: number;
}

export interface CParties_ChangeNumOpenSlots_Response {
  beacon_id?: bigint;
}

export interface CParties_DestroyBeacon_Request {
  beacon_id?: bigint;
}

export interface CParties_DestroyBeacon_Response {
  beacon_id?: bigint;
}

export abstract class PartiesService {
  abstract JoinParty(request: CParties_JoinParty_Request): Promise<CParties_JoinParty_Response>;
  abstract CreateBeacon(
    request: CParties_CreateBeacon_Request,
  ): Promise<CParties_CreateBeacon_Response>;
  abstract OnReservationCompleted(
    request: CParties_OnReservationCompleted_Request,
  ): Promise<CParties_OnReservationCompleted_Response>;
  abstract CancelReservation(
    request: CParties_CancelReservation_Request,
  ): Promise<CParties_CancelReservation_Response>;
  abstract ChangeNumOpenSlots(
    request: CParties_ChangeNumOpenSlots_Request,
  ): Promise<CParties_ChangeNumOpenSlots_Response>;
  abstract DestroyBeacon(
    request: CParties_DestroyBeacon_Request,
  ): Promise<CParties_DestroyBeacon_Response>;
}
