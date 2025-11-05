// Get Max Inventory Level Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "../../shared";
// Function that allows to Get the Max Inventory Level
export function GetMaxInventoryLevel(
  secondTimeInterval: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { demand } = params;
  const { decimals } = settings;
  const RESULT = demand * secondTimeInterval;
  return GetFloatResult(RESULT, decimals);
}
