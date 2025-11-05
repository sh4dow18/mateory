// Get Total Cost Formula Test Suite Requirements
import { GetAccountNumber, GetFloatResult } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetTotalCost } from "./get-total-cost";
// Get Total Cost Formula Test Suite
describe("GetTotalCost", () => {
  // Get Total Cost Formula Test Suite Constants
  const MOCK_TOTAL_INVENTORY_HOLDING_COST = { string: "$100.00", number: 100 };
  const MOCK_TOTAL_DEFICIT_COST = { string: "$50.00", number: 50 };
  const MOCK_TOTAL_PRODUCTION_COST = { string: "$200.00", number: 200 };
  const MOCK_TOTAL_UNIT_PRODUCTION_COST = { string: "$25.00", number: 25 };
  const MOCK_SETTINGS = { decimals: 2, currency: 2 };
  // Test 1: Calc Correctly with Total Deficit Cost
  it("calc correctly with total deficit cost", () => {
    // Set Mock Variables
    const { decimals, currency } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      MOCK_TOTAL_INVENTORY_HOLDING_COST.number +
      MOCK_TOTAL_DEFICIT_COST.number +
      MOCK_TOTAL_PRODUCTION_COST.number +
      MOCK_TOTAL_UNIT_PRODUCTION_COST.number;
    // Get the Result from Formula Function
    const RESULT = GetTotalCost(
      MOCK_TOTAL_INVENTORY_HOLDING_COST,
      MOCK_TOTAL_DEFICIT_COST,
      MOCK_TOTAL_PRODUCTION_COST,
      MOCK_TOTAL_UNIT_PRODUCTION_COST,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetAccountNumber(currency, GetFloatResult(EXPECTED, decimals)));
  });
  // Test 2: Calc Correctly without Total Deficit Cost
  it("calc correctly without total deficit cost", () => {
    // Set Mock Variables
    const { decimals, currency } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      MOCK_TOTAL_INVENTORY_HOLDING_COST.number +
      0 +
      MOCK_TOTAL_PRODUCTION_COST.number +
      MOCK_TOTAL_UNIT_PRODUCTION_COST.number;
    // Get the Result from Formula Function
    const RESULT = GetTotalCost(
      MOCK_TOTAL_INVENTORY_HOLDING_COST,
      undefined,
      MOCK_TOTAL_PRODUCTION_COST,
      MOCK_TOTAL_UNIT_PRODUCTION_COST,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetAccountNumber(currency, GetFloatResult(EXPECTED, decimals)));
  });
});
