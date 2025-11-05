// Get Max Deficit Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Max Deficit
export function GetMaxDeficit(params: FormVariables, settings: FormVariables) {
  const { demand, inventoryHoldingCost, launchCost, deficitCost } = params;
  const { decimals } = settings;
  const FIRST_PART = 2 * demand * inventoryHoldingCost * launchCost;
  const SECOND_PART = deficitCost * (inventoryHoldingCost + deficitCost);
  const RESULT = Math.sqrt(FIRST_PART / SECOND_PART);
  return GetFloatResult(RESULT, decimals);
}
