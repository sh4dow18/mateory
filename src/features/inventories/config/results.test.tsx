// Results Config Test Suite Requirements
import { describe, expect, it } from "vitest";
import { MODELS_IDS } from "./models";
import { GetEnabledInventoryResults } from "./results";
// Results Config Test Suite
describe("Results Config", () => {
  // Test 1: Get Enabled Results in "EPQ Without Deficit" model
  it("get enabled results in epq without deficit model", () => {
    // Expected Results
    const EXPECTED = {
      optimalProductionLotSize: 0,
      timeBetweenTwoProductionRuns: 0,
      frequencyBetweenTwoProductionRuns: 0,
      maxInventoryLevel: 0,
      firstTimeInterval: 0,
      secondTimeInterval: 0,
      totalInventoryHoldingCost: 0,
      totalProductionCost: 0,
      totalUnitProductionCost: 0,
      totalCost: 0,
    };
    // Get Enabled Results
    const RESULT = GetEnabledInventoryResults(MODELS_IDS.epqWithoutDeficit, 0);
    // Check if the results are the same as expected
    expect(RESULT).toEqual(EXPECTED);
  });
});
