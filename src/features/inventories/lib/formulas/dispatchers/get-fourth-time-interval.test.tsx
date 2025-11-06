// Get Fourth Time Interval Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetFourthTimeInterval as EPQWithDeficit } from "../epq-with-deficit";
import { GetFourthTimeInterval } from "./get-fourth-time-interval";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Fourth Time Interval Dispatcher Test Suite Mocks
vi.mock("../epq-with-deficit", () => ({
  GetFourthTimeInterval: vi.fn().mockReturnValue(2),
}));
// Get Fourth Time Interval Dispatcher Test Suite
describe("GetFourthTimeInterval dispatcher", () => {
  // Get Fourth Time Interval Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetFourthTimeInterval(
      MODELS_IDS.epqWithDeficit,
      100,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(100, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 2: Return undefined if the model does not match any case
  it("return undefined if the model does not match any case", () => {
    // Get Result from Dispatcher
    const RESULT = GetFourthTimeInterval("not-exists-model", 50, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
  // Test 3: Return undefined if maxDeficit is not a number
  it("return undefined if max deficit is not a number", () => {
    // Get Result from Dispatcher
    const RESULT = GetFourthTimeInterval(
      MODELS_IDS.epqWithDeficit,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
