// Get Expected Number of Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetClientsInSystem } from "./get-clients-in-system";
// Get Expected Number of Clients in System Test Suite
describe("GetClientsInSystem", () => {
  // Get Expected Number of Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 3,
    averageServiceRate: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const MOCK_CLIENTS_IN_QUEUE = 1.5;
    const { arrivalDistributionRate, averageServiceRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_CLIENTS_IN_QUEUE + arrivalDistributionRate / averageServiceRate;
    const RESULT = GetClientsInSystem(MOCK_CLIENTS_IN_QUEUE, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
