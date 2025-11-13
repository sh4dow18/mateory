// Get Probability of More Than N Time In Queue Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNMoreThanTimeInQueue as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
// Get Probability of More Than N Time In Queue Main Function
export function GetPNMoreThanTimeInQueue(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  if (selectedModel === MODELS_IDS.mm1_fifo_inf_inf && systemUtilFactor !== undefined) {
    return MM1_FIFO_INF_INF(systemUtilFactor, params, settings);
  }
  return undefined;
}
