// Get PN More Than Time In System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { GetFactorial } from "../../shared";
import { describe, expect, it, MockedFunction, vi } from "vitest";
import { GetPNMoreThanTimeInSystem } from "./get-p-n-more-than-time-in-system";
// Mock GetFactorial outside describe
vi.mock("../../shared", () => ({
  GetFactorial: vi.fn(),
}));
// Get PN More Than Time In System Test Suite
describe("GetPNMoreThanTimeInSystem", () => {
  // Get PN More Than Time In System Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 3,
    averageServiceRate: 5,
    timeForPNMoreThanNTimeInSystem: 2,
    numberOfServers: 2,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  const MOCK_SYSTEM_UTIL_FACTOR = 0.6;
  const MOCK_P0_CUSTOMERS_IN_SYSTEM = 0.25;
  // Test 1: calc correctly
  it("calc correctly", () => {
    (GetFactorial as MockedFunction<typeof GetFactorial>).mockReturnValue(2);
    const {
      arrivalDistributionRate,
      averageServiceRate,
      timeForPNMoreThanNTimeInSystem,
      numberOfServers,
    } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const TIME_UNITS = timeForPNMoreThanNTimeInSystem;
    // First Part
    const FIRST_POW = Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers);
    const FIRST_PART = MOCK_P0_CUSTOMERS_IN_SYSTEM * FIRST_POW;
    // Second Part
    const SECOND_POW_PART =
      numberOfServers - 1 - (arrivalDistributionRate / averageServiceRate) * TIME_UNITS;
    const SECOND_PART = 1 - Math.pow(Math.E, -1 * averageServiceRate * SECOND_POW_PART);
    // Third Part
    const THIRD_PART_FACTORIAL = 2;
    const THIRD_PART_SECOND_PART = 1 - MOCK_SYSTEM_UTIL_FACTOR;
    const THIRD_PART_THIRD_PART =
      numberOfServers - 1 - arrivalDistributionRate / averageServiceRate;
    const THIRD_PART = THIRD_PART_FACTORIAL * THIRD_PART_SECOND_PART * THIRD_PART_THIRD_PART;
    // Result
    const RESULT_POW = Math.pow(Math.E, -1 * averageServiceRate * TIME_UNITS);
    const RESULT_SECOND_PART = 1 + (FIRST_PART * SECOND_PART) / THIRD_PART;
    const EXPECTED = RESULT_POW * RESULT_SECOND_PART;
    const RESULT = GetPNMoreThanTimeInSystem(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CUSTOMERS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
