// Get First Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the First Time Interval
export function GetFirstTimeInterval(
  maxInventoryLevel: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { demand, constantOutputRatio } = params;
  const { decimals } = settings;
  const RESULT = maxInventoryLevel / (constantOutputRatio - demand);
  return GetFloatResult(RESULT, decimals);
}
