// Get First Time Interval Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetFirstTimeInterval as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetFirstTimeInterval as EPQWithDeficit } from "../epq-with-deficit";
import { GetFirstTimeInterval as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetFirstTimeInterval as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get First Time Interval
export function GetFirstTimeInterval(
  selectedModel: string,
  maxInventoryLevel: number,
  timeBetweenTwoProductionRuns: number,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.epqWithoutDeficit:
      return EPQWithoutDeficit(maxInventoryLevel, params, settings);
    case MODELS_IDS.epqWithDeficit:
      return EPQWithDeficit(maxInventoryLevel, params, settings);
    case MODELS_IDS.eoqWithoutDeficit:
      return EOQWithoutDeficit(timeBetweenTwoProductionRuns, settings);
    case MODELS_IDS.eoqWithDeficit:
      return EOQWithDeficit(params, settings);
    default:
      throw new Error("Modelo no Encontrado");
  }
}
