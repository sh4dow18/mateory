// Get Second Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Second Time Interval
export function GetSecondTimeInterval(params: FormVariables, settings: FormVariables) {
  const { launchCost, deficitCost, demand, constantOutputRatio, inventoryHoldingCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * launchCost * deficitCost;
  const SECOND_PART = 1 - demand / constantOutputRatio;
  const THIRD_PART = demand * inventoryHoldingCost * (inventoryHoldingCost + deficitCost);
  const RESULT = Math.sqrt((FIRST_PART * SECOND_PART) / THIRD_PART);
  return GetFloatResult(RESULT, decimals);
}
