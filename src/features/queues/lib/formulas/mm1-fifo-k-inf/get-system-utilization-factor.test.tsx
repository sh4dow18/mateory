// Get System Utilization Factor Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetSystemUtilizationFactor } from "./get-system-utilization-factor";
// Get System Utilization Factor Test Suite
describe("GetSystemUtilizationFactor", () => {
  // Get System Utilization Factor Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 50,
    averageServiceRate: 100,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { arrivalDistributionRate, averageServiceRate } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = arrivalDistributionRate / averageServiceRate;
    // Get the Result from Formula Function
    const RESULT = GetSystemUtilizationFactor(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 2));
  });
});
