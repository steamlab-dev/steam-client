/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface COAuthToken_ImplicitGrantNoPrompt_Request {
  clientid?: string;
}

export interface COAuthToken_ImplicitGrantNoPrompt_Response {
  access_token?: string;
  redirect_uri?: string;
}

export abstract class OAuthTokenService {
  abstract ImplicitGrantNoPrompt(
    request: COAuthToken_ImplicitGrantNoPrompt_Request,
  ): Promise<COAuthToken_ImplicitGrantNoPrompt_Response>;
}
