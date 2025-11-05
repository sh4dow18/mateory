// Get Total Unit Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Unit Cost
export function GetTotalUnitProductionCost(params: FormVariables, settings: FormVariables) {
  const { demand, unitProductionCost } = params;
  const { decimals, currency } = settings;
  const RESULT = demand * unitProductionCost;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
