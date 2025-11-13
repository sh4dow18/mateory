// Get Clients in Queue Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetClientsInQueue } from "./get-clients-in-queue";
// Get Clients in Queue Test Suite
describe("GetClientsInQueue", () => {
  // Get Clients in Queue Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 4,
    averageServiceRate: 6,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { arrivalDistributionRate, averageServiceRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      Math.pow(arrivalDistributionRate, 2) /
      (averageServiceRate * (averageServiceRate - arrivalDistributionRate));
    const RESULT = GetClientsInQueue(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
