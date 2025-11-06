// Get Total Unit Production Cost Formula Test Suite Requirements
import { GetAccountNumber, GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetTotalUnitProductionCost } from "./get-total-unit-production-cost";
// Get Total Unit Production Cost Formula Test Suite
describe("GetTotalUnitProductionCost", () => {
  // Get Total Unit Production Cost Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    unitProductionCost: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
    currency: 2,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Set Mock Variables
    const { demand, unitProductionCost } = MOCK_PARAMS;
    const { decimals, currency } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED = demand * unitProductionCost;
    const FLOAT_RESULT = GetFloatResult(EXPECTED, decimals);
    const EXPECTED_STRING = GetAccountNumber(currency, FLOAT_RESULT);
    // Get the Result from Formula Function
    const RESULT = GetTotalUnitProductionCost(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT.number).toBe(FLOAT_RESULT);
    expect(RESULT.string).toBe(EXPECTED_STRING);
  });
});
