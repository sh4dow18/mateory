// Get Total Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetAccountNumber, GetFloatResult } from "../../shared";
// Get Total Cost Types
type Costs = {
  string: string;
  number: number;
};
// Function that allows to Get the Total Cost
export function GetTotalCost(
  totalInventoryHoldingCost: Costs,
  totalDeficitCost: Costs | undefined,
  totalProductionCost: Costs,
  totalUnitProductionCost: Costs,
  settings: FormVariables,
) {
  const { decimals, currency } = settings;
  const TOTAL_DEFICIT_COST = totalDeficitCost !== undefined ? totalDeficitCost.number : 0;
  const RESULT =
    totalInventoryHoldingCost.number +
    TOTAL_DEFICIT_COST +
    totalProductionCost.number +
    totalUnitProductionCost.number;
  const FLOAT_RESULT = GetFloatResult(RESULT, decimals);
  return GetAccountNumber(currency, FLOAT_RESULT);
}
