// Queues Variables Requirements
import { Variable } from "@/shared/config/variables";
import { GetDisabledQueueModels, MODELS_IDS } from "./models";
// Queues Variables List
export const VARIABLES_LIST: Variable[] = [
  {
    name: "Tasa de Distribución de Llegada",
    example: "90",
    id: "arrivalDistributionRate",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Tasa media de Servicio",
    example: "120",
    id: "averageServiceRate",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Clientes para P(N) Clientes en Sistema",
    example: "0",
    id: "customersForPNCustomersInSystem",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Clientes para P(N) Cola de más de N clientes",
    example: "4",
    id: "customersForPNMoreThanNCustomers",
    validation: "number",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_inf_inf, "different"),
  },
  {
    name: "Tiempo para P(N) Más de N Tiempo en Sistema",
    example: "15",
    id: "timeForPNMoreThanNTimeInSystem",
    validation: "number",
    disabledInModels: [MODELS_IDS.mm1_fifo_k_inf],
  },
  {
    name: "Tiempo para P(N) Más de N Tiempo en Cola",
    example: "20",
    id: "timeForPNMoreThanNTimeInQueue",
    validation: "number",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_inf_inf, "different"),
  },
  {
    name: "Cantidad de Servidores",
    example: "2",
    id: "numberOfServers",
    validation: "number",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mms_fifo_inf_inf, "different"),
  },
  {
    name: "Tamaño de la Cola",
    example: "100",
    id: "queueSize",
    validation: "number",
    disabledInModels: GetDisabledQueueModels(MODELS_IDS.mm1_fifo_k_inf, "different"),
  },
];
