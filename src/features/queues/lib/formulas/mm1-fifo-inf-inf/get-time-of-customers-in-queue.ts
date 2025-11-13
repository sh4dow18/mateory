// Get Expected time of clients in queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected time of clients in queue function
export function GetTimeOfCustomersInQueue(params: FormVariables, settings: FormVariables) {
  const { arrivalDistributionRate, averageServiceRate } = params;
  const { decimals } = settings;
  const FIRST_TIME = averageServiceRate * (averageServiceRate - arrivalDistributionRate);
  const RESULT = arrivalDistributionRate / FIRST_TIME;
  return GetFloatResult(RESULT, decimals);
}
