// Get Percentage Requirements
import { GetFloatResult } from "@/shared/lib";
// Get Percentage Main Function
export function GetPercentage(ceroToOneNumber: number) {
  const PERCENTAGE = ceroToOneNumber * 100;
  return `${GetFloatResult(PERCENTAGE, 2)}%`;
}
