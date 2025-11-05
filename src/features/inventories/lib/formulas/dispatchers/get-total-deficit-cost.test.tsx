// Get Total Deficit Cost Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetTotalDeficitCost as EPQWithDeficit } from "../epq-with-deficit";
import { GetTotalDeficitCost as EOQWithDeficit } from "../eoq-with-deficit";
import { GetTotalDeficitCost } from "./get-total-deficit-cost";
// Get Total Deficit Cost Dispatcher Test Suite Mocks
vi.mock("../epq-with-deficit", () => ({
  GetTotalDeficitCost: vi.fn().mockReturnValue(1),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetTotalDeficitCost: vi.fn().mockReturnValue(2),
}));
// Get Total Deficit Cost Dispatcher Test Suite
describe("GetTotalDeficitCost dispatcher", () => {
  // Get Total Deficit Cost Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 100 };
  const MOCK_SETTINGS = { holdingCost: 10 };
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalDeficitCost(
      MODELS_IDS.epqWithDeficit,
      50,
      undefined,
      20,
      30,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(50, 20, 30, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalDeficitCost(
      MODELS_IDS.eoqWithDeficit,
      40,
      10,
      undefined,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(40, 10, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Return undefined if the model does not match or missing params
  it("return undefined if the model does not match or missing params", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalDeficitCost(
      MODELS_IDS.eoqWithoutDeficit,
      undefined,
      undefined,
      undefined,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is undefined
    expect(RESULT).toBeUndefined();
  });
});
