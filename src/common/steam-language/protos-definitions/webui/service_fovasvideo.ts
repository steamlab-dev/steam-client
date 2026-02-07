/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CFovasVideo_ClientGetOPFSettings_Request {
  app_id?: number;
  client_cellid?: number;
}

export interface CFovasVideo_ClientGetOPFSettings_Response {
  app_id?: number;
  opf_settings?: string;
}

export abstract class FovasVideoService {
  abstract ClientGetOPFSettings(
    request: CFovasVideo_ClientGetOPFSettings_Request,
  ): Promise<CFovasVideo_ClientGetOPFSettings_Response>;
}
