// Get Total Inventory Holding Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Inventory Holding Cost
export function GetTotalInventoryHoldingCost(
  maxInventoryLevel: number,
  firstTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { inventoryHoldingCost } = params;
  const { decimals } = settings;
  const RESULT = (inventoryHoldingCost * maxInventoryLevel * firstTimeInterval) / 2;
  return GetFloatResult(RESULT, decimals);
}
