// Models Config Requirements
import { GetDisabledModels, Model, ModelFilterMode } from "@/shared/config/models";
// Models Ids Constantants Object
export const MODELS_IDS = {
  mm1_fifo_inf_inf: "mm1_fifo_inf_inf",
  mms_fifo_inf_inf: "mms_fifo_inf_inf",
  mm1_fifo_k_inf: "mm1_fifo_k_inf",
};
// Models Names Record
const MODELS_NAMES: Record<string, string> = {
  [MODELS_IDS.mm1_fifo_inf_inf]: "M/M/1 : FIFO/∞/∞",
  [MODELS_IDS.mms_fifo_inf_inf]: "M/M/s : FIFO/∞/∞",
  [MODELS_IDS.mm1_fifo_k_inf]: "M/M/1 : FIFO/k/∞",
};
// Get Disabled Queue Models
export const GetDisabledQueueModels = (filter: string, mode: ModelFilterMode) => {
  return GetDisabledModels(MODELS_LIST, filter, mode);
};
// Queues Models List
export const MODELS_LIST: Model[] = Object.values(MODELS_IDS).map((model) => ({
  id: model,
  name: MODELS_NAMES[model],
}));
