// Get Clients in Queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Clients in Queue Main Function
export function GetClientsInQueue(params: FormVariables, settings: FormVariables) {
  const { arrivalDistributionRate, averageServiceRate } = params;
  const { decimals } = settings;
  const FIRST_PART = Math.pow(arrivalDistributionRate, 2);
  const SECOND_PART = averageServiceRate * (averageServiceRate - arrivalDistributionRate);
  const RESULT = FIRST_PART / SECOND_PART;
  return GetFloatResult(RESULT, decimals);
}
