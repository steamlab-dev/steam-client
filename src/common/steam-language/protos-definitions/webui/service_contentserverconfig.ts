/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CContentServerConfig_GetManifestRequestCode_Request {
  depot_id?: number;
  manifest_id?: bigint;
}

export interface CContentServerConfig_GetManifestRequestCode_Response {
  manifest_request_code?: bigint;
}

export abstract class ContentServerConfigService {
  abstract GetManifestRequestCode(
    request: CContentServerConfig_GetManifestRequestCode_Request,
  ): Promise<CContentServerConfig_GetManifestRequestCode_Response>;
}
