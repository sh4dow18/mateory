// Get Max Inventory Level Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetMaxInventoryLevel as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetMaxInventoryLevel as EPQWithDeficit } from "../epq-with-deficit";
import { GetMaxInventoryLevel as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetMaxInventoryLevel as EOQWithDeficit } from "../eoq-with-deficit";
import { GetMaxInventoryLevel } from "./get-max-inventory-level";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Max Inventory Level Dispatcher Test Suite Mocks
vi.mock("../epq-without-deficit", () => ({
  GetMaxInventoryLevel: vi.fn().mockReturnValue(1),
}));
vi.mock("../epq-with-deficit", () => ({
  GetMaxInventoryLevel: vi.fn().mockReturnValue(2),
}));
vi.mock("../eoq-without-deficit", () => ({
  GetMaxInventoryLevel: vi.fn().mockReturnValue(3),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetMaxInventoryLevel: vi.fn().mockReturnValue(4),
}));
// Get Max Inventory Level Dispatcher Test Suite
describe("GetMaxInventoryLevel dispatcher", () => {
  // Get Max Inventory Level Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ Without Deficit with right props
  it("call epq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxInventoryLevel(
      MODELS_IDS.epqWithoutDeficit,
      50,
      100,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ Without Deficit Function was Called with right props
    expect(EPQWithoutDeficit).toHaveBeenCalledWith(50, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxInventoryLevel(
      MODELS_IDS.epqWithDeficit,
      60,
      100,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(60, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Call EOQ Without Deficit with right props
  it("call eoq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxInventoryLevel(
      MODELS_IDS.eoqWithoutDeficit,
      undefined,
      150,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ Without Deficit Function was Called with right props
    expect(EOQWithoutDeficit).toHaveBeenCalledWith(150, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 4: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetMaxInventoryLevel(
      MODELS_IDS.eoqWithDeficit,
      70,
      200,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(70, 200, MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(4);
  });
  // Test 5: Throw an error if the model does not exists
  it("throw an error if the model does not exists", () => {
    // Check if the dispatcher throw an error when model does not exists
    expect(() =>
      GetMaxInventoryLevel("not-exists-model", 0, 0, MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo no Encontrado");
  });
});
