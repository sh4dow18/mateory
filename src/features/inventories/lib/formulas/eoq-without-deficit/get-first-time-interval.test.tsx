// Get First Time Interval Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetFirstTimeInterval } from "./get-first-time-interval";
// Get First Time Interval Formula Test Suite
describe("GetFirstTimeInterval", () => {
  // Get First Time Interval Formula Test Suite Constants
  const MOCK_TIME = 25;
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Set Expected Result
    const EXPECTED = GetFloatResult(MOCK_TIME, MOCK_SETTINGS.decimals);
    // Get the Result from Formula Function
    const RESULT = GetFirstTimeInterval(MOCK_TIME, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(EXPECTED);
  });
});
