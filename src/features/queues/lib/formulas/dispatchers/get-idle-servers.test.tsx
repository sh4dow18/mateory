// Get Idle Servers Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetIdleServers as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetIdleServers } from "./get-idle-servers";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Idle Servers Dispatcher Test Suite Mocks
vi.mock("../mms-fifo-inf-inf", () => ({
  GetIdleServers: vi.fn().mockReturnValue(1),
}));
// Get Idle Servers Dispatcher Test Suite
describe("GetIdleServers dispatcher", () => {
  // Get Idle Servers Dispatcher Test Suite Constants
  const MOCK_PARAMS = { arrivalDistributionRate: 2 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 3 } as FormVariables;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MMS FIFO INF INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetIdleServers(MODELS_IDS.mms_fifo_inf_inf, 1, MOCK_PARAMS, MOCK_SETTINGS);
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(1, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(1);
  });
  // Test 2: Return undefined when model does not match
  it("return undefined when model does not match", () => {
    const RESULT = GetIdleServers("invalid-model", 1, MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBeUndefined();
  });
});
