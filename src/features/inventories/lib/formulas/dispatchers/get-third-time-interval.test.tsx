// Get Third Time Interval Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetThirdTimeInterval as EPQWithoutDeficit } from "../epq-with-deficit";
import { GetThirdTimeInterval } from "./get-third-time-interval";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Third Time Interval Dispatcher Test Suite Mocks
vi.mock("../epq-with-deficit", () => ({
  GetThirdTimeInterval: vi.fn().mockReturnValue(1),
}));
// Get Third Time Interval Dispatcher Test Suite
describe("GetThirdTimeInterval dispatcher", () => {
  // Get Third Time Interval Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 15 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 8 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetThirdTimeInterval(MODELS_IDS.epqWithDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithoutDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Return undefined if model does not match
  it("return undefined if the model does not match", () => {
    // Get Result from Dispatcher
    const RESULT = GetThirdTimeInterval(MODELS_IDS.eoqWithoutDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
