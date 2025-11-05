// Get Total Production Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Production Cost
export function GetTotalProductionCost(
  frequencyBetweenTwoProductionRuns: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { launchCost } = params;
  const { decimals, currency } = settings;
  const RESULT = launchCost * frequencyBetweenTwoProductionRuns;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
