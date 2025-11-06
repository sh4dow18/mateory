// Models Config Requirements
import { GetDisabledModels, Model, ModelFilterMode } from "@/shared/config/models";
// Models Ids Constantants Object
export const MODELS_IDS = {
  epqWithoutDeficit: "epq-without-deficit",
  epqWithDeficit: "epq-with-deficit",
  eoqWithoutDeficit: "eoq-without-deficit",
  eoqWithDeficit: "eoq-with-deficit",
};
// Get Disabled Inventory Models
export const GetDisabledInventoryModels = (filter: string, mode: ModelFilterMode) => {
  return GetDisabledModels(MODELS_LIST, filter, mode);
};
// Inventories Models List
export const MODELS_LIST: Model[] = [
  {
    id: MODELS_IDS.epqWithoutDeficit,
    name: "EPQ sin Déficit",
  },
  {
    id: MODELS_IDS.epqWithDeficit,
    name: "EPQ con Déficit",
  },
  {
    id: MODELS_IDS.eoqWithoutDeficit,
    name: "EOQ sin Déficit",
  },
  {
    id: MODELS_IDS.eoqWithDeficit,
    name: "EOQ con Déficit",
  },
];
