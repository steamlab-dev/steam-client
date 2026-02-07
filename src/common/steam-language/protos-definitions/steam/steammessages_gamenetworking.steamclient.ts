/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CGameNetworking_AllocateFakeIP_Request {
  app_id?: number;
  num_fake_ports?: number;
}

export interface CGameNetworking_AllocateFakeIP_Response {
  fake_ip?: number;
  fake_ports?: number[];
}

export interface CGameNetworking_ReleaseFakeIP_Notification {
  app_id?: number;
  fake_ip?: number;
  fake_ports?: number[];
}

export abstract class GameNetworkingService {
  abstract AllocateFakeIP(
    request: CGameNetworking_AllocateFakeIP_Request,
  ): Promise<CGameNetworking_AllocateFakeIP_Response>;
  abstract NotifyReleaseFakeIP(request: CGameNetworking_ReleaseFakeIP_Notification): Promise<void>;
}
