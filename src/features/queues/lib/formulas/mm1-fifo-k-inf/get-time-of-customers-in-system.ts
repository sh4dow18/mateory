// Get Expected time of Clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of Clients in the system function
export function GetTimeOfCustomersInSystem(
  customersInSystem: number,
  pQueueCustomersInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate } = params;
  const { decimals } = settings;
  const RESULT = customersInSystem / (arrivalDistributionRate * (1 - pQueueCustomersInSystem));
  return GetFloatResult(RESULT, decimals);
}
