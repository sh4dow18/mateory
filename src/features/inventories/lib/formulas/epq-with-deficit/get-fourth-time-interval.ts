// Get Fourth Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Fourth Time Interval
export function GetFourthTimeInterval(
  maxDeficit: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { constantOutputRatio, demand } = params;
  const { decimals } = settings;
  const RESULT = maxDeficit / (constantOutputRatio - demand);
  return GetFloatResult(RESULT, decimals);
}
