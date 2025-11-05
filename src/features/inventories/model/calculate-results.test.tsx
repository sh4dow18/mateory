// Calculate Results Test Suite Requirements
import { describe, it, expect, vi, beforeEach, type MockedFunction } from "vitest";
import { CalculateResults } from "./calculate-results";
import { MODELS_IDS } from "../config";
import { GetTotalDeficitCost } from "../lib/formulas/dispatchers";
// Calculate Results Test Suite Mocks
vi.mock("../config", () => ({
  VARIABLES_LIST: [],
  MODELS_IDS: { epqWithoutDeficit: "epqWithoutDeficit", epqWithDeficit: "epqWithDeficit" },
}));
vi.mock("../config/results-settings", () => ({
  RESULTS_SETTINGS_LIST: [],
}));
vi.mock("@/shared/config/form", () => ({
  GetFormVariablesParams: vi.fn(() => ({ demand: 100 })),
}));
vi.mock("../lib/formulas/dispatchers", () => ({
  GetOptimalProductionLotSize: vi.fn(() => 500),
  GetMaxDeficit: vi.fn(() => 10),
  GetCycleTimeLengthRatio: vi.fn(() => 0.8),
  GetReorderPoint: vi.fn(() => 50),
  GetSecondTimeInterval: vi.fn(() => 2),
  GetMaxInventoryLevel: vi.fn(() => 300),
  GetFirstTimeInterval: vi.fn(() => 1),
  GetThirdTimeInterval: vi.fn(() => 3),
  GetFourthTimeInterval: vi.fn(() => 4),
  GetTotalInventoryHoldingCost: vi.fn(() => ({ string: "$1,000.00" })),
  GetTotalDeficitCost: vi.fn(() => ({ string: "$1,500.00" })),
}));
vi.mock("../lib/formulas/shared", () => ({
  GetFrequencyBetweenTwoProductionRuns: vi.fn(() => 0.2),
  GetTimeBetweenTwoProductionRuns: vi.fn(() => 5),
  GetTotalProductionCost: vi.fn(() => ({ string: "$2,000.00" })),
  GetTotalUnitProductionCost: vi.fn(() => ({ string: "$10.00" })),
  GetTotalCost: vi.fn(() => "$3,510.00"),
}));
// Calculate Results Test Suite
describe("CalculateResults", () => {
  // Create a Mock Form
  const MOCK_FORM = document.createElement("form");
  // Before Each Tests, clear all the mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call all functions correctly and get the results
  it("call all functions correctly and get the results", () => {
    // Get all results for
    const RESULT = CalculateResults(MODELS_IDS.epqWithoutDeficit, MOCK_FORM);
    // 🔹 Verificar retorno completo
    expect(RESULT).toEqual({
      optimalProductionLotSize: 500,
      frequencyBetweenTwoProductionRuns: 0.2,
      timeBetweenTwoProductionRuns: 5,
      maxDeficit: 10,
      cycleTimeLengthRatio: 0.8,
      reorderPoint: 50,
      secondTimeInterval: 2,
      maxInventoryLevel: 300,
      firstTimeInterval: 1,
      thirdTimeInterval: 3,
      fourthTimeInterval: 4,
      totalInventoryHoldingCost: "$1,000.00",
      totalDeficitCost: "$1,500.00",
      totalProductionCost: "$2,000.00",
      totalUnitProductionCost: "$10.00",
      totalCost: "$3,510.00",
    });
  });
  // Test 2: Return undefined in total deficit cost if function return undefined
  it("return undefined in total deficit cost", () => {
    // Mock return as undefined
    (GetTotalDeficitCost as MockedFunction<typeof GetTotalDeficitCost>).mockReturnValueOnce(
      undefined,
    );
    // Get Results
    const RESULT = CalculateResults(MODELS_IDS.epqWithoutDeficit, MOCK_FORM);
    // Check if total deficit cost is undefined
    expect(RESULT.totalDeficitCost).toBeUndefined();
  });
});
