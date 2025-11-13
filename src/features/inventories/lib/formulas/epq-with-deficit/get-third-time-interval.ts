// Get Third Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Third Time Interval
export function GetThirdTimeInterval(params: FormVariables, settings: FormVariables) {
  const { inventoryHoldingCost, launchCost, demand, constantOutputRatio, deficitCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * inventoryHoldingCost * launchCost;
  const SECOND_PART = 1 - demand / constantOutputRatio;
  const THIRD_PART = demand * deficitCost;
  const FOURTH_PART = inventoryHoldingCost + deficitCost;
  const RESULT = Math.sqrt((FIRST_PART * SECOND_PART) / (THIRD_PART * FOURTH_PART));
  return GetFloatResult(RESULT, decimals);
}
