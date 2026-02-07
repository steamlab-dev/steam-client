/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CEmbeddedClient_AuthorizeCurrentDevice_Request {
  steamid?: Long;
  appid?: number;
  device_info?: string;
  deviceid?: number;
}

export interface CEmbeddedClient_AuthorizeDevice_Response {
  result?: number;
  token?: CEmbeddedClient_Token;
}

export interface CEmbeddedClient_Token {
  steamid?: Long;
  client_token?: Buffer;
  expiry?: number;
  deviceid?: number;
}

export abstract class EmbeddedClientService {
  abstract AuthorizeCurrentDevice(
    request: CEmbeddedClient_AuthorizeCurrentDevice_Request,
  ): Promise<CEmbeddedClient_AuthorizeDevice_Response>;
}
