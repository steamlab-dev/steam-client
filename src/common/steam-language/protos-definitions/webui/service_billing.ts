/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CBilling_GetRecurringSubscriptionsCount_Request = Record<string, never>;

export interface CBilling_GetRecurringSubscriptionsCount_Response {
  active_subscriptions_count?: number;
  inactive_subscriptions_count?: number;
}

export abstract class BillingService {
  abstract GetRecurringSubscriptionsCount(
    request: CBilling_GetRecurringSubscriptionsCount_Request,
  ): Promise<CBilling_GetRecurringSubscriptionsCount_Response>;
}
