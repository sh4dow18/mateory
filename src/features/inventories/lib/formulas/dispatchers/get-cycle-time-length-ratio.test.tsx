// Get Cycle Time Length Ratio Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetCycleTimeLengthRatio as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetCycleTimeLengthRatio } from "./get-cycle-time-length-ratio";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Cycle Time Length Ratio Dispatcher Test Suite Mocks
vi.mock("../eoq-without-deficit", () => ({
  GetCycleTimeLengthRatio: vi.fn().mockReturnValue(3),
}));
// Get Cycle Time Length Ratio Dispatcher Test Suite
describe("GetCycleTimeLengthRatio dispatcher", () => {
  // Get Cycle Time Length Ratio Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EOQ Without Deficit with right props
  it("call eoq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetCycleTimeLengthRatio(MODELS_IDS.eoqWithoutDeficit, 40, MOCK_PARAMS);
    // Check if the EOQ Without Deficit Function was Called with right props
    expect(EOQWithoutDeficit).toHaveBeenCalledWith(40, MOCK_PARAMS);
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 2: Return undefined if the model does not match any case
  it("return undefined if the model does not match any case", () => {
    // Get Result from Dispatcher
    const RESULT = GetCycleTimeLengthRatio("not-exists-model", 0, MOCK_PARAMS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
