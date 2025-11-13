// Models Config Requirements
import { GetDisabledModels, Model, ModelFilterMode } from "@/shared/config/models";
// Models Ids Constantants Object
export const MODELS_IDS = {
  epqWithoutDeficit: "epq-without-deficit",
  epqWithDeficit: "epq-with-deficit",
  eoqWithoutDeficit: "eoq-without-deficit",
  eoqWithDeficit: "eoq-with-deficit",
};
// Models Names Record
const MODELS_NAMES: Record<string, string> = {
  [MODELS_IDS.epqWithoutDeficit]: "EPQ sin Déficit",
  [MODELS_IDS.epqWithDeficit]: "EPQ con Déficit",
  [MODELS_IDS.eoqWithoutDeficit]: "EOQ sin Déficit",
  [MODELS_IDS.eoqWithDeficit]: "EOQ con Déficit",
};
// Get Disabled Inventory Models
export const GetDisabledInventoryModels = (filter: string, mode: ModelFilterMode) => {
  return GetDisabledModels(MODELS_LIST, filter, mode);
};
// Inventories Models List
export const MODELS_LIST: Model[] = Object.values(MODELS_IDS).map((model) => ({
  id: model,
  name: MODELS_NAMES[model],
}));
