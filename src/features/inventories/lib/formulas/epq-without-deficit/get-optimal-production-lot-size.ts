// Get Optimal Production Lot Size Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Optimal Production Lot Size
export function GetOptimalProductionLotSize(params: FormVariables, settings: FormVariables) {
  const { demand, launchCost, inventoryHoldingCost, constantOutputRatio } = params;
  const { decimals } = settings;
  const FIRST_PART = (2 * demand * launchCost) / inventoryHoldingCost;
  const SECOND_PART = 1 / (1 - demand / constantOutputRatio);
  const RESULT = FIRST_PART * SECOND_PART;
  return GetFloatResult(Math.sqrt(RESULT), decimals);
}
