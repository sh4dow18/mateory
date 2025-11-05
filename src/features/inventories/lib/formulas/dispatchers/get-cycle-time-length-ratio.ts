// Get Cycle Time Length Ratio Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetCycleTimeLengthRatio as EOQWithoutDeficit } from "../eoq-without-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
/// Function that allows to get the cycle time length ratio
export function GetCycleTimeLengthRatio(
  selectedModel: string,
  frequencyBetweenTwoProductionRuns: number,
  params: FormVariables,
) {
  if (selectedModel === MODELS_IDS.eoqWithoutDeficit) {
    return EOQWithoutDeficit(frequencyBetweenTwoProductionRuns, params);
  }
  return undefined;
}
