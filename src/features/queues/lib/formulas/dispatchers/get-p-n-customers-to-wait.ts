// Get Probability that the client will have to wait Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNCustomerHaveToWait as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
// Get Probability that the client will have to wait Dispatcher Main Function
export function GetPNCustomerHaveToWait(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
  p0CustomersinSystem?: number,
) {
  if (selectedModel === MODELS_IDS.mms_fifo_inf_inf && p0CustomersinSystem !== undefined) {
    return MMS_FIFO_INF_INF(systemUtilFactor, p0CustomersinSystem, params, settings);
  }
  return undefined;
}
