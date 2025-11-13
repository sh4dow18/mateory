// Get Probability Value Requirements
import { PROBABILITY_FORMATS_IDS } from "../../config";
import { GetPercentage } from "./get-percentage";
// Get Probability Value Main Function
export function GetProbabilityValue(probability: number | undefined, format: number) {
  switch (true) {
    case probability !== undefined && isNaN(probability):
      return "Sin Definir";
    case format === PROBABILITY_FORMATS_IDS.percentage && probability !== undefined:
      return GetPercentage(probability);
    default:
      return probability;
  }
}
