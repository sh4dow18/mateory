// Get Third Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetThirdTimeInterval } from "./get-third-time-interval";
// Get Third Time Interval Formula Test Suite
describe("GetThirdTimeInterval", () => {
  // Get Third Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    inventoryHoldingCost: 3,
    launchCost: 100,
    demand: 3000,
    constantOutputRatio: 5000,
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { inventoryHoldingCost, launchCost, demand, constantOutputRatio, deficitCost } =
      MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * inventoryHoldingCost * launchCost * (1 - demand / constantOutputRatio)) /
        (demand * deficitCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetThirdTimeInterval(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
