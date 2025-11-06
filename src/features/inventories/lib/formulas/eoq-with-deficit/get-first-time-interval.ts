// Get First Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the First Time Interval
export function GetFirstTimeInterval(params: FormVariables, settings: FormVariables) {
  const { demand, deficitCost, launchCost, inventoryHoldingCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * deficitCost * launchCost;
  const SECOND_PART = demand * inventoryHoldingCost * (inventoryHoldingCost + deficitCost);
  const RESULT = Math.sqrt(FIRST_PART / SECOND_PART);
  return GetFloatResult(RESULT, decimals);
}
