// Get Max Inventory Level Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetMaxInventoryLevel } from "./get-max-inventory-level";
// Get Max Inventory Level Formula Test Suite
describe("GetMaxInventoryLevel", () => {
  // Get Max Inventory Level Formula Test Suite Constants
  const MOCK_OPTIMAL_PRODUCTION_LOT_SIZE = 1500;
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Set Mock Variables
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = GetFloatResult(MOCK_OPTIMAL_PRODUCTION_LOT_SIZE, decimals);
    // Get the Result from Formula Function
    const RESULT = GetMaxInventoryLevel(MOCK_OPTIMAL_PRODUCTION_LOT_SIZE, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(EXPECTED);
  });
});
