// Get Probability of 0 clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFactorial } from "../../shared";
// Get Probability of 0 clients in the system function
export function GetP0ClientsinSystem(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate, averageServiceRate, numberOfServers } = params;
  const { decimals } = settings;
  let result = 0;
  let sum = 0;
  for (let i = 0; i < numberOfServers; i++) {
    sum = sum + Math.pow(arrivalDistributionRate / averageServiceRate, i) / GetFactorial(i);
  }
  const FIRST_PART =
    Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) /
    GetFactorial(numberOfServers);
  const SECOND_PART = 1 / (1 - systemUtilFactor);
  result = 1 / (FIRST_PART * SECOND_PART + sum);
  return GetFloatResult(result, decimals);
}
