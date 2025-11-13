// Get Time of Customers in Queue Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeOfCustomersInQueue } from "./get-time-of-customers-in-queue";
// Get Time of Customers in Queue Test Suite
describe("GetTimeOfCustomersInQueue", () => {
  // Get Time of Customers in Queue Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 4,
    averageServiceRate: 6,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const { arrivalDistributionRate, averageServiceRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      arrivalDistributionRate /
      (averageServiceRate * (averageServiceRate - arrivalDistributionRate));
    const RESULT = GetTimeOfCustomersInQueue(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
