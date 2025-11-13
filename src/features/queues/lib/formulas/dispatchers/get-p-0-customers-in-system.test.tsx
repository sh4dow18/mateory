// Get P0 Clients In System Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetP0ClientsinSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetP0ClientsinSystem as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetP0ClientsinSystem } from "./get-p-0-customers-in-system";
// Get P0 Clients In System Dispatcher Test Suite Mocks
vi.mock("../mms-fifo-inf-inf", () => ({
  GetP0ClientsinSystem: vi.fn().mockReturnValue(1),
}));
vi.mock("../mm1-fifo-k-inf", () => ({
  GetP0ClientsinSystem: vi.fn().mockReturnValue(2),
}));
// Get P0 Clients In System Dispatcher Test Suite
describe("GetP0ClientsinSystem dispatcher", () => {
  // Get P0 Clients In System Dispatcher Test Suite Constants
  const MOCK_PARAMS = { averageServiceRate: 6 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 3 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MMS_FIFO_INF_INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetP0ClientsinSystem(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(1);
  });
  // Test 2: Call MM1_FIFO_K_INF with right props
  it("call mm1 fifo k inf with right props", () => {
    const RESULT = GetP0ClientsinSystem(
      MODELS_IDS.mm1_fifo_k_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MM1_FIFO_K_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(2);
  });
  // Test 3: Return undefined if model does not exist
  it("return undefined if model does not exist", () => {
    const RESULT = GetP0ClientsinSystem(
      "not-exists-model",
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBeUndefined();
  });
});
