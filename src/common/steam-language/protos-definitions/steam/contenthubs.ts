/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const EContentHubDiscountFilterType = {
  k_EContentHubDiscountFilterType_None: 0,
  k_EContentHubDiscountFilterType_DiscountsOnly: 1,
  k_EContentHubDiscountFilterType_PrioritizeDiscounts: 2,
} as const;

export type EContentHubDiscountFilterType =
  (typeof EContentHubDiscountFilterType)[keyof typeof EContentHubDiscountFilterType];

export interface CStorePageFilter {
  sale_filter?: CStorePageFilter.SalePageFilter;
  content_hub_filter?: CStorePageFilter.ContentHubFilter;
  store_filters?: CStorePageFilter.StoreFilter[];
}

export namespace CStorePageFilter {
  export interface SalePageFilter {
    sale_tagid?: number;
    creator_clan_account_id?: number;
  }

  export interface ContentHubFilter {
    hub_type?: string;
    hub_category?: string;
    hub_tagid?: number;
    discount_filter?: EContentHubDiscountFilterType;
  }

  export namespace ContentHubFilter {
    export interface OptInInfo {
      name?: string;
      optin_tagid?: number;
      prune_tagid?: number;
      optin_only?: boolean;
    }
  }
  export interface StoreFilter {
    filter_json?: string;
    cache_key?: string;
  }
}
