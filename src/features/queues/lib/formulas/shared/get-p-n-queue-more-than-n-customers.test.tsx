// Get Probability of having a queue of more than n clients Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetPNQueueOfMoreThanCustomers } from "./get-p-n-queue-more-than-n-customers";
// Get Probability of having a queue of more than n clients Test Suite
describe("GetPNQueueOfMoreThanCustomers", () => {
  // Get Probability of having a queue of more than n clients Test Suite Constants
  const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
  const MOCK_PARAMS = {
    customersForPNMoreThanNCustomers: 4,
  };
  const MOCK_SETTINGS = {
    decimals: 3,
  };
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    const { customersForPNMoreThanNCustomers } = MOCK_PARAMS;
    const { decimals } = MOCK_SETTINGS;
    const EXPECTED = Math.pow(MOCK_SYSTEM_UTIL_FACTOR, customersForPNMoreThanNCustomers + 1);
    const RESULT = GetPNQueueOfMoreThanCustomers(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(GetFloatResult(EXPECTED, decimals));
  });
});
