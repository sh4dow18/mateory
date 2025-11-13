// Get Probability that the client will have to wait Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFactorial } from "../../shared";
import { GetFloatResult } from "@/shared/lib";
// Get Probability that the client will have to wait function
export function GetPNCustomerHaveToWait(
  systemUtilFactor: number,
  p0CustomersinSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate, averageServiceRate, numberOfServers } = params;
  const { decimals } = settings;
  const FIRST_PART = Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers);
  const SECOND_PART = GetFactorial(numberOfServers) * (1 - systemUtilFactor);
  const RESULT = (FIRST_PART / SECOND_PART) * p0CustomersinSystem;
  return GetFloatResult(RESULT, decimals);
}
