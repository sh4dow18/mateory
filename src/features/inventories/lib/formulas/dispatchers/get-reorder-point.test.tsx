// Get Reorder Point Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetReorderPoint as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetReorderPoint } from "./get-reorder-point";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Reorder Point Dispatcher Test Suite Mocks
vi.mock("../eoq-without-deficit", () => ({
  GetReorderPoint: vi.fn().mockReturnValue(1),
}));
// Get Reorder Point Dispatcher Test Suite
describe("GetReorderPoint dispatcher", () => {
  // Get Reorder Point Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EOQ Without Deficit with right props
  it("call eoq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetReorderPoint(
      MODELS_IDS.eoqWithoutDeficit,
      100,
      20,
      0.5,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ Without Deficit Function was Called with right props
    expect(EOQWithoutDeficit).toHaveBeenCalledWith(100, 20, 0.5, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Return undefined if cycleTimeLengthRatio is not a number
  it("return undefined if cycleTimeLengthRatio is not a number", () => {
    // Get Result from Dispatcher
    const RESULT = GetReorderPoint(
      MODELS_IDS.eoqWithoutDeficit,
      100,
      20,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
  // Test 3: Return undefined if the model does not match
  it("return undefined if the model does not match", () => {
    // Get Result from Dispatcher
    const RESULT = GetReorderPoint("not-exists-model", 100, 20, 0.5, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
