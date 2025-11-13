// Get PN More Than Time In System Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetPNMoreThanTimeInSystem as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetPNMoreThanTimeInSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNMoreThanTimeInSystem } from "./get-p-n-more-than-time-in-system";
// Get PN More Than Time In System Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-inf-inf", () => ({
  GetPNMoreThanTimeInSystem: vi.fn().mockReturnValue(1),
}));
vi.mock("../mms-fifo-inf-inf", () => ({
  GetPNMoreThanTimeInSystem: vi.fn().mockReturnValue(2),
}));
// Get PN More Than Time In System Dispatcher Test Suite
describe("GetPNMoreThanTimeInSystem dispatcher", () => {
  // Get PN More Than Time In System Dispatcher Test Suite Constants
  const MOCK_PARAMS = { arrivalDistributionRate: 3 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 2 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.7;
  const MOCK_P0_CLIENTS_IN_SYSTEM = 0.4;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1 FIFO INF INF with right props
  it("call mm1 fifo inf inf with right props", () => {
    const RESULT = GetPNMoreThanTimeInSystem(
      MODELS_IDS.mm1_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MM1_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(1);
  });
  // Test 2: Call MMS FIFO INF INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetPNMoreThanTimeInSystem(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0_CLIENTS_IN_SYSTEM,
    );
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(2);
  });
  // Test 3: Return undefined when model does not match
  it("return undefined when model does not match", () => {
    const RESULT = GetPNMoreThanTimeInSystem(
      "not-exists-model",
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0_CLIENTS_IN_SYSTEM,
    );
    expect(RESULT).toBeUndefined();
  });
});
