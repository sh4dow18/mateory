// Get Frequency Between Two Production Runs Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetFrequencyBetweenTwoProductionRuns } from "./get-frequency-between-two-production-runs";
// Get Frequency Between Two Production Runs Formula Test Suite
describe("GetFrequencyBetweenTwoProductionRuns", () => {
  // Get Frequency Between Two Production Runs Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  const MOCK_OPTIMAL_PRODUCTION_LOT_SIZE = 1000;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { demand } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = MOCK_OPTIMAL_PRODUCTION_LOT_SIZE / demand;
    // Get the Result from Formula Function
    const RESULT = GetFrequencyBetweenTwoProductionRuns(
      MOCK_OPTIMAL_PRODUCTION_LOT_SIZE,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
