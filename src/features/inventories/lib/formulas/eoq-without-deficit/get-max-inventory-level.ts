// Get Max Inventory Level Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetFloatResult } from "@/shared/lib";
// Function that allows to Get the Max Inventory Level
export function GetMaxInventoryLevel(optimalProductionLotSize: number, settings: FormVariables) {
  const { decimals } = settings;
  return GetFloatResult(optimalProductionLotSize, decimals);
}
