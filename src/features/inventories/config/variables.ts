// Inventories Variables Requirements
import { Variable } from "@/shared/config/variables";
import { GetDisabledInventoryModels } from "./models";
// Inventories Variables List
export const VARIABLES_LIST: Variable[] = [
  {
    name: "Razón de Producción Constante",
    example: "8000",
    id: "constantOutputRatio",
    validation: "number",
    disabledInModels: GetDisabledInventoryModels("eoq", "include"),
  },
  {
    name: "Demanda Constante",
    example: "3000",
    id: "demand",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Costo Unitario de Producción",
    example: "4",
    id: "unitProductionCost",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Costo por Mantener en Inventario",
    example: "3",
    id: "inventoryHoldingCost",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Costo de Lanzamiento",
    example: "100",
    id: "launchCost",
    validation: "number",
    disabledInModels: [],
  },
  {
    name: "Costo por Déficit",
    example: "2",
    id: "deficitCost",
    validation: "number",
    disabledInModels: GetDisabledInventoryModels("without-deficit", "include"),
  },
  {
    name: "Tiempo de Reabastecimiento",
    example: "2",
    id: "replenishmentTime",
    validation: "number",
    disabledInModels: GetDisabledInventoryModels("eoq-without-deficit", "different"),
  },
];
