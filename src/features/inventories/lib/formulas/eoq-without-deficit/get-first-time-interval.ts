// Get First Time Interval Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the First Time Interval
export function GetFirstTimeInterval(
  timeBetweenTwoProductionRuns: number,
  settings: FormVariables,
) {
  const { decimals } = settings;
  return GetFloatResult(timeBetweenTwoProductionRuns, decimals);
}
