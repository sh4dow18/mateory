// Get Fourth Time Interval Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetFourthTimeInterval as EPQWithDeficit } from "../epq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get Fourth Time Interval
export function GetFourthTimeInterval(
  selectedModel: string,
  maxDeficit: number | undefined,
  params: FormVariables,
  settings: FormVariables,
) {
  if (selectedModel === MODELS_IDS.epqWithDeficit && typeof maxDeficit === "number") {
    return EPQWithDeficit(maxDeficit, params, settings);
  }
  return undefined;
}
