// Get First Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetFirstTimeInterval } from "./get-first-time-interval";
// Get First Time Interval Formula Test Suite
describe("GetFirstTimeInterval", () => {
  // Get First Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    constantOutputRatio: 8000,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  const MOCK_MAX_INVENTORY_LEVEL = 1500;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { demand, constantOutputRatio } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = MOCK_MAX_INVENTORY_LEVEL / (constantOutputRatio - demand);
    // Get the Result from Formula Function
    const RESULT = GetFirstTimeInterval(MOCK_MAX_INVENTORY_LEVEL, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
