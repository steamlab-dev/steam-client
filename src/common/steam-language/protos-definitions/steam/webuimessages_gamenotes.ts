/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CGameNotes_UploadImage_Request {
  file_prefix?: string;
  mime_type?: string;
  data?: Buffer;
}

export interface CGameNotes_UploadImage_Response {
  filename?: string;
}

export abstract class GameNotesService {
  abstract UploadImage(
    request: CGameNotes_UploadImage_Request,
  ): Promise<CGameNotes_UploadImage_Response>;
}
