// Get Optimal Production Lot Size Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Optimal Production Lot Size
export function GetOptimalProductionLotSize(params: FormVariables, settings: FormVariables) {
  const { demand, launchCost, inventoryHoldingCost, constantOutputRatio, deficitCost } = params;
  const { decimals } = settings;
  const FIRST_PART = (2 * demand * launchCost) / inventoryHoldingCost;
  const SECOND_PART = 1 / (1 - demand / constantOutputRatio);
  const THIRD_PART = (inventoryHoldingCost + deficitCost) / deficitCost;
  const RESULT = Math.sqrt(FIRST_PART * SECOND_PART * THIRD_PART);
  return GetFloatResult(RESULT, decimals);
}
