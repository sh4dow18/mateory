// Get Max Deficit Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetMaxDeficit as EPQWithDeficit } from "../epq-with-deficit";
import { GetMaxDeficit as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Max Deficit
export function GetMaxDeficit(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.epqWithDeficit:
      return EPQWithDeficit(params, settings);
    case MODELS_IDS.eoqWithDeficit:
      return EOQWithDeficit(params, settings);
    default:
      return undefined;
  }
}
