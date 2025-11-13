// Get Probability of having a queue of more than n clients requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability of having a queue of more than n clients function
export function GetPNQueueOfMoreThanCustomers(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { customersForPNMoreThanNCustomers } = params;
  const { decimals } = settings;
  const RESULT = Math.pow(systemUtilFactor, customersForPNMoreThanNCustomers + 1);
  return GetFloatResult(RESULT, decimals);
}
