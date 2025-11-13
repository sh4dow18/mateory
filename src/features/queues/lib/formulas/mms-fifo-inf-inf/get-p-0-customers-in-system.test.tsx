// Get Probability of 0 Clients in System (Multiple Servers) Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { GetFactorial } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetP0ClientsinSystem } from "./get-p-0-customers-in-system";
// Get Probability of 0 Clients in System (Multiple Servers) Test Suite
describe("GetP0ClientsinSystem", () => {
  // Get Probability of 0 Clients in System Test Suite Constants
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
    const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
    const { arrivalDistributionRate, averageServiceRate, numberOfServers } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    let sum = 0;
    for (let i = 0; i < numberOfServers; i++) {
      sum += Math.pow(arrivalDistributionRate / averageServiceRate, i) / GetFactorial(i);
    }
    const EXPECTED =
      1 /
      ((Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) /
        GetFactorial(numberOfServers)) *
        (1 / (1 - MOCK_SYSTEM_UTIL_FACTOR)) +
        sum);
    const RESULT = GetP0ClientsinSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 2: Should handle small number of servers correctly
  it("handles small number of servers correctly", () => {
    const MOCK_SMALL_PARAMS = {
      arrivalDistributionRate: 3,
      averageServiceRate: 6,
      numberOfServers: 1,
    };
    const MOCK_SYSTEM_UTIL_FACTOR = 0.5;
    const { arrivalDistributionRate, averageServiceRate, numberOfServers } = MOCK_SMALL_PARAMS;
    let sum = 0;
    for (let i = 0; i < numberOfServers; i++) {
      sum += Math.pow(arrivalDistributionRate / averageServiceRate, i) / GetFactorial(i);
    }
    const EXPECTED =
      1 /
      ((Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) /
        GetFactorial(numberOfServers)) *
        (1 / (1 - MOCK_SYSTEM_UTIL_FACTOR)) +
        sum);
    const RESULT = GetP0ClientsinSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_SMALL_PARAMS, MOCK_SETTINGS);
    const { decimals } = MOCK_SETTINGS;
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
