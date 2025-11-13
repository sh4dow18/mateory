// Get Total Unit Cost Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Total Unit Cost
export function GetTotalUnitProductionCost(params: FormVariables, settings: FormVariables) {
  const { demand, unitProductionCost } = params;
  const { decimals } = settings;
  const RESULT = demand * unitProductionCost;
  return GetFloatResult(RESULT, decimals);
}
