// Get Optimal Production Lot Size Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetOptimalProductionLotSize } from "./get-optimal-production-lot-size";
// Get Optimal Production Lot Size Formula Test Suite
describe("GetOptimalProductionLotSize", () => {
  // Get Optimal Production Lot Size Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    launchCost: 100,
    inventoryHoldingCost: 3,
    constantOutputRatio: 5000,
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { demand, launchCost, inventoryHoldingCost, constantOutputRatio, deficitCost } =
      MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = Math.sqrt(
      ((2 * demand * launchCost) / inventoryHoldingCost) *
        (1 / (1 - demand / constantOutputRatio)) *
        ((inventoryHoldingCost + deficitCost) / deficitCost),
    );
    // Get the Result from Formula Function
    const RESULT = GetOptimalProductionLotSize(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
