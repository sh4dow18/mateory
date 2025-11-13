// Calculate Results Requrements
import { GetFormVariablesParams } from "@/widgets/forms/config/form";
import { RESULTS_CONFIG_LIST, VARIABLES_LIST } from "../config";
import {
  GetClientsInQueue,
  GetClientsInSystem,
  GetIdleServers,
  GetP0ClientsinSystem,
  GetPNClientsInSystem,
  GetPNCustomerHaveToWait,
  GetPNMoreThanTimeInQueue,
  GetPNMoreThanTimeInSystem,
  GetSystemUtilizationFactor,
  GetTimeOfCustomersInQueue,
  GetTimeOfCustomersInSystem,
} from "../lib/formulas/dispatchers";
import { GetPNQueueFull } from "../lib/formulas/dispatchers/get-p-n-queue-full";
import { GetPNQueueOfMoreThanCustomers } from "../lib/formulas/shared";
import { GetProbabilityValue } from "../lib/shared";
import { GetCheckedValue } from "@/shared/lib";
// Calculate Results Main Function
export function CalculateResults(selectedModel: string, form: HTMLFormElement) {
  // Get every value from Form Variable
  const PARAMS = GetFormVariablesParams(form, VARIABLES_LIST, selectedModel);
  const SETTINGS = GetFormVariablesParams(form, RESULTS_CONFIG_LIST);
  const { probabilityFormat } = SETTINGS;
  // Get all Results
  const SYSTEM_UTILIZATION_FACTOR = GetSystemUtilizationFactor(selectedModel, PARAMS, SETTINGS);
  const P0_CLIENTS_IN_SYSTEM = GetP0ClientsinSystem(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
  );
  const CLIENTS_IN_QUEUE = GetClientsInQueue(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    P0_CLIENTS_IN_SYSTEM,
  );
  const CLIENTS_IN_SYSTEM = GetClientsInSystem(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    CLIENTS_IN_QUEUE,
  );
  const PN_QUEUE_FULL = GetPNQueueFull(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    P0_CLIENTS_IN_SYSTEM,
  );
  const TIME_OF_CUSTOMERS_IN_QUEUE = GetTimeOfCustomersInQueue(
    selectedModel,
    PARAMS,
    SETTINGS,
    CLIENTS_IN_QUEUE,
    PN_QUEUE_FULL,
  );
  const TIME_OF_CUSTOMERS_IN_SYSTEM = GetTimeOfCustomersInSystem(
    selectedModel,
    PARAMS,
    SETTINGS,
    TIME_OF_CUSTOMERS_IN_QUEUE,
    CLIENTS_IN_SYSTEM,
    PN_QUEUE_FULL,
  );
  const PN_CUSTOMERS_IN_SYSTEM = GetPNClientsInSystem(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    P0_CLIENTS_IN_SYSTEM,
  );
  const PN_QUEUE_MORE_THAN_CUSTOMERS = GetPNQueueOfMoreThanCustomers(
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
  );
  const PN_MORE_THAN_TIME_IN_SYSTEM = GetPNMoreThanTimeInSystem(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    P0_CLIENTS_IN_SYSTEM,
  );
  const PN_MORE_THAN_TIME_IN_QUEUE = GetPNMoreThanTimeInQueue(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
  );
  const PN_CUSTOMERS_HAVE_TO_WAIT = GetPNCustomerHaveToWait(
    selectedModel,
    SYSTEM_UTILIZATION_FACTOR,
    PARAMS,
    SETTINGS,
    P0_CLIENTS_IN_SYSTEM,
  );
  const IDLE_SERVERS = GetIdleServers(selectedModel, SYSTEM_UTILIZATION_FACTOR, PARAMS, SETTINGS);
  // Return all Results
  return {
    systemUtilizationFactor: GetCheckedValue(SYSTEM_UTILIZATION_FACTOR),
    customersInSystem: GetCheckedValue(CLIENTS_IN_SYSTEM),
    customersInQueue: GetCheckedValue(CLIENTS_IN_QUEUE),
    timeOfCustomersInSystem: GetCheckedValue(TIME_OF_CUSTOMERS_IN_SYSTEM),
    timeOfCustomersInQueue: GetCheckedValue(TIME_OF_CUSTOMERS_IN_QUEUE),
    pNCustomersInSystem: GetProbabilityValue(PN_CUSTOMERS_IN_SYSTEM, probabilityFormat),
    pNQueueOfMoreThanNCustomers: GetProbabilityValue(
      PN_QUEUE_MORE_THAN_CUSTOMERS,
      probabilityFormat,
    ),
    pNMoreThanNTimeInSystem: GetProbabilityValue(PN_MORE_THAN_TIME_IN_SYSTEM, probabilityFormat),
    pNMoreThanNTimeInQueue: GetProbabilityValue(PN_MORE_THAN_TIME_IN_QUEUE, probabilityFormat),
    pNCustomerHaveToWait: GetProbabilityValue(PN_CUSTOMERS_HAVE_TO_WAIT, probabilityFormat),
    idleServers: GetCheckedValue(IDLE_SERVERS),
    pNQueueFull: GetProbabilityValue(PN_QUEUE_FULL, probabilityFormat),
  };
}
