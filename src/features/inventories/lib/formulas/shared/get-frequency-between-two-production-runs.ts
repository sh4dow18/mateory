// Get Frequency Between Two Production Runs Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Frequency Between Two Production Runs
export function GetFrequencyBetweenTwoProductionRuns(
  optimalProductionLotSize: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { demand } = params;
  const { decimals } = settings;
  const RESULT = optimalProductionLotSize / demand;
  return GetFloatResult(RESULT, decimals);
}
