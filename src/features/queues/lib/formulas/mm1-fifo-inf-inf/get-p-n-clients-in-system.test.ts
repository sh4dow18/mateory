// Get Pn Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetPNClientsInSystem } from "./get-p-n-clients-in-system";
// Get Pn Clients in System Test Suite
describe("GetPNClientsInSystem", () => {
  // Get Pn Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    customersForPNCustomersInSystem: 3,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 0.7;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      (1 - MOCK_SYSTEM_UTIL_FACTOR) *
      Math.pow(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS.customersForPNCustomersInSystem);
    const RESULT = GetPNClientsInSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
