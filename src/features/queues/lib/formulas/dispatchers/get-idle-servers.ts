// Get Probability of Queue Full Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetIdleServers as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
// Get Probability of Queue Full Dispatcher Main Function
export function GetIdleServers(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  if (selectedModel === MODELS_IDS.mms_fifo_inf_inf) {
    return MMS_FIFO_INF_INF(systemUtilFactor, params, settings);
  }
  return undefined;
}
