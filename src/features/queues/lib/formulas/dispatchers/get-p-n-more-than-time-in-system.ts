// Get Probability of More Than N Time In System Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNMoreThanTimeInSystem as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetPNMoreThanTimeInSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
// Get Probability of More Than N Time In System Main Function
export function GetPNMoreThanTimeInSystem(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
  p0CustomersInSystem?: number,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(systemUtilFactor, params, settings);
    case selectedModel === MODELS_IDS.mms_fifo_inf_inf && p0CustomersInSystem !== undefined:
      return MMS_FIFO_INF_INF(systemUtilFactor, p0CustomersInSystem, params, settings);
    default:
      return undefined;
  }
}
