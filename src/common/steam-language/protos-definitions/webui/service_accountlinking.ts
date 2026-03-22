/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CAccountLinking_GetLinkedAccountInfo_Request {
  account_type?: number;
  account_id?: bigint;
  filter?: number;
  return_access_token?: boolean;
}

export interface CAccountLinking_GetLinkedAccountInfo_Response {
  external_accounts?: CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response[];
}

export interface CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response {
  external_type?: number;
  external_id?: string;
  external_user_name?: string;
  external_url?: string;
  access_token?: string;
  access_token_secret?: string;
  is_valid?: boolean;
}

export abstract class AccountLinkingService {
  abstract GetLinkedAccountInfo(
    request: CAccountLinking_GetLinkedAccountInfo_Request,
  ): Promise<CAccountLinking_GetLinkedAccountInfo_Response>;
}
