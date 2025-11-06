// Get Reorder Point Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetReorderPoint as EOQWithoutDeficit } from "../eoq-without-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Reorder Point
export function GetReorderPoint(
  selectedModel: string,
  optimalProductionLotSize: number,
  frequencyBetweenTwoProductionRuns: number,
  cycleTimeLengthRatio: number | undefined,
  params: FormVariables,
  settings: FormVariables,
) {
  if (selectedModel === MODELS_IDS.eoqWithoutDeficit && typeof cycleTimeLengthRatio === "number") {
    return EOQWithoutDeficit(
      optimalProductionLotSize,
      frequencyBetweenTwoProductionRuns,
      cycleTimeLengthRatio,
      params,
      settings,
    );
  }
  return undefined;
}
