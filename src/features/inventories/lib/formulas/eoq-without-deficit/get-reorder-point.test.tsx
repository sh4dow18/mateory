// Get Reorder Point Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetReorderPoint } from "./get-reorder-point";
// Get Reorder Point Formula Test Suite
describe("GetReorderPoint", () => {
  // Get Reorder Point Formula Test Suite Constants
  const MOCK_PARAMS = {
    demand: 3000,
    replenishmentTime: 12,
  };
  const MOCK_SETTINGS = {
    decimals: 2,
  };
  const MOCK_OPTIMAL_PRODUCTION_LOT_SIZE = 500;
  const MOCK_CYCLE_TIME_LENGTH_RATIO = 0.5;
  // Test 1: Calc Correctly when replenishmentTime < frequency
  it("calc correctly when replenishment time is lower than frequency", () => {
    // Set Mock Variables
    const { replenishmentTime, demand } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const MOCK_FRECUENCY = 14;
    // Expected Result
    const EXPECTED = replenishmentTime * demand;
    // Get the Result from Formula Function
    const RESULT = GetReorderPoint(
      MOCK_OPTIMAL_PRODUCTION_LOT_SIZE,
      MOCK_FRECUENCY,
      MOCK_CYCLE_TIME_LENGTH_RATIO,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });

  // Test 2: Calc Correctly when replenishmentTime === frequency
  it("calc correctly when replenishmentTime is equal to frequency", () => {
    // Set Mock Variables
    const { decimals } = MOCK_SETTINGS;
    const MOCK_FRECUENCY = 12;
    const MOCK_CYCLE_TIME_LENGTH_RATIO = 0.5;
    // Expected Result
    const EXPECTED = MOCK_OPTIMAL_PRODUCTION_LOT_SIZE;
    // Get the Result from Formula Function
    const RESULT = GetReorderPoint(
      MOCK_OPTIMAL_PRODUCTION_LOT_SIZE,
      MOCK_FRECUENCY,
      MOCK_CYCLE_TIME_LENGTH_RATIO,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 3: Calc Correctly when replenishmentTime > frequency
  it("calc correctly when replenishmentTime is higher than frequency", () => {
    // Set Mock Variables
    const { replenishmentTime, demand } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const MOCK_FRECUENCY = 9;
    // Expected Result
    const EXPECTED =
      replenishmentTime * demand - MOCK_CYCLE_TIME_LENGTH_RATIO * MOCK_OPTIMAL_PRODUCTION_LOT_SIZE;
    // Get the Result from Formula Function
    const RESULT = GetReorderPoint(
      MOCK_OPTIMAL_PRODUCTION_LOT_SIZE,
      MOCK_FRECUENCY,
      MOCK_CYCLE_TIME_LENGTH_RATIO,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
