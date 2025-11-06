// Get Time Between Two Production Runs Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Time Between Two Production Runs
export function GetTimeBetweenTwoProductionRuns(
  frequencyBetweenTwoProductionRuns: number,
  settings: FormVariables,
) {
  const { decimals } = settings;
  const RESULT = 1 / frequencyBetweenTwoProductionRuns;
  return GetFloatResult(RESULT, decimals);
}
