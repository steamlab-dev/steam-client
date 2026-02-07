/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMsgTest_MessageToClient_Request {
  some_text?: string;
}

export interface CMsgTest_MessageToClient_Response {
  some_text?: string;
}

export interface CMsgTest_NotifyClient_Notification {
  some_text?: string;
}

export interface CMsgTest_MessageToServer_Request {
  some_text?: string;
}

export interface CMsgTest_MessageToServer_Response {
  some_text?: string;
}

export interface CMsgTest_NotifyServer_Notification {
  some_text?: string;
}

export interface CMsgTest_TestClientCall_Request {
  param?: number;
}

export interface CMsgTest_TestClientCall_Response {
  result?: number;
}

export type CMsgTest_NoBody_Request = Record<string, never>;

export interface CMsgTest_CallClient_Response {
  testvalue?: number;
}

export abstract class TestSteamClientService {
  abstract MessageToClient(
    request: CMsgTest_MessageToClient_Request,
  ): Promise<CMsgTest_MessageToClient_Response>;
  abstract NotifyClient(request: CMsgTest_NotifyClient_Notification): Promise<void>;
}

export abstract class TestServerFromClientService {
  abstract MessageToServer(
    request: CMsgTest_MessageToServer_Request,
  ): Promise<CMsgTest_MessageToServer_Response>;
  abstract NotifyServer(request: CMsgTest_NotifyServer_Notification): Promise<void>;
  abstract ClientCallAuthed1(
    request: CMsgTest_TestClientCall_Request,
  ): Promise<CMsgTest_TestClientCall_Response>;
  abstract ClientCallAuthed2(
    request: CMsgTest_TestClientCall_Request,
  ): Promise<CMsgTest_TestClientCall_Response>;
  abstract ClientCallAuthed3(
    request: CMsgTest_TestClientCall_Request,
  ): Promise<CMsgTest_TestClientCall_Response>;
  abstract ClientCallAuthed4(
    request: CMsgTest_TestClientCall_Request,
  ): Promise<CMsgTest_TestClientCall_Response>;
}

export abstract class TestExternalPrivilegeService {
  abstract CallClient(request: CMsgTest_NoBody_Request): Promise<CMsgTest_CallClient_Response>;
}
