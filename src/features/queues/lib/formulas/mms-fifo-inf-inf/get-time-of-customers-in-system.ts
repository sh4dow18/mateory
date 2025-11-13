// Get Expected time of Clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of Clients in the system function
export function GetTimeOfCustomersInSystem(
  timeCustomersInQueue: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { averageServiceRate } = params;
  const { decimals } = settings;
  const RESULT = timeCustomersInQueue + 1 / averageServiceRate;
  return GetFloatResult(RESULT, decimals);
}
