// Get Total Inventory Holding Cost Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetTotalInventoryHoldingCost as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetTotalInventoryHoldingCost as EPQWithDeficit } from "../epq-with-deficit";
import { GetTotalInventoryHoldingCost as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetTotalInventoryHoldingCost as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Total Inventory Holding Cost
export function GetTotalInventoryHoldingCost(
  selectedModel: string,
  maxInventoryLevel: number,
  firstTimeInterval: number,
  secondTimeInterval: number | undefined,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.epqWithoutDeficit && typeof secondTimeInterval === "number":
      return EPQWithoutDeficit(
        maxInventoryLevel,
        firstTimeInterval,
        secondTimeInterval,
        params,
        settings,
      );
    case selectedModel === MODELS_IDS.epqWithDeficit && typeof secondTimeInterval === "number":
      return EPQWithDeficit(
        maxInventoryLevel,
        firstTimeInterval,
        secondTimeInterval,
        params,
        settings,
      );
    case selectedModel === MODELS_IDS.eoqWithoutDeficit:
      return EOQWithoutDeficit(maxInventoryLevel, firstTimeInterval, params, settings);
    case selectedModel === MODELS_IDS.eoqWithDeficit:
      return EOQWithDeficit(maxInventoryLevel, firstTimeInterval, params, settings);
    default:
      throw new Error("Modelo no Encontrado");
  }
}
