// Get Max Deficit Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetMaxDeficit } from "./get-max-deficit";
// Get Max Deficit Formula Test Suite
describe("GetMaxDeficit", () => {
  // Get Max Deficit Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 5000,
    inventoryHoldingCost: 3,
    launchCost: 120,
    constantOutputRatio: 10000,
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { demand, inventoryHoldingCost, launchCost, constantOutputRatio, deficitCost } =
      MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * demand * inventoryHoldingCost * launchCost * (1 - demand / constantOutputRatio)) /
        (deficitCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetMaxDeficit(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
