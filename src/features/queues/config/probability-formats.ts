// Probabilities Formats Requirements
import { SelectOption } from "@/widgets/forms/config/select";
// Probabilities Formats Ids
export const PROBABILITY_FORMATS_IDS = {
  percentage: 1,
  float: 2,
};
// Probabilities Formats Symbols Record
export const PROBABILITY_FORMATS_SYMBOLS: Record<number, string> = {
  [PROBABILITY_FORMATS_IDS.percentage]: "%",
  [PROBABILITY_FORMATS_IDS.float]: "0.X",
};
// Probabilities Formats Names Record
const PROBABILITY_FORMATS_NAMES: Record<string, string> = {
  [PROBABILITY_FORMATS_IDS.percentage]: "Porcentaje",
  [PROBABILITY_FORMATS_IDS.float]: "Coma Flotante",
};
// Probabilities Formats List
export const PROBABILITY_FORMATS_LIST: SelectOption[] = Object.values(PROBABILITY_FORMATS_IDS).map(
  (id) => ({
    display: `${PROBABILITY_FORMATS_NAMES[id]} (${PROBABILITY_FORMATS_SYMBOLS[id]})`,
    value: id,
  }),
);
