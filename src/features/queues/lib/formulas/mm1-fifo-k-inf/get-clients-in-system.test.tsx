// Get Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetClientsInSystem } from "./get-clients-in-system";
// Get Clients in System Test Suite
describe("GetClientsInSystem", () => {
  // Get Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    queueSize: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: calc correctly
  it("calc correctly", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 0.6;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      MOCK_SYSTEM_UTIL_FACTOR / (1 - MOCK_SYSTEM_UTIL_FACTOR) -
      ((MOCK_PARAMS.queueSize + 1) * Math.pow(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS.queueSize + 1)) /
        (1 - Math.pow(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS.queueSize + 1));
    const RESULT = GetClientsInSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
  // Test 2: handles systemUtilFactor === 1
  it("handles system util factor equal to 1", () => {
    const MOCK_SYSTEM_UTIL_FACTOR = 1;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_PARAMS.queueSize / 2;
    const RESULT = GetClientsInSystem(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
