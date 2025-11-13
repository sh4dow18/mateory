// Get Max Deficit Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetMaxDeficit } from "./get-max-deficit";
// Get Max Deficit Formula Test Suite
describe("GetMaxDeficit", () => {
  // Get Max Deficit Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    inventoryHoldingCost: 3,
    launchCost: 100,
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { demand, inventoryHoldingCost, launchCost, deficitCost } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      (2 * demand * inventoryHoldingCost * launchCost) /
        (deficitCost * (inventoryHoldingCost + deficitCost)),
    );
    // Get the Result from Formula Function
    const RESULT = GetMaxDeficit(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 2));
  });
});
