// Calculate Results Requrements
import { GetFormVariablesParams } from "@/widgets/forms/config/form";
import {
  GetCycleTimeLengthRatio,
  GetFirstTimeInterval,
  GetFourthTimeInterval,
  GetMaxDeficit,
  GetMaxInventoryLevel,
  GetOptimalProductionLotSize,
  GetReorderPoint,
  GetSecondTimeInterval,
  GetThirdTimeInterval,
  GetTotalDeficitCost,
  GetTotalInventoryHoldingCost,
} from "../lib/formulas/dispatchers";
import {
  GetFrequencyBetweenTwoProductionRuns,
  GetTimeBetweenTwoProductionRuns,
  GetTotalCost,
  GetTotalProductionCost,
  GetTotalUnitProductionCost,
} from "../lib/formulas/shared";
import { RESULTS_CONFIG_LIST, VARIABLES_LIST } from "../config";
// Calculate Results Main Function
export function CalculateResults(selectedModel: string, form: HTMLFormElement) {
  // Get every value from Form Variable
  const PARAMS = GetFormVariablesParams(form, VARIABLES_LIST, selectedModel);
  const SETTINGS = GetFormVariablesParams(form, RESULTS_CONFIG_LIST);
  // Get all results from producction and timing
  const OPTIMAL_PRODUCTION_LOT_SIZE = GetOptimalProductionLotSize(selectedModel, PARAMS, SETTINGS);
  const FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS = GetFrequencyBetweenTwoProductionRuns(
    OPTIMAL_PRODUCTION_LOT_SIZE,
    PARAMS,
    SETTINGS,
  );
  const TIME_BETWEEN_TWO_PRODUCTION_RUNS = GetTimeBetweenTwoProductionRuns(
    FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
    SETTINGS,
  );
  // Get all results that could be undefined according the context
  const MAX_DEFICIT = GetMaxDeficit(selectedModel, PARAMS, SETTINGS);
  const CYCLE_TIME_LENGTH_RATIO = GetCycleTimeLengthRatio(
    selectedModel,
    FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
    PARAMS,
  );
  const REORDER_POINT = GetReorderPoint(
    selectedModel,
    OPTIMAL_PRODUCTION_LOT_SIZE,
    FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
    CYCLE_TIME_LENGTH_RATIO,
    PARAMS,
    SETTINGS,
  );
  // Get all results from times and max inventory level
  const SECOND_TIME_INTERVAL = GetSecondTimeInterval(selectedModel, PARAMS, SETTINGS);
  const MAX_INVENTORY_LEVEL = GetMaxInventoryLevel(
    selectedModel,
    SECOND_TIME_INTERVAL,
    OPTIMAL_PRODUCTION_LOT_SIZE,
    PARAMS,
    SETTINGS,
  );
  const FIRST_TIME_INTERVAL = GetFirstTimeInterval(
    selectedModel,
    MAX_INVENTORY_LEVEL,
    TIME_BETWEEN_TWO_PRODUCTION_RUNS,
    PARAMS,
    SETTINGS,
  );
  const THIRD_TIME_INTERVAL = GetThirdTimeInterval(selectedModel, PARAMS, SETTINGS);
  const FOURTH_TIME_INTERVAL = GetFourthTimeInterval(selectedModel, MAX_DEFICIT, PARAMS, SETTINGS);
  // Get all costs results
  const TOTAL_INVENTORY_HOLDING_COST = GetTotalInventoryHoldingCost(
    selectedModel,
    MAX_INVENTORY_LEVEL,
    FIRST_TIME_INTERVAL,
    SECOND_TIME_INTERVAL,
    PARAMS,
    SETTINGS,
  );
  const TOTAL_DEFICIT_COST = GetTotalDeficitCost(
    selectedModel,
    MAX_DEFICIT,
    SECOND_TIME_INTERVAL,
    THIRD_TIME_INTERVAL,
    FOURTH_TIME_INTERVAL,
    PARAMS,
    SETTINGS,
  );
  const TOTAL_PRODUCTION_COST = GetTotalProductionCost(
    FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
    PARAMS,
    SETTINGS,
  );
  const TOTAL_UNIT_PRODUCTION_COST = GetTotalUnitProductionCost(PARAMS, SETTINGS);
  const TOTAL_COST = GetTotalCost(
    TOTAL_INVENTORY_HOLDING_COST,
    TOTAL_DEFICIT_COST,
    TOTAL_PRODUCTION_COST,
    TOTAL_UNIT_PRODUCTION_COST,
    SETTINGS,
  );
  // Return all Results
  return {
    optimalProductionLotSize: OPTIMAL_PRODUCTION_LOT_SIZE,
    timeBetweenTwoProductionRuns: TIME_BETWEEN_TWO_PRODUCTION_RUNS,
    frequencyBetweenTwoProductionRuns: FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
    maxDeficit: MAX_DEFICIT,
    maxInventoryLevel: MAX_INVENTORY_LEVEL,
    firstTimeInterval: FIRST_TIME_INTERVAL,
    secondTimeInterval: SECOND_TIME_INTERVAL,
    thirdTimeInterval: THIRD_TIME_INTERVAL,
    fourthTimeInterval: FOURTH_TIME_INTERVAL,
    cycleTimeLengthRatio: CYCLE_TIME_LENGTH_RATIO,
    reorderPoint: REORDER_POINT,
    totalInventoryHoldingCost: TOTAL_INVENTORY_HOLDING_COST.string,
    totalDeficitCost: TOTAL_DEFICIT_COST !== undefined ? TOTAL_DEFICIT_COST.string : undefined,
    totalProductionCost: TOTAL_PRODUCTION_COST.string,
    totalUnitProductionCost: TOTAL_UNIT_PRODUCTION_COST.string,
    totalCost: TOTAL_COST,
  };
}
