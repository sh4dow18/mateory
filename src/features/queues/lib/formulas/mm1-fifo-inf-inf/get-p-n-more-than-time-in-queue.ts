// Get Probability that it is more than t units of time in queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability that it is more than t units of time in queue function
export function GetPNMoreThanTimeInQueue(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { averageServiceRate, timeForPNMoreThanNTimeInQueue } = params;
  const { decimals } = settings;
  const TIME_UNITS = timeForPNMoreThanNTimeInQueue;
  const RESULT_POW_POW = -1 * averageServiceRate * (1 - systemUtilFactor) * TIME_UNITS;
  const RESULT_POW = Math.pow(Math.E, RESULT_POW_POW);
  const RESULT = systemUtilFactor * RESULT_POW;
  return GetFloatResult(RESULT, decimals);
}
