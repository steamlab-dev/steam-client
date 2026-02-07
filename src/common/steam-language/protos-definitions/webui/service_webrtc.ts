/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CWebRTC_WebRTCSessionConnected_Notification {
  ssrc?: number;
  client_ip?: number;
  client_port?: number;
  server_ip?: number;
  server_port?: number;
}

export interface CWebRTC_WebRTCUpdateRemoteDescription_Notification {
  remote_description?: string;
  remote_description_version?: Long;
  ssrcs_to_accountids?: CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping[];
}

export interface CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping {
  ssrc?: number;
  accountid?: number;
}

export interface CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request {
  ip_webrtc_server?: number;
  port_webrtc_server?: number;
  ip_webrtc_session_client?: number;
  port_webrtc_session_client?: number;
  remote_description_version?: Long;
}

export type CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Response = Record<string, never>;

export interface CWebRTCClient_InitiateWebRTCConnection_Request {
  sdp?: string;
  browser_name?: string;
  browser_version?: string;
}

export interface CWebRTCClient_InitiateWebRTCConnection_Response {
  remote_description?: string;
}

export interface CWebRTCClient_UpdateWebRTCConnection_Request {
  ip_webrtc_server?: number;
  port_webrtc_server?: number;
  ip_webrtc_session_client?: number;
  port_webrtc_session_client?: number;
  sdp?: string;
}

export interface CWebRTCClient_UpdateWebRTCConnection_Response {
  remote_description?: string;
}

export abstract class WebRTCClientService {
  abstract AcknowledgeUpdatedRemoteDescription(
    request: CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request,
  ): Promise<CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Response>;
  abstract InitiateWebRTCConnection(
    request: CWebRTCClient_InitiateWebRTCConnection_Request,
  ): Promise<CWebRTCClient_InitiateWebRTCConnection_Response>;
  abstract UpdateWebRTCConnection(
    request: CWebRTCClient_UpdateWebRTCConnection_Request,
  ): Promise<CWebRTCClient_UpdateWebRTCConnection_Response>;
}

export abstract class WebRTCClientNotificationsService {
  abstract NotifyWebRTCSessionConnected(
    request: CWebRTC_WebRTCSessionConnected_Notification,
  ): Promise<void>;
  abstract NotifyWebRTCUpdateRemoteDescription(
    request: CWebRTC_WebRTCUpdateRemoteDescription_Notification,
  ): Promise<void>;
}
