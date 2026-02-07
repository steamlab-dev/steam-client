/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CEconMarket_IsMarketplaceAllowed_Request {
  webcookie?: string;
}

export interface CEconMarket_IsMarketplaceAllowed_Response {
  allowed?: boolean;
  reason?: number;
  allowed_at_time?: number;
  steamguard_required_days?: number;
  forms_requested?: boolean;
  forms_require_verification?: boolean;
  new_device_cooldown_days?: number;
}

export abstract class EconMarketService {
  abstract IsMarketplaceAllowed(
    request: CEconMarket_IsMarketplaceAllowed_Request,
  ): Promise<CEconMarket_IsMarketplaceAllowed_Response>;
}
