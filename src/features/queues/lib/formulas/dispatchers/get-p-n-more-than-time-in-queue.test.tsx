// Get PN More Than Time In Queue Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetPNMoreThanTimeInQueue as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { FormVariables } from "@/widgets/forms/config/form";
import { GetPNMoreThanTimeInQueue } from "./get-p-n-more-than-time-in-queue";
// Get PN More Than Time In Queue Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-inf-inf", () => ({
  GetPNMoreThanTimeInQueue: vi.fn().mockReturnValue(1),
}));
// Get PN More Than Time In Queue Dispatcher Test Suite
describe("GetPNMoreThanTimeInQueue dispatcher", () => {
  // Get PN More Than Time In Queue Dispatcher Test Suite Constants
  const MOCK_PARAMS = { averageServiceRate: 10 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 2 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1_FIFO_INF_INF with right props
  it("call mm1 fifo inf inf with right props", () => {
    const RESULT = GetPNMoreThanTimeInQueue(
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
  // Test 2: Return undefined when model does not match
  it("return undefined when model does not match", () => {
    const RESULT = GetPNMoreThanTimeInQueue(
      "not-exists-model",
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBeUndefined();
  });
});
