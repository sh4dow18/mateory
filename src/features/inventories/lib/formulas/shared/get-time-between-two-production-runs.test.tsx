// Get Time Between Two Production Runs Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeBetweenTwoProductionRuns } from "./get-time-between-two-production-runs";
// Get Time Between Two Production Runs Formula Test Suite
describe("GetTimeBetweenTwoProductionRuns", () => {
  // Get Time Between Two Production Runs Formula Test Suite Constants
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  const MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS = 4;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Decimals from Mock Settings
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = 1 / MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS;
    // Get the Result from Formula Function
    const RESULT = GetTimeBetweenTwoProductionRuns(
      MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
