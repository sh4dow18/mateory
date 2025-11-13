// Get Max Deficit Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Max Deficit
export function GetMaxDeficit(params: FormVariables, settings: FormVariables) {
  const { demand, inventoryHoldingCost, launchCost, constantOutputRatio, deficitCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * demand * inventoryHoldingCost * launchCost;
  const SECOND_PART = 1 - demand / constantOutputRatio;
  const THIRD_PART = deficitCost * (inventoryHoldingCost + deficitCost);
  const RESULT = Math.sqrt((FIRST_PART * SECOND_PART) / THIRD_PART);
  return GetFloatResult(RESULT, decimals);
}
