// Get Reorder Point Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Reorder Point
export function GetReorderPoint(
  optimalProductionLotSize: number,
  frequencyBetweenTwoProductionRuns: number,
  cycleTimeLengthRatio: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { demand, replenishmentTime } = params;
  const { decimals } = settings;
  let result = replenishmentTime * demand;
  // Check if the Replenishment Time is equal to frequency
  if (replenishmentTime === frequencyBetweenTwoProductionRuns) {
    result = optimalProductionLotSize;
  }
  // Check if the Replenishment Time is bigger than frequency
  else if (replenishmentTime > frequencyBetweenTwoProductionRuns) {
    const FIRST_PART = replenishmentTime * demand;
    const SECOND_PART = cycleTimeLengthRatio * optimalProductionLotSize;
    result = FIRST_PART - SECOND_PART;
  }
  return GetFloatResult(result, decimals);
}
