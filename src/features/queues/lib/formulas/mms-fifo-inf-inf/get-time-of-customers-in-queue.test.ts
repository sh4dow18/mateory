// Get Time of Customers in Queue Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeOfCustomersInQueue } from "./get-time-of-customers-in-queue";
// Get Time of Customers in Queue Test Suite
describe("GetTimeOfCustomersInQueue", () => {
  // Get Time of Customers in Queue Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const MOCK_CLIENTS_QUEUE = 10;
    const { arrivalDistributionRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_CLIENTS_QUEUE / arrivalDistributionRate;
    const RESULT = GetTimeOfCustomersInQueue(MOCK_CLIENTS_QUEUE, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
