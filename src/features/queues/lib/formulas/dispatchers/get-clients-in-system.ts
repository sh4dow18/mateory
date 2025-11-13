// Get Clients in System Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetClientsInSystem as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetClientsInSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetClientsInSystem as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Clients in System Dispatcher Main Function
export function GetClientsInSystem(
  selectedModel: string,
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
  clientsInQueue?: number,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(params, settings);
    case selectedModel === MODELS_IDS.mms_fifo_inf_inf && clientsInQueue !== undefined:
      return MMS_FIFO_INF_INF(clientsInQueue, params, settings);
    case selectedModel === MODELS_IDS.mm1_fifo_k_inf:
      return MM1_FIFO_K_INF(systemUtilFactor, params, settings);
    default:
      throw new Error("Modelo No Encontrado");
  }
}
