// Get Total Cost Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTotalCost } from "./get-total-cost";
// Get Total Cost Formula Test Suite
describe("GetTotalCost", () => {
  // Get Total Cost Formula Test Suite Constants
  const MOCK_TOTAL_INVENTORY_HOLDING_COST = 100;
  const MOCK_TOTAL_DEFICIT_COST = 50;
  const MOCK_TOTAL_PRODUCTION_COST = 200;
  const MOCK_TOTAL_UNIT_PRODUCTION_COST = 25;
  const MOCK_SETTINGS = { decimals: 2, currency: 2 };
  // Test 1: Calc Correctly with Total Deficit Cost
  it("calc correctly with total deficit cost", () => {
    // Set Mock Variables
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      MOCK_TOTAL_INVENTORY_HOLDING_COST +
      MOCK_TOTAL_DEFICIT_COST +
      MOCK_TOTAL_PRODUCTION_COST +
      MOCK_TOTAL_UNIT_PRODUCTION_COST;
    // Get the Result from Formula Function
    const RESULT = GetTotalCost(
      MOCK_TOTAL_INVENTORY_HOLDING_COST,
      MOCK_TOTAL_DEFICIT_COST,
      MOCK_TOTAL_PRODUCTION_COST,
      MOCK_TOTAL_UNIT_PRODUCTION_COST,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 2: Calc Correctly without Total Deficit Cost
  it("calc correctly without total deficit cost", () => {
    // Set Mock Variables
    const { decimals } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      MOCK_TOTAL_INVENTORY_HOLDING_COST +
      0 +
      MOCK_TOTAL_PRODUCTION_COST +
      MOCK_TOTAL_UNIT_PRODUCTION_COST;
    // Get the Result from Formula Function
    const RESULT = GetTotalCost(
      MOCK_TOTAL_INVENTORY_HOLDING_COST,
      undefined,
      MOCK_TOTAL_PRODUCTION_COST,
      MOCK_TOTAL_UNIT_PRODUCTION_COST,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
