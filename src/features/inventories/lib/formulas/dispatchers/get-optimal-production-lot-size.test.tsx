// Get Optimal Production Lot Size Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/inventories/config";
import { GetOptimalProductionLotSize as EPQWithoutDeficit } from "../epq-without-deficit";
import { GetOptimalProductionLotSize as EPQWithDeficit } from "../epq-with-deficit";
import { GetOptimalProductionLotSize as EOQWithoutDeficit } from "../eoq-without-deficit";
import { GetOptimalProductionLotSize as EOQWithDeficit } from "../eoq-with-deficit";
import { GetOptimalProductionLotSize } from "./get-optimal-production-lot-size";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Optimal Production Lot Size Dispatcher Test Suite Mocks
vi.mock("../epq-without-deficit", () => ({
  GetOptimalProductionLotSize: vi.fn().mockReturnValue(1),
}));
vi.mock("../epq-with-deficit", () => ({
  GetOptimalProductionLotSize: vi.fn().mockReturnValue(2),
}));
vi.mock("../eoq-without-deficit", () => ({
  GetOptimalProductionLotSize: vi.fn().mockReturnValue(3),
}));
vi.mock("../eoq-with-deficit", () => ({
  GetOptimalProductionLotSize: vi.fn().mockReturnValue(4),
}));
// Get Optimal Production Lot Size Dispatcher Test Suite
describe("GetOptimalProductionLotSize dispatcher", () => {
  // Get Optimal Production Lot Size Dispatcher Test Suite Constants
  const MOCK_PARAMS = { demand: 10 } as FormVariables;
  const MOCK_SETTINGS = { setupCost: 5 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call EPQ Without Deficit with right props
  it("call epq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetOptimalProductionLotSize(
      MODELS_IDS.epqWithoutDeficit,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ Without Deficit Function was Called with right props
    expect(EPQWithoutDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call EPQ With Deficit with right props
  it("call epq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetOptimalProductionLotSize(
      MODELS_IDS.epqWithDeficit,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EPQ With Deficit Function was Called with right props
    expect(EPQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Call EOQ Without Deficit with right props
  it("call eoq without deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetOptimalProductionLotSize(
      MODELS_IDS.eoqWithoutDeficit,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ Without Deficit Function was Called with right props
    expect(EOQWithoutDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 4: Call EOQ With Deficit with right props
  it("call eoq with deficit with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetOptimalProductionLotSize(
      MODELS_IDS.eoqWithDeficit,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the EOQ With Deficit Function was Called with right props
    expect(EOQWithDeficit).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(4);
  });
  // Test 5: Throw an error if the model does not exists
  it("throw an error if the model does not exists", () => {
    // Check if the dispatcher throw an error when model does not exists
    expect(() =>
      GetOptimalProductionLotSize("not-exists-model", MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo no encontrado");
  });
});
