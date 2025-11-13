// Get Probability of 0 Clients in System Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetP0ClientsinSystem } from "./get-p-0-customers-in-system";
// Get Probability of 0 Clients in System Test Suite
describe("GetP0ClientsinSystem", () => {
  // Get Probability of 0 Clients in System Test Suite Constants
  const MOCK_PARAMS = {
    queueSize: 5,
  };
  const MOCK_SETTINGS = {
    decimals: 4,
  };
  // Test 1: Calc Correctly when systemUtilFactor !== 1
  it("calc correctly when systemUtilFactor is not 1", () => {
    // Mock System Utilization Factor
    const SYSTEM_UTIL_FACTOR = 0.8;
    // Get Params from Mock Params Variable
    const { queueSize } = MOCK_PARAMS;
    // Set Expected Result
    const FIRST_PART = 1 - SYSTEM_UTIL_FACTOR;
    const SECOND_PART = 1 - Math.pow(SYSTEM_UTIL_FACTOR, queueSize + 1);
    const EXPECTED = FIRST_PART / SECOND_PART;
    // Get the Result from Formula Function
    const RESULT = GetP0ClientsinSystem(SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 4));
  });
  // Test 2: Calc Correctly when systemUtilFactor === 1
  it("calc correctly when systemUtilFactor equals 1", () => {
    // Mock System Utilization Factor
    const SYSTEM_UTIL_FACTOR = 1;
    // Get Params from Mock Params Variable
    const { queueSize } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = 1 / (queueSize + 1);
    // Get the Result from Formula Function
    const RESULT = GetP0ClientsinSystem(SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 4));
  });
});
