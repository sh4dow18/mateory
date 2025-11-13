// Get System Utilization Factor Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetSystemUtilizationFactor as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetSystemUtilizationFactor as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetSystemUtilizationFactor as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get System Utilization Factor Dispatcher Main Function
export function GetSystemUtilizationFactor(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (selectedModel) {
    case MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(params, settings);
    case MODELS_IDS.mms_fifo_inf_inf:
      return MMS_FIFO_INF_INF(params, settings);
    case MODELS_IDS.mm1_fifo_k_inf:
      return MM1_FIFO_K_INF(params, settings);
    default:
      throw new Error("Modelo No Encontrado");
  }
}
