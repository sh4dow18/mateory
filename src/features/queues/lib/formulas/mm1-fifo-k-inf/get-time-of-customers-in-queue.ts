// Get Expected time of clients in queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of clients in queue function
export function GetTimeOfCustomersInQueue(
  clientsInQueue: number,
  pQueueCustomersInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate } = params;
  const { decimals } = settings;
  const FIRST_PART = arrivalDistributionRate * (1 - pQueueCustomersInSystem);
  const RESULT = clientsInQueue / FIRST_PART;
  return GetFloatResult(RESULT, decimals);
}
