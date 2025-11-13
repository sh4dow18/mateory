// Get Clients in Queue (Multiple Servers) Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { GetFactorial } from "../../shared";
import { describe, expect, it } from "vitest";
import { GetClientsInQueue } from "./get-clients-in-queue";
// Get Clients in Queue (Multiple Servers) Test Suite
describe("GetClientsInQueue", () => {
  // Get Clients in Queue Test Suite Constants
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
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.2;
    const { arrivalDistributionRate, averageServiceRate, numberOfServers } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      ((Math.pow(arrivalDistributionRate / averageServiceRate, numberOfServers) *
        MOCK_SYSTEM_UTIL_FACTOR) /
        (GetFactorial(numberOfServers) * Math.pow(1 - MOCK_SYSTEM_UTIL_FACTOR, 2))) *
      MOCK_P0_CLIENTS_IN_SYSTEM;
    const RESULT = GetClientsInQueue(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
