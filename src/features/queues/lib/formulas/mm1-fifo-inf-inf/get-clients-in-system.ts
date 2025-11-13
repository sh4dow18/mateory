// Get Expected number of clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected number of clients in the system Function
export function GetClientsInSystem(params: FormVariables, settings: FormVariables) {
  const { arrivalDistributionRate, averageServiceRate } = params;
  const { decimals } = settings;
  const RESULT = arrivalDistributionRate / (averageServiceRate - arrivalDistributionRate);
  return GetFloatResult(RESULT, decimals);
}
