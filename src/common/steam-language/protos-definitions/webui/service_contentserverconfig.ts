/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CContentServerConfig_GetManifestRequestCode_Request {
  depot_id?: number;
  manifest_id?: Long;
}

export interface CContentServerConfig_GetManifestRequestCode_Response {
  manifest_request_code?: Long;
}

export abstract class ContentServerConfigService {
  abstract GetManifestRequestCode(
    request: CContentServerConfig_GetManifestRequestCode_Request,
  ): Promise<CContentServerConfig_GetManifestRequestCode_Response>;
}
