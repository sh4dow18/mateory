import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";

// Get Average number of unoccupied servers function
export function GetIdleServers(
  systemUtilFactor: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { numberOfServers } = params;
  const { decimals } = settings;
  const RESULT = (1 - systemUtilFactor) * numberOfServers;
  return GetFloatResult(RESULT, decimals);
}
