// Get Clients In Queue Dispatcher Test Suite Requirements
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MODELS_IDS } from "@/features/queues/config";
import { GetClientsInQueue as MM1_FIFO_INF_INF } from "../mm1-fifo-inf-inf";
import { GetClientsInQueue as MMS_FIFO_INF_INF } from "../mms-fifo-inf-inf";
import { GetClientsInQueue as MM1_FIFO_K_INF } from "../mm1-fifo-k-inf";
import { GetClientsInQueue } from "./get-clients-in-queue";
import { FormVariables } from "@/widgets/forms/config/form";
// Get Clients In Queue Dispatcher Test Suite Mocks
vi.mock("../mm1-fifo-inf-inf", () => ({
  GetClientsInQueue: vi.fn().mockReturnValue(1),
}));
vi.mock("../mms-fifo-inf-inf", () => ({
  GetClientsInQueue: vi.fn().mockReturnValue(2),
}));
vi.mock("../mm1-fifo-k-inf", () => ({
  GetClientsInQueue: vi.fn().mockReturnValue(3),
}));
// Get Clients In Queue Dispatcher Test Suite
describe("GetClientsInQueue dispatcher", () => {
  // Get Clients In Queue Dispatcher Test Suite Constants
  const MOCK_PARAMS = { averageServiceRate: 10 } as FormVariables;
  const MOCK_SETTINGS = { decimals: 3 } as FormVariables;
  const MOCK_SYSTEM_UTIL_FACTOR = 0.8;
  const MOCK_P0_CLIENTS_IN_SYSTEM = 0.25;
  // Before Each Test, clear all mocks
  beforeEach(() => {
    vi.clearAllMocks();
  });
  // Test 1: Call MM1_FIFO_INF_INF with right props
  it("call mm1 fifo inf inf with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetClientsInQueue(
      MODELS_IDS.mm1_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the MM1 FIFO INF INF Function was Called with right props
    expect(MM1_FIFO_INF_INF).toHaveBeenCalledWith(MOCK_PARAMS, MOCK_SETTINGS);
    // Check if the Result is the right one
    expect(RESULT).toBe(1);
  });
  // Test 2: Call MMS_FIFO_INF_INF with right props
  it("call mms fifo inf inf with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetClientsInQueue(
      MODELS_IDS.mms_fifo_inf_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0_CLIENTS_IN_SYSTEM,
    );
    // Check if the MMS FIFO INF INF Function was Called with right props
    expect(MMS_FIFO_INF_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(2);
  });
  // Test 3: Call MM1_FIFO_K_INF with right props
  it("call mm1 fifo k inf with right props", () => {
    // Get Result from Dispatcher
    const RESULT = GetClientsInQueue(
      MODELS_IDS.mm1_fifo_k_inf,
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_PARAMS,
      MOCK_SETTINGS,
      MOCK_P0_CLIENTS_IN_SYSTEM,
    );
    // Check if the MM1 FIFO K INF Function was Called with right props
    expect(MM1_FIFO_K_INF).toHaveBeenCalledWith(
      MOCK_SYSTEM_UTIL_FACTOR,
      MOCK_P0_CLIENTS_IN_SYSTEM,
      MOCK_PARAMS,
      MOCK_SETTINGS,
    );
    // Check if the Result is the right one
    expect(RESULT).toBe(3);
  });
  // Test 4: Throw an error if the model does not exist
  it("throw an error if the model does not exist", () => {
    // Check if the dispatcher throw an error when model does not exist
    expect(() =>
      GetClientsInQueue("not-exists-model", MOCK_SYSTEM_UTIL_FACTOR, MOCK_PARAMS, MOCK_SETTINGS),
    ).toThrow("Modelo No Encontrado");
  });
});
