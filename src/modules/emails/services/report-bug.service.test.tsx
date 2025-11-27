// Report Bug Service Test Suite Requirements
import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@react-email/render";
import ReportBugEmail from "@/emails/report-bug-email";
import { SendEmail } from "./send-email.service";
import { ReportBug } from "./report-bug.service";
import { CreateMockFile, CreateMockImage } from "./mock-files.service";
// Report Bug Service Test Suite Mocks
vi.mock("@react-email/render", () => ({
  render: vi.fn().mockResolvedValue("<html>Mock Email</html>"),
}));
vi.mock("next/server", () => ({
  NextResponse: {
    json: vi.fn((body, init) =>
      Promise.resolve({
        json: () => Promise.resolve(body),
        status: init?.status ?? 200,
      }),
    ),
  },
}));
vi.mock("./send-email.service", () => ({
  SendEmail: vi.fn().mockResolvedValue(true),
}));
vi.mock("./is-valid-image.service", () => ({
  IsValidImage: vi.fn(async (file: File) => {
    return !file.name.endsWith(".txt");
  }),
}));
// Report Bug Service Test Suite
describe("ReportBug Service", () => {
  // Before Each Test, do this
  beforeEach(() => {
    // Clear All Mocks
    vi.clearAllMocks();
  });
  // Test 1: Should submit a report successfully
  it("submit a report successfully", async () => {
    // Set Form Data
    const FORM_DATA = new FormData();
    FORM_DATA.append("userName", "Ramsés");
    FORM_DATA.append("email", "test@example.com");
    FORM_DATA.append("message", "Found a bug");
    FORM_DATA.append("files", CreateMockImage("image1.png"));
    FORM_DATA.append("files", CreateMockImage("image2.jpg"));
    // Mock Request
    const REQUEST = {
      formData: vi.fn().mockResolvedValue(FORM_DATA),
    } as unknown as Request;
    // Get Service Response
    const RESPONSE = await ReportBug(REQUEST);
    // Check react-email render
    expect(render).toHaveBeenCalledOnce();
    expect(render).toHaveBeenCalledWith(
      <ReportBugEmail name="Ramsés" email="test@example.com" message="Found a bug" />,
    );
    // Check SendEmail call
    expect(SendEmail).toHaveBeenCalledOnce();
    // Check Response with status 200
    expect(RESPONSE.status).toBe(200);
    expect((await RESPONSE.json()).message).toBe("Reporte Realizado con Éxito");
  });
  // Test 2: Should return error when a file is invalid
  it("return error when a file is invalid", async () => {
    // Set Form Data
    const FORM_DATA = new FormData();
    FORM_DATA.append("userName", "Ramsés");
    FORM_DATA.append("email", "test@example.com");
    FORM_DATA.append("message", "Found bug");
    FORM_DATA.append("files", CreateMockFile("bad.txt"));
    FORM_DATA.append("files", CreateMockImage("good.png"));
    // Mock Request
    const REQUEST = {
      formData: vi.fn().mockResolvedValue(FORM_DATA),
    } as unknown as Request;
    // Get Service Response
    const RESPONSE = await ReportBug(REQUEST);
    // Check if email was not sent
    expect(SendEmail).not.toHaveBeenCalled();
    // Check if the response is bad
    expect(RESPONSE.status).toBe(400);
    expect((await RESPONSE.json()).error).toBe(`El archivo "bad.txt" no es una imagen`);
  });
  // Test 3: Should return error with multiple invalid files
  it("return error with multiple invalid files", async () => {
    // Set Form Data
    const FORM_DATA = new FormData();
    FORM_DATA.append("userName", "Test");
    FORM_DATA.append("email", "test@example.com");
    FORM_DATA.append("message", "Multiple bad files");
    FORM_DATA.append("files", CreateMockFile("one.txt"));
    FORM_DATA.append("files", CreateMockFile("two.txt"));
    // Mock Request
    const REQUEST = {
      formData: vi.fn().mockResolvedValue(FORM_DATA),
    } as unknown as Request;
    // Get Service Response
    const RESPONSE = await ReportBug(REQUEST);
    // Check if email was not sent
    expect(SendEmail).not.toHaveBeenCalled();
    // Check if the response is bad
    expect(RESPONSE.status).toBe(400);
    expect((await RESPONSE.json()).error).toBe(`Los archivos "one.txt, two.txt" no son imágenes`);
  });
});
