// Get Time of Customers in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeOfCustomersInSystem } from "./get-time-of-customers-in-system";
// Get Time of Customers in System Test Suite
describe("GetTimeOfCustomersInSystem", () => {
  // Get Time of Customers in System Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 3,
    averageServiceRate: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const { arrivalDistributionRate, averageServiceRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = 1 / (averageServiceRate - arrivalDistributionRate);
    const RESULT = GetTimeOfCustomersInSystem(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
