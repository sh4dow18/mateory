// Get Total Production Cost Formula Test Suite Requirements
import { GetAccountNumber, GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetTotalProductionCost } from "./get-total-production-cost";
// Get Total Production Cost Formula Test Suite
describe("GetTotalProductionCost", () => {
  // Get Total Production Cost Formula Test Suite Constants
  const MOCK_PARAMS = {
    launchCost: 100,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
    currency: 2,
  };
  const MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS = 5;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Set Mock Variables
    const { launchCost } = MOCK_PARAMS;
    const { decimals, currency } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = launchCost * MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS;
    const FLOAT_RESULT = GetFloatResult(EXPECTED, decimals);
    const EXPECTED_STRING = GetAccountNumber(currency, FLOAT_RESULT);
    // Get the Result from Formula Function
    const RESULT = GetTotalProductionCost(
      MOCK_FREQUENCY_BETWEEN_TWO_PRODUCTION_RUNS,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT.number).toBe(FLOAT_RESULT);
    expect(RESULT.string).toBe(EXPECTED_STRING);
  });
});
