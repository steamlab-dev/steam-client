/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CPhysicalGoods_CheckInventoryAvailableByPackage_Request {
  packageid?: number;
  country_code?: string;
}

export interface CPhysicalGoods_CheckInventoryAvailableByPackage_Response {
  inventory_available?: boolean;
  high_pending_orders?: boolean;
}

export abstract class PhysicalGoodsService {
  abstract CheckInventoryAvailableByPackage(
    request: CPhysicalGoods_CheckInventoryAvailableByPackage_Request,
  ): Promise<CPhysicalGoods_CheckInventoryAvailableByPackage_Response>;
}
