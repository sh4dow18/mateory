// Get Clients in Queue Requirements
import { GetFloatResult } from "@/shared/lib";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetClientsInSystem } from "./get-clients-in-system";
// Get Clients in Queue Main Function
export function GetClientsInQueue(
  systemUtilFactor: number,
  p0ClientsInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  const { decimals } = settings;
  const FIRST_PART = GetClientsInSystem(systemUtilFactor, params, settings);
  const SECOND_PART = 1 - p0ClientsInSystem;
  const RESULT = FIRST_PART - SECOND_PART;
  return GetFloatResult(RESULT, decimals);
}
