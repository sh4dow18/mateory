// Get Clients In System Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetClientsInSystem as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetClientsInSystem as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetClientsInSystem as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
import { GetClientsInSystem } from "./get-clients-in-system";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Clients In System Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-inf-inf", () => ({
  GetClientsInSystem: vi.fn().mockReturnValue(1),
}));
vi.mock("../mms-fifo-inf-inf", () => ({
  GetClientsInSystem: vi.fn().mockReturnValue(2),
}));
vi.mock("../mm1-fifo-k-inf", () => ({
  GetClientsInSystem: vi.fn().mockReturnValue(3),
}));
// Get Clients In System Dispatcher Test Suite
describe("GetClientsInSystem dispatcher", () => {
  // Get Clients In System Dispatcher Test Suite Constants
  const MOCK_PARAMS = { averageServiceRate: 5 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 3 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.7;
  const MOCK_CLIENTS_IN_QUEUE = 4;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1_FIFO_INF_INF with right props
  it("call mm1 fifo inf inf with right props", () => {
    const RESULT = GetClientsInSystem(
      MODELS_IDS.mm1_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(MM1_FIFO_INF_INF).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    expect(RESULT).toBe(1);
  });
  // Test 2: Call MMS_FIFO_INF_INF with right props
  it("call mms fifo inf inf with right props", () => {
    const RESULT = GetClientsInSystem(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_CLIENTS_IN_QUEUE,
    );
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_CLIENTS_IN_QUEUE,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    expect(RESULT).toBe(2);
  });
  // Test 3: Call MM1_FIFO_K_INF with right props
  it("call mm1 fifo k inf with right props", () => {
    const RESULT = GetClientsInSystem(
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
    expect(RESULT).toBe(3);
  });
  // Test 4: Throw an error if the model does not exist
  it("throw an error if the model does not exist", () => {
    expect(() =>
      GetClientsInSystem("not-exists-model", MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo No Encontrado");
  });
});
