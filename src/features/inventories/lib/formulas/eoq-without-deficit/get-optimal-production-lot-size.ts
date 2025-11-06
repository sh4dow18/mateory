// Get Optimal Production Lot Size Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Optimal Production Lot Size
export function GetOptimalProductionLotSize(params: FormVariables, settings: FormVariables) {
  const { demand, launchCost, inventoryHoldingCost } = params;
  const { decimals } = settings;
  const FIRST_PART = (2 * demand * launchCost) / inventoryHoldingCost;
  const RESULT = Math.sqrt(FIRST_PART);
  return GetFloatResult(RESULT, decimals);
}
