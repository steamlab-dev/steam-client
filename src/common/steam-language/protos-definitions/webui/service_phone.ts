/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPhone_AddPhoneToAccount_Response {
  success?: boolean;
  phone_number_type?: number;
}

export interface CPhone_ConfirmAddPhoneToAccount_Request {
  steamid?: Long;
  stoken?: string;
}

export type CPhone_IsAccountWaitingForEmailConfirmation_Request = Record<string, never>;

export interface CPhone_IsAccountWaitingForEmailConfirmation_Response {
  awaiting_email_confirmation?: boolean;
  seconds_to_wait?: number;
}

export interface CPhone_SendPhoneVerificationCode_Request {
  language?: number;
}

export type CPhone_SendPhoneVerificationCode_Response = Record<string, never>;

export interface CPhone_SetAccountPhoneNumber_Request {
  phone_number?: string;
  phone_country_code?: string;
}

export interface CPhone_SetAccountPhoneNumber_Response {
  confirmation_email_address?: string;
  phone_number_formatted?: string;
}

export interface CPhone_VerifyAccountPhoneWithCode_Request {
  code?: string;
}

export type CPhone_VerifyAccountPhoneWithCode_Response = Record<string, never>;

export abstract class PhoneService {
  abstract ConfirmAddPhoneToAccount(
    request: CPhone_ConfirmAddPhoneToAccount_Request,
  ): Promise<CPhone_AddPhoneToAccount_Response>;
  abstract IsAccountWaitingForEmailConfirmation(
    request: CPhone_IsAccountWaitingForEmailConfirmation_Request,
  ): Promise<CPhone_IsAccountWaitingForEmailConfirmation_Response>;
  abstract SendPhoneVerificationCode(
    request: CPhone_SendPhoneVerificationCode_Request,
  ): Promise<CPhone_SendPhoneVerificationCode_Response>;
  abstract SetAccountPhoneNumber(
    request: CPhone_SetAccountPhoneNumber_Request,
  ): Promise<CPhone_SetAccountPhoneNumber_Response>;
  abstract VerifyAccountPhoneWithCode(
    request: CPhone_VerifyAccountPhoneWithCode_Request,
  ): Promise<CPhone_VerifyAccountPhoneWithCode_Response>;
}
