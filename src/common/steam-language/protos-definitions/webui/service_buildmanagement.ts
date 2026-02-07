/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CBuildManagement_SetAppBuildLiveConfirmed_Request {
  appid?: number;
  buildid?: number;
  betakey?: string;
  desc?: string;
}

export type CBuildManagement_SetAppBuildLiveConfirmed_Response = Record<string, never>;

export abstract class BuildManagementService {
  abstract SetAppBuildLiveConfirmed(
    request: CBuildManagement_SetAppBuildLiveConfirmed_Request,
  ): Promise<CBuildManagement_SetAppBuildLiveConfirmed_Response>;
}
