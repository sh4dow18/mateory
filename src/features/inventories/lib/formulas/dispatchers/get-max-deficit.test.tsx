// Get Max Deficit Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetMaxDeficit as EPQWithDeficit } from "../epq-with-deficit";
import { GetMaxDeficit as EOQWithDeficit } from "../eoq-with-deficit";
import { GetMaxDeficit } from "./get-max-deficit";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Max Deficit Dispatcher Test Suite Mocks
vi.mock("../epq-with-deficit", () => ({
  GetMaxDeficit: vi.fn().mockReturnValue(1),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetMaxDeficit: vi.fn().mockReturnValue(2),
}));
// Get Max Deficit Dispatcher Test Suite
describe("GetMaxDeficit dispatcher", () => {
  // Get Max Deficit Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxDeficit(MODELS_IDS.epqWithDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxDeficit(MODELS_IDS.eoqWithDeficit, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Return undefined if the model does not match any case
  it("return undefined if the model does not match any case", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxDeficit("not-exists-model", MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
