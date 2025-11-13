// Get Probability of n clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability of n clients in the system function
export function GetPNClientsInSystem(
  systemUtilFactor: number,
  p0ClientsInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { customersForPNCustomersInSystem, queueSize } = params;
  const { decimals } = settings;
  const NUMBER_OF_CUSTOMERS = customersForPNCustomersInSystem;
  let result = 0;
  if (NUMBER_OF_CUSTOMERS === 0 || systemUtilFactor === 1) {
    result = p0ClientsInSystem;
  } else {
    const FIRST_PART = (1 - p0ClientsInSystem) * Math.pow(p0ClientsInSystem, NUMBER_OF_CUSTOMERS);
    const SECOND_PART = 1 - Math.pow(p0ClientsInSystem, queueSize + 1);
    result = FIRST_PART / SECOND_PART;
  }
  return GetFloatResult(result, decimals);
}
