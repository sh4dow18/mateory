// Get Second Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Second Time Interval
export function GetSecondTimeInterval(params: FormVariables, settings: FormVariables) {
  const { launchCost, demand, constantOutputRatio, inventoryHoldingCost } = params;
  const { decimals } = settings;
  const FISRT_PART = 2 * launchCost;
  const SECOND_PART = 1 - demand / constantOutputRatio;
  const THIRD_PART = demand * inventoryHoldingCost;
  const RESULT = Math.sqrt((FISRT_PART * SECOND_PART) / THIRD_PART);
  return GetFloatResult(RESULT, decimals);
}
