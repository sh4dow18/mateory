// Get Probability of n clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability of n clients in the system function
export function GetPNClientsInSystem(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { customersForPNCustomersInSystem } = params;
  const { decimals } = settings;
  const FIRST_PART = 1 - systemUtilFactor;
  const SECOND_PART = Math.pow(systemUtilFactor, customersForPNCustomersInSystem);
  const RESULT = FIRST_PART * SECOND_PART;
  return GetFloatResult(RESULT, decimals);
}
