// Get Expected number of clients in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Expected number of clients in the system Function
export function GetClientsInSystem(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { queueSize } = params;
  const { decimals } = settings;
  let result = 0;
  if (systemUtilFactor === 1) {
    result = queueSize / 2;
  } else {
    const FIRST_PART = systemUtilFactor / (1 - systemUtilFactor);
    const SECOND_PART = (queueSize + 1) * Math.pow(systemUtilFactor, queueSize + 1);
    const THIRD_PART = 1 - Math.pow(systemUtilFactor, queueSize + 1);
    result = FIRST_PART - SECOND_PART / THIRD_PART;
  }
  return GetFloatResult(result, decimals);
}
