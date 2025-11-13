// Get Pn More Than Time in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetPNMoreThanTimeInSystem } from "./get-p-n-more-than-time-in-system";
// Get Pn More Than Time in System Test Suite
describe("GetPNMoreThanTimeInSystem", () => {
  // Get Pn More Than Time in System Test Suite Constants
  const MOCK_PARAMS = {
    averageServiceRate: 5,
    timeForPNMoreThanNTimeInSystem: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 0.6;
    const { averageServiceRate, timeForPNMoreThanNTimeInSystem } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = Math.pow(
      Math.E,
      -1 * averageServiceRate * (1 - MOCK_SYSTEM_UTIL_FACTOR) * timeForPNMoreThanNTimeInSystem,
    );
    const RESULT = GetPNMoreThanTimeInSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
