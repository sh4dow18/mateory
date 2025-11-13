// Get Probability that it is more than t units of time in the system Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFactorial } from "../../shared";
// Get Probability that it is more than t units of time in the system function
export function GetPNMoreThanTimeInSystem(
  systemUtilFactor: number,
  p0CustomersInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const {
    arrivalDistributionRate,
    averageServiceRate,
    timeForPNMoreThanNTimeInSystem,
    numberOfServers,
  } = params;
  const { decimals } = settings;
  const TIME_UNITS = timeForPNMoreThanNTimeInSystem;
  // First Part
  const FIRST_POW = Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers);
  const FIRST_PART = p0CustomersInSystem * FIRST_POW;
  // Second Part
  const SECOND_POW_PART =
    numberOfServers - 1 - (arrivalDistributionRate / averageServiceRate) * TIME_UNITS;
  const SECOND_PART = 1 - Math.pow(Math.E, -1 * averageServiceRate * SECOND_POW_PART);
  // Third Part
  const THIRD_PART_FACTORIAL = GetFactorial(numberOfServers);
  const THIRD_PART_SECOND_PART = 1 - systemUtilFactor;
  const THIRD_PART_THIRD_PART = numberOfServers - 1 - arrivalDistributionRate / averageServiceRate;
  const THIRD_PART = THIRD_PART_FACTORIAL * THIRD_PART_SECOND_PART * THIRD_PART_THIRD_PART;
  // Result
  const RESULT_POW = Math.pow(Math.E, -1 * averageServiceRate * TIME_UNITS);
  const RESULT_SECOND_PART = 1 + (FIRST_PART * SECOND_PART) / THIRD_PART;
  const RESULT = RESULT_POW * RESULT_SECOND_PART;
  return GetFloatResult(RESULT, decimals);
}
