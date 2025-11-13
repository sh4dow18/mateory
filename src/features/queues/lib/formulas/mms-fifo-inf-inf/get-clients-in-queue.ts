// Get Clients in Queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFactorial } from "../../shared";
// Get Clients in Queue Main Function
export function GetClientsInQueue(
  systemUtilFactor: number,
  p0ClientsInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { arrivalDistributionRate, averageServiceRate, numberOfServers } = params;
  const { decimals } = settings;
  const FIRST_PART =
    Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) * systemUtilFactor;
  const SECOND_PART = GetFactorial(numberOfServers) * Math.pow(1 - systemUtilFactor, 2);
  const RESULT = (FIRST_PART / SECOND_PART) * p0ClientsInSystem;
  return GetFloatResult(RESULT, decimals);
}
