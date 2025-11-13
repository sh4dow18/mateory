// Get Total Inventory Holding Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Inventory Holding Cost
export function GetTotalInventoryHoldingCost(
  maxInventoryLevel: number,
  firstTimeInterval: number,
  secondTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { inventoryHoldingCost } = params;
  const { decimals } = settings;
  const FIRST_PART = inventoryHoldingCost * maxInventoryLevel;
  const SECOND_PART = firstTimeInterval + secondTimeInterval;
  const RESULT = (FIRST_PART * SECOND_PART) / 2;
  return GetFloatResult(RESULT, decimals);
}
