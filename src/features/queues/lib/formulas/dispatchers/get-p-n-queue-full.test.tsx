// Get Probability of Queue Full Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetPNQueueFull as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
import { GetPNQueueFull } from "./get-p-n-queue-full";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Probability of Queue Full Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-k-inf", () => ({
  GetPNQueueFull: vi.fn().mockReturnValue(1),
}));
// Get Probability of Queue Full Dispatcher Test Suite
describe("GetPNQueueFull dispatcher", () => {
  // Get Probability of Queue Full Dispatcher Test Suite Constants
  const MOCK_PARAMS = { arrivalDistributionRate: 4 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 2 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1 FIFO K INF with right props
  it("call mm1 fifo k inf with right props", () => {
    const RESULT = GetPNQueueFull(MODELS_IDS.mm1_fifo_k_inf, 1, MOCK_PARAMS, MOCK_SETTINGS, 2);
    expect(MM1_FIFO_K_INF).toHaveBeenCalledWith(1, 2, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(1);
  });
  // Test 2: Return undefined when p0ClientsInSystem is undefined
  it("return undefined when p0ClientsInSystem is undefined", () => {
    const RESULT = GetPNQueueFull(MODELS_IDS.mm1_fifo_k_inf, 1, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBeUndefined();
  });
  // Test 3: Return undefined when model does not match
  it("return undefined when model does not match", () => {
    const RESULT = GetPNQueueFull("no-exists-model", 1, MOCK_PARAMS, MOCK_SETTINGS, 2);
    expect(RESULT).toBeUndefined();
  });
});
