// Get Expected time of Clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of Clients in the system function
export function GetTimeOfCustomersInSystem(params: FormVariables, settings: FormVariables) {
  const { arrivalDistributionRate, averageServiceRate } = params;
  const { decimals } = settings;
  const RESULT = 1 / (averageServiceRate - arrivalDistributionRate);
  return GetFloatResult(RESULT, decimals);
}
