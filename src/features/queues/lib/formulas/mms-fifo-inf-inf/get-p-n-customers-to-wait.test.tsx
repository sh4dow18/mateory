// Get Probability that the client will have to wait Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { GetFactorial } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetPNCustomerHaveToWait } from "./get-p-n-customers-to-wait";
// Get Probability that the client will have to wait Test Suite
describe("GetPNCustomerHaveToWait", () => {
  // Get Probability that the client will have to wait Test Suite Constants
  const MOCK_SYSTEM_UTIL_FACTOR = 0.85;
  const MOCK_P0_CUSTOMERS_IN_SYSTEM = 0.25;
  const MOCK_PARAMS = {
    arrivalDistributionRate: 4,
    averageServiceRate: 5,
    numberOfServers: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { arrivalDistributionRate, averageServiceRate, numberOfServers } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      (Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) /
        (GetFactorial(numberOfServers) * (1 - MOCK_SYSTEM_UTIL_FACTOR))) *
      MOCK_P0_CUSTOMERS_IN_SYSTEM;
    const RESULT = GetPNCustomerHaveToWait(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CUSTOMERS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
