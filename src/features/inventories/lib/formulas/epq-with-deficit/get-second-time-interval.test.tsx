// Get Second Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetSecondTimeInterval } from "./get-second-time-interval";
// Get Second Time Interval Formula Test Suite
describe("GetSecondTimeInterval", () => {
  // Get Second Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    launchCost: 100,
    deficitCost: 2,
    demand: 3000,
    constantOutputRatio: 5000,
    inventoryHoldingCost: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { launchCost, deficitCost, demand, constantOutputRatio, inventoryHoldingCost } =
      MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * launchCost * deficitCost * (1 - demand / constantOutputRatio)) /
        (demand * inventoryHoldingCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetSecondTimeInterval(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
