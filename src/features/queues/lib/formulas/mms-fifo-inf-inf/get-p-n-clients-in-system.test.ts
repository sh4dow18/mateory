// Get Pn Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it, vi } from "vitest";
import { GetFactorial } from "../../shared";
import { GetPNClientsInSystem } from "./get-p-n-clients-in-system";
// Mock GetFactorial
vi.mock("../../shared", () => ({
  GetFactorial: vi.fn((n) =>
    n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b),
  ),
}));
// Get Pn Clients in System Test Suite
describe("GetPNClientsInSystem", () => {
  // Get Pn Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 6,
    averageServiceRate: 8,
    customersForPNCustomersInSystem: 3,
    numberOfServers: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: calc correctly when NUMBER_OF_CUSTOMERS <= numberOfServers
  it("calc correctly when NUMBER_OF_CUSTOMERS < numberOfServers", () => {
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.25;
    const { arrivalDistributionRate, averageServiceRate, customersForPNCustomersInSystem } =
      MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      (Math.pow(arrivalDistributionRate / averageServiceRate, customersForPNCustomersInSystem) /
        GetFactorial(customersForPNCustomersInSystem)) *
      MOCK_P0_CLIENTS_IN_SYSTEM;
    const RESULT = GetPNClientsInSystem(MOCK_P0_CLIENTS_IN_SYSTEM, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 2: calc correctly when NUMBER_OF_CUSTOMERS > numberOfServers
  it("calc correctly when NUMBER_OF_CUSTOMERS > numberOfServers", () => {
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.25;
    const MOCK_PARAMS_EXTENDED = {
      ...MOCK_PARAMS,
      customersForPNCustomersInSystem: 6,
    };
    const {
      arrivalDistributionRate,
      averageServiceRate,
      customersForPNCustomersInSystem,
      numberOfServers,
    } = MOCK_PARAMS_EXTENDED;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      (Math.pow(arrivalDistributionRate / averageServiceRate, customersForPNCustomersInSystem) /
        (GetFactorial(numberOfServers) *
          Math.pow(numberOfServers, customersForPNCustomersInSystem - numberOfServers))) *
      MOCK_P0_CLIENTS_IN_SYSTEM;
    const RESULT = GetPNClientsInSystem(
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS_EXTENDED,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 3: handles NUMBER_OF_CUSTOMERS === 0
  it("calc correctly when NUMBER_OF_CUSTOMERS equal to 0", () => {
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.4;
    const MOCK_PARAMS_ZERO = {
      ...MOCK_PARAMS,
      customersForPNCustomersInSystem: 0,
    };
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_P0_CLIENTS_IN_SYSTEM;
    const RESULT = GetPNClientsInSystem(MOCK_P0_CLIENTS_IN_SYSTEM, MOCK_PARAMS_ZERO, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
