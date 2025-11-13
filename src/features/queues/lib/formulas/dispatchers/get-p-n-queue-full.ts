// Get Probability of Queue Full Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNQueueFull as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Probability of Queue Full Dispatcher Main Function
export function GetPNQueueFull(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
  p0ClientsInSystem?: number,
) {
  if (selectedModel === MODELS_IDS.mm1_fifo_k_inf && p0ClientsInSystem !== undefined) {
    return MM1_FIFO_K_INF(systemUtilFactor, p0ClientsInSystem, params, settings);
  }
  return undefined;
}
