// Get Clients in Queue Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetClientsInQueue as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetClientsInQueue as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetClientsInQueue as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Clients in Queue Dispatcher Main Function
export function GetClientsInQueue(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
  p0ClientsInSystem?: number,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(params, settings);
    case selectedModel === MODELS_IDS.mms_fifo_inf_inf && p0ClientsInSystem !== undefined:
      return MMS_FIFO_INF_INF(systemUtilFactor, p0ClientsInSystem, params, settings);
    case selectedModel === MODELS_IDS.mm1_fifo_k_inf && p0ClientsInSystem !== undefined:
      return MM1_FIFO_K_INF(systemUtilFactor, p0ClientsInSystem, params, settings);
    default:
      throw new Error("Modelo No Encontrado");
  }
}
