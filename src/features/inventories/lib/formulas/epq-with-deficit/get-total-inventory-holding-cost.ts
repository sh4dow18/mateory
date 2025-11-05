// Get Total Inventory Holding Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Inventory Holding Cost
export function GetTotalInventoryHoldingCost(
  maxInventoryLevel: number,
  firstTimeInterval: number,
  secondTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { inventoryHoldingCost } = params;
  const { decimals, currency } = settings;
  const FIRST_PART = inventoryHoldingCost * maxInventoryLevel;
  const SECOND_PART = firstTimeInterval + secondTimeInterval;
  const RESULT = (FIRST_PART * SECOND_PART) / 2;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
