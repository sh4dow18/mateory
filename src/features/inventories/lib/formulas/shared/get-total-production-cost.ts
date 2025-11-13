// Get Total Production Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Production Cost
export function GetTotalProductionCost(
  frequencyBetweenTwoProductionRuns: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { launchCost } = params;
  const { decimals } = settings;
  const RESULT = launchCost * frequencyBetweenTwoProductionRuns;
  return GetFloatResult(RESULT, decimals);
}
