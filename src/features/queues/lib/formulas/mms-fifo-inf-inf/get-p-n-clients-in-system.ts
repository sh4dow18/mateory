// Get Probability of n clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFactorial } from "../../shared";
// Get Probability of n clients in the system function
export function GetPNClientsInSystem(
  p0ClientsInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const {
    arrivalDistributionRate,
    averageServiceRate,
    customersForPNCustomersInSystem,
    numberOfServers,
  } = params;
  const { decimals } = settings;
  const NUMBER_OF_CUSTOMERS = customersForPNCustomersInSystem;
  let result = 0;
  if (NUMBER_OF_CUSTOMERS === 0) {
    result = p0ClientsInSystem;
  } else if (NUMBER_OF_CUSTOMERS <= numberOfServers) {
    const FIRST_PART = Math.pow(arrivalDistributionRate / averageServiceRate, NUMBER_OF_CUSTOMERS);
    const SECOND_PART = GetFactorial(NUMBER_OF_CUSTOMERS);
    result = (FIRST_PART / SECOND_PART) * p0ClientsInSystem;
  } else {
    const FIRST_PART = Math.pow(arrivalDistributionRate / averageServiceRate, NUMBER_OF_CUSTOMERS);
    const SECOND_PART = GetFactorial(numberOfServers);
    const THIRD_PART = Math.pow(numberOfServers, NUMBER_OF_CUSTOMERS - numberOfServers);
    result = (FIRST_PART / (SECOND_PART * THIRD_PART)) * p0ClientsInSystem;
  }
  return GetFloatResult(result, decimals);
}
