// Get Probability that it is more than t units of time in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability that it is more than t units of time in the system function
export function GetPNMoreThanTimeInSystem(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { averageServiceRate, timeForPNMoreThanNTimeInSystem } = params;
  const { decimals } = settings;
  const TIME_UNITS = timeForPNMoreThanNTimeInSystem;
  const FIRST_PART = -1 * averageServiceRate * (1 - systemUtilFactor) * TIME_UNITS;
  const RESULT = Math.pow(Math.E, FIRST_PART);
  return GetFloatResult(RESULT, decimals);
}
