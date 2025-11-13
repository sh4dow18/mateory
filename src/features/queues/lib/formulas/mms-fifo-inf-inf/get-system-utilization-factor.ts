// Get System Utilization Factor Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get System Utilization Factor Main Function
export function GetSystemUtilizationFactor(params: FormVariables, settings: FormVariables) {
  const { arrivalDistributionRate, averageServiceRate, numberOfServers } = params;
  const { decimals } = settings;
  const RESULT = arrivalDistributionRate / (averageServiceRate * numberOfServers);
  return GetFloatResult(RESULT, decimals);
}
