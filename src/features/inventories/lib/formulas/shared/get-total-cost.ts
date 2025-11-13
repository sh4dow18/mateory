// Get Total Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Cost
export function GetTotalCost(
  totalInventoryHoldingCost: number,
  totalDeficitCost: number | undefined,
  totalProductionCost: number,
  totalUnitProductionCost: number,
  settings: FormVariables,
) {
  const { decimals } = settings;
  const TOTAL_DEFICIT_COST = totalDeficitCost ?? 0;
  const RESULT =
    totalInventoryHoldingCost + TOTAL_DEFICIT_COST + totalProductionCost + totalUnitProductionCost;
  return GetFloatResult(RESULT, decimals);
}
