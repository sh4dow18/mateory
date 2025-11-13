// Get Average number of unoccupied servers Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetIdleServers } from "./get-idle-servers";
// Get Average number of unoccupied servers Test Suite
describe("GetIdleServers", () => {
  // Get Average number of unoccupied servers Test Suite Constants
  const MOCK_SYSTEM_UTIL_FACTOR = 0.75;
  const MOCK_PARAMS = {
    numberOfServers: 8,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { numberOfServers } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = (1 - MOCK_SYSTEM_UTIL_FACTOR) * numberOfServers;
    const RESULT = GetIdleServers(MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
