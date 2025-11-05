// Get Total Deficit Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Function that allows to Get the Total Deficit Cost
export function GetTotalDeficitCost(
  maxDeficit: number,
  thirdTimeInterval: number,
  fourthTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { deficitCost } = params;
  const { decimals, currency } = settings;
  const FIRST_PART = deficitCost * maxDeficit;
  const SECOND_PART = thirdTimeInterval + fourthTimeInterval;
  const RESULT = (FIRST_PART * SECOND_PART) / 2;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return {
    string: GetAccountNumber(currency, FLOAT_RESULT),
    number: FLOAT_RESULT,
  };
}
