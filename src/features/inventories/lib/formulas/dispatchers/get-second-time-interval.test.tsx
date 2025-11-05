// Get Second Time Interval Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetSecondTimeInterval as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetSecondTimeInterval as EPQWithDeficit } from "../epq-with-deficit";
import { GetSecondTimeInterval as EOQWithDeficit } from "../eoq-with-deficit";
import { GetSecondTimeInterval } from "./get-second-time-interval";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Second Time Interval Dispatcher Test Suite Mocks
vi.mock("../epq-without-deficit", () => ({
  GetSecondTimeInterval: vi.fn().mockReturnValue(1),
}));
vi.mock("../epq-with-deficit", () => ({
  GetSecondTimeInterval: vi.fn().mockReturnValue(2),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetSecondTimeInterval: vi.fn().mockReturnValue(3),
}));
// Get Second Time Interval Dispatcher Test Suite
describe("GetSecondTimeInterval dispatcher", () => {
  // Get Second Time Interval Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ Without Deficit with right props
  it("call epq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetSecondTimeInterval(MODELS_IDS.epqWithoutDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EPQ Without Deficit Function was Called with right props
    expect(EPQWithoutDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetSecondTimeInterval(MODELS_IDS.epqWithDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetSecondTimeInterval(MODELS_IDS.eoqWithDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 4: Return undefined if model does not match
  it("return undefined if the model does not match", () => {
    // Get Result from Dispatcher
    const RESULT = GetSecondTimeInterval("not-exists-model", MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
