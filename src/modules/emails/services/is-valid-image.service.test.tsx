// Is Valid Image Test Suite Requirements
import { beforeEach, describe, expect, it, vi } from "vitest";
import { IsValidImage } from "./is-valid-image.service";
import { CreateMockFile, CreateMockBufferImage } from "./mock-files.service";
// Is Valid Image Test Suite Mocks
vi.mock("sharp", () => {
  return {
    default: () => ({
      metadata: () => Promise.resolve({ format: "png" }),
    }),
  };
});
// Is Valid Image Test Suite
describe("IsValidImage Function", () => {
  // Before Each Test, do this
  beforeEach(() => {
    // Clear All Mocks
    vi.clearAllMocks();
  });
  // Test 1: Should validate a correct image
  it("returns true for a valid image", async () => {
    // Creates an Image
    const IMAGE = CreateMockBufferImage();
    // Get the Responses
    const RESPONSE = await IsValidImage(IMAGE);
    // Check if Response is True
    expect(RESPONSE).toBe(true);
  });
  // Test 2: Should return false on invalid image
  it("returns false for an invalid image", async () => {
    // Creates a Not Image File
    const FILE = CreateMockFile("bad.txt");
    // Get the Responses
    const RESPONSE = await IsValidImage(FILE);
    // Check if Response is True
    expect(RESPONSE).toBe(false);
  });
});
