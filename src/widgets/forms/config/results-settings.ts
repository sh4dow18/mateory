// Results Config Requirements
import { CURRENCIES_LIST } from "@/shared/config/currencies";
import { SelectOption } from "@/widgets/forms/config/select";
import { InputSettings } from "./input";
// Results Config Required Types
type ResultConfig = {
  id: string;
  name: string;
  settings: InputSettings | SelectOption[];
};
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
