// Get Probability of Queue Full Requirements
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNClientsInSystem } from "./get-p-n-clients-in-system";
// Get Probability of Queue Full Main Function
export function GetPNQueueFull(
  systemUtilFactor: number,
  p0ClientsInSystem: number,
  params: FormVariables,
  settings: FormVariables,
) {
  // Set Original Customers
  const ORIGINAL_CUSTOMERS = params.customersForPNCustomersInSystem;
  // Change value of customers with queue size
  params.customersForPNCustomersInSystem = params.queueSize;
  // Get Probability of N Clients in System with Queue Size
  const RESULT = GetPNClientsInSystem(systemUtilFactor, p0ClientsInSystem, params, settings);
  // Change value of customers with original one
  params.customersForPNCustomersInSystem = ORIGINAL_CUSTOMERS;
  // Return Probability of N Clients in System
  return RESULT;
}
