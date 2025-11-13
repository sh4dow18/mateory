// Get Cycle Time Length Ratio Formula Test Suite Requirements
import { GetFloatResult } from "@/shared/lib";
import { describe, expect, it } from "vitest";
import { GetCycleTimeLengthRatio } from "./get-cycle-time-length-ratio";
// Get Cycle Time Length Ratio Formula Test Suite
describe("GetCycleTimeLengthRatio", () => {
  // Get Cycle Time Length Ratio Formula Test Suite Constants
  const MOCK_PARAMS = {
    replenishmentTime: 12,
  };
  const MOCK_FREQUENCY = 4;
  // Test 1: Calc Correctly
  it("calc correctly", () => {
    // Get Params from Mock Params Variable
    const { replenishmentTime } = MOCK_PARAMS;
    // Set Expected Result
    const EXPECTED = replenishmentTime / MOCK_FREQUENCY;
    // Get the Result from Formula Function
    const RESULT = GetCycleTimeLengthRatio(MOCK_FREQUENCY, MOCK_PARAMS);
    // Check if the Result is the right one
    expect(RESULT).toBe(GetFloatResult(EXPECTED, 0));
  });
});
