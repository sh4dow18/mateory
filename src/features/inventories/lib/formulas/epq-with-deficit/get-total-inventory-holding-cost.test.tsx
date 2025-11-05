// Get Total Inventory Holding Cost Formula Test Suite Requirements
import { GetFloatResult, GetAccountNumber } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetTotalInventoryHoldingCost } from "./get-total-inventory-holding-cost";
// Get Total Inventory Holding Cost Formula Test Suite
describe("GetTotalInventoryHoldingCost", () => {
  // Get Total Inventory Holding Cost Formula Test Suite Constants
  const MOCK_PARAMS = {
    inventoryHoldingCost: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
    currency: 1,
  };
  const MOCK_MAX_INVENTORY_LEVEL = 400;
  const MOCK_FIRST_TIME_INTERVAL = 5;
  const MOCK_SECOND_TIME_INTERVAL = 3;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params and Settings from Mock Variables
    const { inventoryHoldingCost } = MOCK_PARAMS;
    const { decimals, currency } = MOCK_SETTINGS;
    // Set Expected Result
    const EXPECTED =
      (inventoryHoldingCost *
        MOCK_MAX_INVENTORY_LEVEL *
        (MOCK_FIRST_TIME_INTERVAL + MOCK_SECOND_TIME_INTERVAL)) /
      2;
    const FLOAT_RESULT = GetFloatResult(EXPECTED, decimals);
    const EXPECTED_STRING = GetAccountNumber(currency, FLOAT_RESULT);
    // Get the Result from Formula Function
    const RESULT = GetTotalInventoryHoldingCost(
      MOCK_MAX_INVENTORY_LEVEL,
      MOCK_FIRST_TIME_INTERVAL,
      MOCK_SECOND_TIME_INTERVAL,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT.number).toBe(FLOAT_RESULT);
    expect(RESULT.string).toBe(EXPECTED_STRING);
  });
});
