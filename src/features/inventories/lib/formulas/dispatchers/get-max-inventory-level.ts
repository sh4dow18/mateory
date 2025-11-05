// Get Max Inventory Level Requirements
import { MODELS_IDS } from "@/features/inventories/config";
import { GetMaxInventoryLevel as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetMaxInventoryLevel as EPQWithDeficit } from "../epq-with-deficit";
import { GetMaxInventoryLevel as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetMaxInventoryLevel as EOQWithDeficit } from "../eoq-with-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Function that allows to Get the Max Inventory Level
export function GetMaxInventoryLevel(
  selectedModel: string,
  secondTimeInterval: number | undefined,
  optimalProductionLotSize: number,
  params: FormVariables,
  settings: FormVariables,
) {
  switch (true) {
    case selectedModel === MODELS_IDS.epqWithoutDeficit && typeof secondTimeInterval === "number":
      return EPQWithoutDeficit(secondTimeInterval, params, settings);
    case selectedModel === MODELS_IDS.epqWithDeficit && typeof secondTimeInterval === "number":
      return EPQWithDeficit(secondTimeInterval, params, settings);
    case selectedModel === MODELS_IDS.eoqWithoutDeficit:
      return EOQWithoutDeficit(optimalProductionLotSize, settings);
    case selectedModel === MODELS_IDS.eoqWithDeficit && typeof secondTimeInterval === "number":
      return EOQWithDeficit(secondTimeInterval, optimalProductionLotSize, params, settings);
    default:
      throw new Error("Modelo no Encontrado");
  }
}
