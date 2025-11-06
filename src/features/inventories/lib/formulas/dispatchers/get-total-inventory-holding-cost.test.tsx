// Get Total Inventory Holding Cost Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetTotalInventoryHoldingCost as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetTotalInventoryHoldingCost as EPQWithDeficit } from "../epq-with-deficit";
import { GetTotalInventoryHoldingCost as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetTotalInventoryHoldingCost as EOQWithDeficit } from "../eoq-with-deficit";
import { GetTotalInventoryHoldingCost } from "./get-total-inventory-holding-cost";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Total Inventory Holding Cost Dispatcher Test Suite Mocks
vi.mock("../epq-without-deficit", () => ({
  GetTotalInventoryHoldingCost: vi.fn().mockReturnValue(1),
}));
vi.mock("../epq-with-deficit", () => ({
  GetTotalInventoryHoldingCost: vi.fn().mockReturnValue(2),
}));
vi.mock("../eoq-without-deficit", () => ({
  GetTotalInventoryHoldingCost: vi.fn().mockReturnValue(3),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetTotalInventoryHoldingCost: vi.fn().mockReturnValue(4),
}));
// Get Total Inventory Holding Cost Dispatcher Test Suite
describe("GetTotalInventoryHoldingCost dispatcher", () => {
  // Get Total Inventory Holding Cost Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 100 } as FormVariables;
  const MOCK_SETTINGS = { holdingCost: 10 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ Without Deficit with right props
  it("call epq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalInventoryHoldingCost(
      MODELS_IDS.epqWithoutDeficit,
      200,
      50,
      25,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ Without Deficit Function was Called with right props
    expect(EPQWithoutDeficit).toHaveBeenCalledWith(200, 50, 25, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalInventoryHoldingCost(
      MODELS_IDS.epqWithDeficit,
      150,
      40,
      20,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(150, 40, 20, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Call EOQ Without Deficit with right props
  it("call eoq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalInventoryHoldingCost(
      MODELS_IDS.eoqWithoutDeficit,
      120,
      30,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ Without Deficit Function was Called with right props
    expect(EOQWithoutDeficit).toHaveBeenCalledWith(120, 30, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 4: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetTotalInventoryHoldingCost(
      MODELS_IDS.eoqWithDeficit,
      90,
      25,
      undefined,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(90, 25, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(4);
  });
  // Test 5: Throw an error if the model does not exists
  it("throw an error if the model does not exists", () => {
    // Check if the dispatcher throw an error when model does not exists
    expect(() =>
      GetTotalInventoryHoldingCost("not-exists-model", 0, 0, undefined, MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo no Encontrado");
  });
});
