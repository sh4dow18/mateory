// Get Time of Customers in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetTimeOfCustomersInSystem } from "./get-time-of-customers-in-system";
// Get Time of Customers in System Test Suite
describe("GetTimeOfCustomersInSystem", () => {
  // Get Time of Customers in System Test Suite Constants
  const MOCK_PARAMS = {
    arrivalDistributionRate: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  const MOCK_CUSTOMERS_IN_SYSTEM = 10;
  const MOCK_P_QUEUE_CUSTOMERS_IN_SYSTEM = 0.25;
  // Test 1: calc correctly
  it("calc correctly", () => {
    const { arrivalDistributionRate } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED =
      MOCK_CUSTOMERS_IN_SYSTEM / (arrivalDistributionRate * (1 - MOCK_P_QUEUE_CUSTOMERS_IN_SYSTEM));
    const RESULT = GetTimeOfCustomersInSystem(
      MOCK_CUSTOMERS_IN_SYSTEM,
      MOCK_P_QUEUE_CUSTOMERS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
