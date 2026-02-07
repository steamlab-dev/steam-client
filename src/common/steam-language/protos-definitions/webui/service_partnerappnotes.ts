/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CPartnerAppNotes_CreateNotes_Request {
  appid?: number;
  partner_notes?: string;
  admin_notes?: string;
  partner_readonly_notes?: string;
}

export type CPartnerAppNotes_CreateNotes_Response = Record<string, never>;

export interface CPartnerAppNotes_GetMultipleNotes_Request {
  appids?: number[];
}

export interface CPartnerAppNotes_GetMultipleNotes_Response {
  notes?: CPartnerAppNotes_GetMultipleNotes_Response_Container[];
}

export interface CPartnerAppNotes_GetMultipleNotes_Response_Container {
  appid?: number;
  partner_notes?: string;
  admin_notes?: string;
  partner_readonly_notes?: string;
}

export interface CPartnerAppNotes_GetNotes_Request {
  appid?: number;
}

export interface CPartnerAppNotes_GetNotes_Response {
  partner_notes?: string;
  admin_notes?: string;
  partner_readonly_notes?: string;
}

export interface CPartnerAppNotes_UpdateNotes_Request {
  appid?: number;
  partner_notes?: string;
  admin_notes?: string;
  partner_readonly_notes?: string;
}

export type CPartnerAppNotes_UpdateNotes_Response = Record<string, never>;

export abstract class PartnerAppNotesService {
  abstract CreateNotes(
    request: CPartnerAppNotes_CreateNotes_Request,
  ): Promise<CPartnerAppNotes_CreateNotes_Response>;
  abstract GetMultipleNotes(
    request: CPartnerAppNotes_GetMultipleNotes_Request,
  ): Promise<CPartnerAppNotes_GetMultipleNotes_Response>;
  abstract GetNotes(
    request: CPartnerAppNotes_GetNotes_Request,
  ): Promise<CPartnerAppNotes_GetNotes_Response>;
  abstract UpdateNotes(
    request: CPartnerAppNotes_UpdateNotes_Request,
  ): Promise<CPartnerAppNotes_UpdateNotes_Response>;
}
