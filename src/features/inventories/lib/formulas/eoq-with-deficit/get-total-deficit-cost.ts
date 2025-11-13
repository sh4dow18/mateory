// Get Total Deficit Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Deficit Cost
export function GetTotalDeficitCost(
  maxDeficit: number,
  secondTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { deficitCost } = params;
  const { decimals } = settings;
  const RESULT = (deficitCost * maxDeficit * secondTimeInterval) / 2;
  return GetFloatResult(RESULT, decimals);
}
