// Get Time of Customers in System Dispatcher Requirements
import { MODELS_IDS } from "@/features/queues/config";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetTimeOfCustomersInSystem as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetTimeOfCustomersInSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetTimeOfCustomersInSystem as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
// Get Time of Customers in System Dispatcher Main Function
export function GetTimeOfCustomersInSystem(
  selectedModel: string,
  params: FormVariables,
  settings: FormVariables,
  timeCustomersInQueue?: number,
  customersInSystem?: number,
  pNQueueFull?: number,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.mm1_fifo_inf_inf:
      return MM1_FIFO_INF_INF(params, settings);
    case selectedModel === MODELS_IDS.mms_fifo_inf_inf && timeCustomersInQueue !== undefined:
      return MMS_FIFO_INF_INF(timeCustomersInQueue, params, settings);
    case selectedModel === MODELS_IDS.mm1_fifo_k_inf &&
      customersInSystem !== undefined &&
      pNQueueFull !== undefined:
      return MM1_FIFO_K_INF(customersInSystem, pNQueueFull, params, settings);
    default:
      throw new Error("Modelo No Encontrado");
  }
}
