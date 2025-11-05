// Get Total Deficit Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Deficit Cost
export function GetTotalDeficitCost(
  maxDeficit: number,
  secondTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { deficitCost } = params;
  const { decimals, currency } = settings;
  const RESULT = (deficitCost * maxDeficit * secondTimeInterval) / 2;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
