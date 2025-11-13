// Get System Utilization Factor Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetSystemUtilizationFactor as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetSystemUtilizationFactor as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetSystemUtilizationFactor as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
import { GetSystemUtilizationFactor } from "./get-system-utilization-factor";
import { FormVariables } from "@/widgets/forms/config/form";
// Get System Utilization Factor Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-inf-inf", () => ({
  GetSystemUtilizationFactor: vi.fn().mockReturnValue(1),
}));
vi.mock("../mms-fifo-inf-inf", () => ({
  GetSystemUtilizationFactor: vi.fn().mockReturnValue(2),
}));
vi.mock("../mm1-fifo-k-inf", () => ({
  GetSystemUtilizationFactor: vi.fn().mockReturnValue(3),
}));
// Get System Utilization Factor Dispatcher Test Suite
describe("GetSystemUtilizationFactor dispatcher", () => {
  // Get System Utilization Factor Dispatcher Test Suite Constants
  const MOCK_PARAMS = { arrivalDistributionRate: 5 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 4 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1 FIFO INF INF with right props
  it("call mm1 fifo inf inf with right props", () => {
    const RESULT = GetSystemUtilizationFactor(
      MODELS_IDS.mm1_fifo_inf_inf,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MM1_FIFO_INF_INF).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(1);
  });
  // Test 2: Call MMS FIFO INF INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetSystemUtilizationFactor(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(2);
  });
  // Test 3: Call MM1 FIFO K INF with right props
  it("call mm1 fifo k inf with right props", () => {
    const RESULT = GetSystemUtilizationFactor(
      MODELS_IDS.mm1_fifo_k_inf,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MM1_FIFO_K_INF).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(3);
  });
  // Test 4: Throw an error if the model does not exist
  it("throw an error if the model does not exist", () => {
    expect(() =>
      GetSystemUtilizationFactor("not-exists-model", MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo No Encontrado");
  });
});
