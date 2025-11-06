// Get Fourth Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetFourthTimeInterval } from "./get-fourth-time-interval";
// Get Fourth Time Interval Formula Test Suite
describe("GetFourthTimeInterval", () => {
  // Get Fourth Time Interval Formula Test Suite Constants
  const MOCK_PARAMS = {
    constantOutputRatio: 180,
    demand: 60,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  const MOCK_MAX_DEFICIT = 240;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { constantOutputRatio, demand } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = MOCK_MAX_DEFICIT / (constantOutputRatio - demand);
    // Get the Result from Formula Function
    const RESULT = GetFourthTimeInterval(MOCK_MAX_DEFICIT, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
