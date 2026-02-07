/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CCloud_GetUploadServerInfo_Request {
  appid?: number;
}

export interface CCloud_GetUploadServerInfo_Response {
  server_url?: string;
}

export interface CCloud_GetFileDetails_Request {
  ugcid?: Long;
  appid?: number;
}

export interface CCloud_UserFile {
  appid?: number;
  ugcid?: Long;
  filename?: string;
  timestamp?: Long;
  file_size?: number;
  url?: string;
  steamid_creator?: Long;
}

export interface CCloud_GetFileDetails_Response {
  details?: CCloud_UserFile;
}

export interface CCloud_EnumerateUserFiles_Request {
  appid?: number;
  extended_details?: boolean;
  count?: number;
  start_index?: number;
}

export interface CCloud_EnumerateUserFiles_Response {
  files?: CCloud_UserFile[];
  total_files?: number;
}

export interface CCloud_Delete_Request {
  filename?: string;
  appid?: number;
}

export type CCloud_Delete_Response = Record<string, never>;

export abstract class CloudService {
  abstract GetUploadServerInfo(
    request: CCloud_GetUploadServerInfo_Request,
  ): Promise<CCloud_GetUploadServerInfo_Response>;
  abstract GetFileDetails(
    request: CCloud_GetFileDetails_Request,
  ): Promise<CCloud_GetFileDetails_Response>;
  abstract EnumerateUserFiles(
    request: CCloud_EnumerateUserFiles_Request,
  ): Promise<CCloud_EnumerateUserFiles_Response>;
  abstract Delete(request: CCloud_Delete_Request): Promise<CCloud_Delete_Response>;
}
