// Get Optimal Production Lot Size Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetOptimalProductionLotSize as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetOptimalProductionLotSize as EPQWithDeficit } from "../epq-with-deficit";
import { GetOptimalProductionLotSize as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetOptimalProductionLotSize as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Optimal Production Lot Size
export function GetOptimalProductionLotSize(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.epqWithoutDeficit:
      return EPQWithoutDeficit(params, settings);
    case MODELS_IDS.epqWithDeficit:
      return EPQWithDeficit(params, settings);
    case MODELS_IDS.eoqWithoutDeficit:
      return EOQWithoutDeficit(params, settings);
    case MODELS_IDS.eoqWithDeficit:
      return EOQWithDeficit(params, settings);
    default:
      throw new Error("Modelo no encontrado");
  }
}
