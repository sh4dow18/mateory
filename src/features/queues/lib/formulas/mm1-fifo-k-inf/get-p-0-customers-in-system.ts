// Get Probability of 0 clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability of 0 clients in the system function
export function GetP0ClientsinSystem(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { queueSize } = params;
  const { decimals } = settings;
  let result = 0;
  if (systemUtilFactor === 1) {
    result = 1 / (queueSize + 1);
  } else {
    const FIRST_PART = 1 - systemUtilFactor;
    const SECOND_PART = 1 - Math.pow(systemUtilFactor, queueSize + 1);
    result = FIRST_PART / SECOND_PART;
  }
  return GetFloatResult(result, decimals);
}
