// Get Third Time Interval Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetThirdTimeInterval as EPQWithoutDeficit } from "../epq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Third Time Interval
export function GetThirdTimeInterval(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
) {
  if (selectedModel === MODELS_IDS.epqWithDeficit) {
    return EPQWithoutDeficit(params, settings);
  }
  return undefined;
}
