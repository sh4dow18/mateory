// Get Second Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetSecondTimeInterval } from "./get-second-time-interval";
// Get Second Time Interval Formula Test Suite
describe("GetSecondTimeInterval", () => {
  // Get Second Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    launchCost: 100,
    inventoryHoldingCost: 3,
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { demand, launchCost, inventoryHoldingCost, deficitCost } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * launchCost * inventoryHoldingCost) /
        (demand * deficitCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetSecondTimeInterval(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 2));
  });
});
