// Get Total Deficit Cost Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetTotalDeficitCost as EPQWithDeficit } from "../epq-with-deficit";
import { GetTotalDeficitCost as EOQWithDeficit } from "../eoq-with-deficit";
// Function that allows to Get the Total Deficit Cost
export function GetTotalDeficitCost(
  selectedModel: string,
  maxDeficit: number | undefined,
  secondTimeInterval: number | undefined,
  thirdTimeInterval: number | undefined,
  fourthTimeInterval: number | undefined,
  params: Record<string, number>,
  settings: Record<string, number>,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.epqWithDeficit &&
      typeof maxDeficit === "number" &&
      typeof thirdTimeInterval === "number" &&
      typeof fourthTimeInterval === "number":
      return EPQWithDeficit(maxDeficit, thirdTimeInterval, fourthTimeInterval, params, settings);
    case selectedModel === MODELS_IDS.eoqWithDeficit &&
      typeof maxDeficit === "number" &&
      typeof secondTimeInterval === "number":
      return EOQWithDeficit(maxDeficit, secondTimeInterval, params, settings);
    default:
      return undefined;
  }
}
