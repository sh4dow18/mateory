// Get Time of Customers in Queue Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetTimeOfCustomersInQueue as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetTimeOfCustomersInQueue as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetTimeOfCustomersInQueue as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Time of Customers in Queue Dispatcher Main Function
export function GetTimeOfCustomersInQueue(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
  clientsInQueue?: number,
  pNQueueFull?: number,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(params, settings);
    case selectedModel === MODELS_IDS.mms_fifo_inf_inf && clientsInQueue !== undefined:
      return MMS_FIFO_INF_INF(clientsInQueue, params, settings);
    case selectedModel === MODELS_IDS.mm1_fifo_k_inf &&
      clientsInQueue !== undefined &&
      pNQueueFull !== undefined:
      return MM1_FIFO_K_INF(clientsInQueue, pNQueueFull, params, settings);
    default:
      throw new Error("Modelo No Encontrado");
  }
}
