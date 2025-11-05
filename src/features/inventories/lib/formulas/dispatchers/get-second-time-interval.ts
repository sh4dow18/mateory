// Get Second Time Interval Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetSecondTimeInterval as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetSecondTimeInterval as EPQWithDeficit } from "../epq-with-deficit";
import { GetSecondTimeInterval as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Second Time Interval
export function GetSecondTimeInterval(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.epqWithoutDeficit:
      return EPQWithoutDeficit(params, settings);
    case MODELS_IDS.epqWithDeficit:
      return EPQWithDeficit(params, settings);
    case MODELS_IDS.eoqWithDeficit:
      return EOQWithDeficit(params, settings);
    default:
      return undefined;
  }
}
