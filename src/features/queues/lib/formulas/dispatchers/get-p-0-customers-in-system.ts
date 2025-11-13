// Get Pprobability of Zero Clients in System Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetP0ClientsinSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetP0ClientsinSystem as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Pprobability of Zero Clients in System Dispatcher Main Function
export function GetP0ClientsinSystem(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.mms_fifo_inf_inf:
      return MMS_FIFO_INF_INF(systemUtilFactor, params, settings);
    case MODELS_IDS.mm1_fifo_k_inf:
      return MM1_FIFO_K_INF(systemUtilFactor, params, settings);
    default:
      return undefined;
  }
}
