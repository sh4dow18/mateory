// Results Config Requirements
import { ResultConfig } from "@/widgets/forms/config/results-settings";
import { CURRENCIES_LIST } from "./currencies";
// Results Settings List
export const RESULTS_CONFIG_LIST: ResultConfig[] = [
  {
    id: "decimals",
    name: "Cantidad de Decimales",
    settings: {
      example: "2",
      validation: "1-to-9",
      maxLength: 1,
    },
  },
  {
    id: "currency",
    name: "Tipo de Moneda",
    settings: CURRENCIES_LIST,
  },
];
