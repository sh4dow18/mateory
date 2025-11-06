// Get Total Inventory Holding Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Inventory Holding Cost
export function GetTotalInventoryHoldingCost(
  maxInventoryLevel: number,
  firstTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { inventoryHoldingCost } = params;
  const { decimals, currency } = settings;
  const RESULT = (inventoryHoldingCost * maxInventoryLevel * firstTimeInterval) / 2;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
