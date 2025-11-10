// Queues Results Requirements
import { GetEnabledResults, Result, ResultValue } from "@/shared/config/results";
import { GetDisabledQueueModels, MODELS_IDS } from "./models";
// Get Enabled Queue Models
export const GetEnabledQueueResults = (selectedModel: string, value: ResultValue) => {
  return GetEnabledResults(RESULTS_LIST, selectedModel, value);
};
// Queues Results List
export const RESULTS_LIST: Result[] = [
  {
    id: "systemUtilizationFactor",
    name: "Factor de Utilización del Sistema",
    disabledInModels: [],
  },
  {
    id: "customersInSystem",
    name: "Clientes en Sistema",
    disabledInModels: [],
  },
  {
    id: "customersInQueue",
    name: "Clientes en Cola",
    disabledInModels: [],
  },
  {
    id: "timeOfCustomersInSystem",
    name: "Tiempo de Clientes en Sistema",
    disabledInModels: [],
  },
  {
    id: "timeOfCustomersInQueue",
    name: "Tiempo de Clientes en Cola",
    disabledInModels: [],
  },
  {
    id: "pNCustomersInSystem",
    name: "P(N) Clientes en Sistema",
    disabledInModels: [],
  },
  {
    id: "pNQueueOfMoreThanNCustomers",
    name: "P(N) Cola de más de N clientes",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_inf_inf, "different"),
  },
  {
    id: "pNMoreThanNTimeInSystem",
    name: "P(N) Más de N Tiempo en Sistema",
    disabledInModels: [MODELS_IDS.mm1_fifo_k_inf],
  },
  {
    id: "pNMoreThanNTimeInQueue",
    name: "P(N) Más de N Tiempo en Cola",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_inf_inf, "different"),
  },
  {
    id: "pNCustomerHaveToWait",
    name: "P(N) Cliente tenga que Esperar",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mms_fifo_inf_inf, "different"),
  },
  {
    id: "idleServers",
    name: "Servidores Desocupados",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mms_fifo_inf_inf, "different"),
  },
  {
    id: "pNQueueFull",
    name: "P(N) de Cola Llena",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_k_inf, "different"),
  },
];
