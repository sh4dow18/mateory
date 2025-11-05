// Get Second Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Second Time Interval
export function GetSecondTimeInterval(params: FormVariables, settings: FormVariables) {
  const { launchCost, inventoryHoldingCost, demand, deficitCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * launchCost * inventoryHoldingCost;
  const SECOND_PART = demand * deficitCost * (inventoryHoldingCost + deficitCost);
  const RESULT = Math.sqrt(FIRST_PART / SECOND_PART);
  return GetFloatResult(RESULT, decimals);
}
