// Get Cycle Time Length Ratio Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Cycle Time Length Ratio
export function GetCycleTimeLengthRatio(
  frequencyBetweenTwoProductionRuns: number,
  params: FormVariables,
) {
  const { replenishmentTime } = params;
  const RESULT = replenishmentTime / frequencyBetweenTwoProductionRuns;
  return GetFloatResult(RESULT, 0);
}
