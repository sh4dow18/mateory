// Inventories Results Requirements
import { GetEnabledResults, Result, ResultValue } from "@/shared/config/results";
import { GetDisabledInventoryModels } from "./models";
// Get Enabled Inventory Models
export const GetEnabledInventoryResults = (selectedModel: string, value: ResultValue) => {
  return GetEnabledResults(RESULTS_LIST, selectedModel, value);
};
// Inventories Results List
export const RESULTS_LIST: Result[] = [
  {
    id: "optimalProductionLotSize",
    name: "Tamaño óptimo del Lote de Producción",
    disabledInModels: [],
  },
  {
    id: "timeBetweenTwoProductionRuns",
    name: "Tiempo entre 2 Corridas de Producción",
    disabledInModels: [],
  },
  {
    id: "frequencyBetweenTwoProductionRuns",
    name: "Frecuencia entre 2 Corridas de Producción",
    disabledInModels: [],
  },
  {
    id: "maxDeficit",
    name: "Déficit Máximo",
    disabledInModels: GetDisabledInventoryModels("without-deficit", "include"),
  },
  {
    id: "maxInventoryLevel",
    name: "Nivel de Inventario Máximo",
    disabledInModels: [],
  },
  {
    id: "firstTimeInterval",
    name: "Primer Intervalo de Tiempo",
    disabledInModels: [],
  },
  {
    id: "secondTimeInterval",
    name: "Segundo Intervalo de Tiempo",
    disabledInModels: ["eoq-without-deficit"],
  },
  {
    id: "thirdTimeInterval",
    name: "Tercer Intervalo de Tiempo",
    disabledInModels: GetDisabledInventoryModels("epq-with-deficit", "different"),
  },
  {
    id: "fourthTimeInterval",
    name: "Cuarto Intervalo de Tiempo",
    disabledInModels: GetDisabledInventoryModels("epq-with-deficit", "different"),
  },
  {
    id: "cycleTimeLengthRatio",
    name: "Razón de Longitud del tiempo del ciclo",
    disabledInModels: GetDisabledInventoryModels("eoq-without-deficit", "different"),
  },
  {
    id: "reorderPoint",
    name: "Punto de Reorden",
    disabledInModels: GetDisabledInventoryModels("eoq-without-deficit", "different"),
  },
  {
    id: "totalInventoryHoldingCost",
    name: "Costo Total por Mantener en Inventario",
    disabledInModels: [],
  },
  {
    id: "totalDeficitCost",
    name: "Costo Total por Déficit",
    disabledInModels: GetDisabledInventoryModels("without-deficit", "include"),
  },
  {
    id: "totalProductionCost",
    name: "Costo Total por Producción",
    disabledInModels: [],
  },
  {
    id: "totalUnitProductionCost",
    name: "Costo Total por Unidad de Producción",
    disabledInModels: [],
  },
  {
    id: "totalCost",
    name: "Costo Total",
    disabledInModels: [],
  },
];
