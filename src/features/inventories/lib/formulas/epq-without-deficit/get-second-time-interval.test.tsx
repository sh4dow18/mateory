// Get Second Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetSecondTimeInterval } from "./get-second-time-interval";
// Get Second Time Interval Formula Test Suite
describe("GetSecondTimeInterval", () => {
  // Get Second Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    launchCost: 100,
    demand: 3000,
    constantOutputRatio: 8000,
    inventoryHoldingCost: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { launchCost, demand, constantOutputRatio, inventoryHoldingCost } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * launchCost * (1 - demand / constantOutputRatio)) / (demand * inventoryHoldingCost),
    );
    // Get the Result from Formula Function
    const RESULT = GetSecondTimeInterval(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
