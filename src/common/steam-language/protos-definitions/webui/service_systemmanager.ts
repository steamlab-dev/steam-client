/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CSystemManager_Hibernate_Request = Record<string, never>;

export type CSystemManager_Hibernate_Response = Record<string, never>;

export interface CSystemManager_WriteFile_Request {
  path?: string;
  data?: Buffer;
}

export type CSystemManager_WriteFile_Response = Record<string, never>;

export abstract class SystemManagerService {
  abstract Hibernate(
    request: CSystemManager_Hibernate_Request,
  ): Promise<CSystemManager_Hibernate_Response>;
  abstract WriteFile(
    request: CSystemManager_WriteFile_Request,
  ): Promise<CSystemManager_WriteFile_Response>;
}
