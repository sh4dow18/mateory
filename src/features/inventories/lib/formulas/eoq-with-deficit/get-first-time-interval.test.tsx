// Get First Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetFirstTimeInterval } from "./get-first-time-interval";
// Get First Time Interval Formula Test Suite
describe("GetFirstTimeInterval", () => {
  // Get First Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    deficitCost: 2,
    launchCost: 100,
    inventoryHoldingCost: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { demand, deficitCost, launchCost, inventoryHoldingCost } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * deficitCost * launchCost) /
        (demand * inventoryHoldingCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetFirstTimeInterval(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 2));
  });
});
