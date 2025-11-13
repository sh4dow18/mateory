// Get Expected time of clients in queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of clients in queue function
export function GetTimeOfCustomersInQueue(
  clientsInQueue: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate } = params;
  const { decimals } = settings;
  const RESULT = clientsInQueue / arrivalDistributionRate;
  return GetFloatResult(RESULT, decimals);
}
