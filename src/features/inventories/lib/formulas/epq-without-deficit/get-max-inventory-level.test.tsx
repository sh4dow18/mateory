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
  const MOCK_SECOND_TIME_INTERVAL = 8;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { demand } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = demand * MOCK_SECOND_TIME_INTERVAL;
    // Get the Result from Formula Function
    const RESULT = GetMaxInventoryLevel(MOCK_SECOND_TIME_INTERVAL, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
