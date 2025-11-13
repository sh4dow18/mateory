// Get Expected time of Clients in the system Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeOfCustomersInSystem } from "./get-time-of-customers-in-system";
// Get Expected time of Clients in the system Test Suite
describe("GetTimeOfCustomersInSystem", () => {
  // Get Expected time of Clients in the system Test Suite Constants
  const MOCK_TIME_CUSTOMERS_IN_QUEUE = 1.25;
  const MOCK_PARAMS = {
    averageServiceRate: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { averageServiceRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = MOCK_TIME_CUSTOMERS_IN_QUEUE + 1 / averageServiceRate;
    const RESULT = GetTimeOfCustomersInSystem(
      MOCK_TIME_CUSTOMERS_IN_QUEUE,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
