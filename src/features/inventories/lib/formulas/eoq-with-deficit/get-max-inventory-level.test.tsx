// Get Max Inventory Level Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetMaxInventoryLevel } from "./get-max-inventory-level";
// Get Max Inventory Level Formula Test Suite
describe("GetMaxInventoryLevel", () => {
  // Get Max Inventory Level Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  const MOCK_SECOND_TIME_INTERVAL = 2;
  const MOCK_OPTIMAL_PRODUCTION_LOT_SIZE = 7000;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { demand } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = MOCK_OPTIMAL_PRODUCTION_LOT_SIZE - demand * MOCK_SECOND_TIME_INTERVAL;
    // Get the Result from Formula Function
    const RESULT = GetMaxInventoryLevel(
      MOCK_SECOND_TIME_INTERVAL,
      MOCK_OPTIMAL_PRODUCTION_LOT_SIZE,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 2));
  });
});
