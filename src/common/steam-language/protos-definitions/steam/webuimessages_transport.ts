/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export interface CTransportAuth_Authenticate_Request {
  auth_key?: string;
}

export type CTransportAuth_Authenticate_Response = Record<string, never>;

export type CTransportAuth_StartShutdown_Notification = Record<string, never>;

export abstract class TransportAuthService {
  abstract Authenticate(
    request: CTransportAuth_Authenticate_Request,
  ): Promise<CTransportAuth_Authenticate_Response>;
  abstract NotifyStartShutdown(
    request: CTransportAuth_StartShutdown_Notification,
  ): Promise<WebUINoResponse>;
}
