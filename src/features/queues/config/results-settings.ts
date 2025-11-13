// Results Config Requirements
import { ResultConfig } from "@/widgets/forms/config/results-settings";
import { PROBABILITY_FORMATS_LIST } from "./probability-formats";
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
    id: "probabilityFormat",
    name: "Formato de Probabilidad",
    settings: PROBABILITY_FORMATS_LIST,
  },
];
