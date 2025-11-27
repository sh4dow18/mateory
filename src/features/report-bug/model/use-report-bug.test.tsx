// Use Report Bug Hook Test Suite Requirements
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useReportBug from "./use-report-bug";
import type { FormEvent } from "react";
// Use Report Bug Hook Test Suite Mocks
const MOCK_FETCH = vi.fn();
global.fetch = MOCK_FETCH as unknown as typeof fetch;
// Use Report Bug Hook Test Suite
describe("useReportBug", () => {
  // Test 1: Call on Submit Form Correctly
  it("call on submit form correctly", async () => {
    // Mock fetch response
    const MOCK_RESPONSE = new Response(null, { status: 200 });
    MOCK_FETCH.mockResolvedValueOnce(MOCK_RESPONSE);
    // Render hook
    const { result } = renderHook(() => useReportBug());
    // Create fake form element
    const MOCK_FORM = document.createElement("form");
    const MOCK_INPUT = document.createElement("input");
    MOCK_INPUT.name = "message";
    MOCK_INPUT.value = "Error encontrado";
    MOCK_FORM.appendChild(MOCK_INPUT);
    // Fake event with correct typing
    const MOCK_EVENT: FormEvent<HTMLFormElement> = {
      currentTarget: MOCK_FORM,
    } as unknown as FormEvent<HTMLFormElement>;
    // Call hook
    const RESPONSE = await result.current.onSubmitForm(MOCK_EVENT);
    // Ensure fetch was called with correct endpoint and method
    expect(MOCK_FETCH).toHaveBeenCalledOnce();
    expect(MOCK_FETCH).toHaveBeenCalledWith("/api/emails/report-bug", {
      method: "POST",
      body: expect.any(FormData),
    });
    // Get Form Data Content
    const BODY = MOCK_FETCH.mock.calls[0][1]?.body;
    // Check if body is a form data
    if (BODY instanceof FormData) {
      // Check if the message is the right one
      expect(BODY.get("message")).toBe("Error encontrado");
    }
    // If not, throw an error
    else {
      throw new Error("Body sent to fetch is not FormData");
    }
    // Ensure returned response is correct
    expect(RESPONSE).toBe(MOCK_RESPONSE);
  });
});
