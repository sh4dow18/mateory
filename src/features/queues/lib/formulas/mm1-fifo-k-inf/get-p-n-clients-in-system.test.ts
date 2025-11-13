// Get Pn Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetPNClientsInSystem } from "./get-p-n-clients-in-system";
// Get Pn Clients in System Test Suite
describe("GetPNClientsInSystem", () => {
  // Get Pn Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    customersForPNCustomersInSystem: 3,
    queueSize: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.2;
    const { customersForPNCustomersInSystem, queueSize } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      ((1 - MOCK_P0_CLIENTS_IN_SYSTEM) *
        Math.pow(MOCK_P0_CLIENTS_IN_SYSTEM, customersForPNCustomersInSystem)) /
      (1 - Math.pow(MOCK_P0_CLIENTS_IN_SYSTEM, queueSize + 1));
    const RESULT = GetPNClientsInSystem(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 2: handles 0 customers or systemUtilFactor === 1
  it("handles 0 customers or systemUtilFactor equal to 1", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 1;
    const MOCK_P0_CLIENTS_IN_SYSTEM = 0.3;
    const MOCK_PARAMS_ZERO = {
      customersForPNCustomersInSystem: 0,
      queueSize: 5,
    };
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_P0_CLIENTS_IN_SYSTEM;
    const RESULT = GetPNClientsInSystem(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS_ZERO,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
