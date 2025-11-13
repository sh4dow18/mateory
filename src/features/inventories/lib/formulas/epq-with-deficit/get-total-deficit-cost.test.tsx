// Get Total Deficit Cost Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTotalDeficitCost } from "./get-total-deficit-cost";
// Get Total Deficit Cost Formula Test Suite
describe("GetTotalDeficitCost", () => {
  // Get Total Deficit Cost Formula Test Suite Constants
  const MOCK_PARAMS = {
    deficitCost: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
    currency: 1,
  };
  const MOCK_MAX_DEFICIT = 500;
  const MOCK_THIRD_TIME_INTERVAL = 3;
  const MOCK_FOURTH_TIME_INTERVAL = 2;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { deficitCost } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      (deficitCost * MOCK_MAX_DEFICIT * (MOCK_THIRD_TIME_INTERVAL + MOCK_FOURTH_TIME_INTERVAL)) / 2;
    // Get the Result from Formula Function
    const RESULT = GetTotalDeficitCost(
      MOCK_MAX_DEFICIT,
      MOCK_THIRD_TIME_INTERVAL,
      MOCK_FOURTH_TIME_INTERVAL,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
