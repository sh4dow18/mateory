// Get Total Production Cost Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTotalProductionCost } from "./get-total-production-cost";
// Get Total Production Cost Formula Test Suite
describe("GetTotalProductionCost", () => {
  // Get Total Production Cost Formula Test Suite Constants
  const MOCK_PARAMS = {
    launchCost: 100,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
    currency: 2,
  };
  const MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS = 5;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Set Mock Variables
    const { launchCost } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = launchCost * MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS;
    // Get the Result from Formula Function
    const RESULT = GetTotalProductionCost(
      MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
