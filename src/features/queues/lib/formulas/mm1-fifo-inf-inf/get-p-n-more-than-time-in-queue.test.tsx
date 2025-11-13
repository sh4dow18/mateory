// Get Probability that it is more than t units of time in queue Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetPNMoreThanTimeInQueue } from "./get-p-n-more-than-time-in-queue";
// Get Probability that it is more than t units of time in queue Test Suite
describe("GetPNMoreThanTimeInQueue", () => {
  // Get Probability that it is more than t units of time in queue Test Suite Constants
  const MOCK_SYSTEM_UTIL_FACTOR = 0.7;
  const MOCK_PARAMS = {
    averageServiceRate: 5,
    timeForPNMoreThanNTimeInQueue: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { averageServiceRate, timeForPNMoreThanNTimeInQueue } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      MOCK_SYSTEM_UTIL_FACTOR *
      Math.pow(
        Math.E,
        -1 * averageServiceRate * (1 - MOCK_SYSTEM_UTIL_FACTOR) * timeForPNMoreThanNTimeInQueue,
      );
    const RESULT = GetPNMoreThanTimeInQueue(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
