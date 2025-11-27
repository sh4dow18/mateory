// Send Email Service Test Suite Requirements
import { describe, it, expect, vi, beforeEach, MockedFunction, Mock } from "vitest";
import type { Transporter, SentMessageInfo } from "nodemailer";
import nodemailer from "nodemailer";
import { CreateMockBufferImage } from "./mock-files.service";
// Send Email Service Test Suite Mocks
vi.mock("nodemailer", () => {
  const CreateTransport = vi.fn();
  return {
    default: { createTransport: CreateTransport },
    createTransport: CreateTransport,
  };
});
//  Send Email Service Test Suite Types
type SendMailAsync = (
  mailOptions: Parameters<Transporter["sendMail"]>[0],
) => ReturnType<Transporter["sendMail"]>;
type CreateMockTransport = Mock<(options?: unknown) => Pick<Transporter, "sendMail">>;
// Send Email Service Test Suite
describe("SendEmail Service", () => {
  // Send Mail Function Mock for Transporter in Nodemailer
  let sendMailMock: MockedFunction<SendMailAsync>;
  let SendEmail: typeof import("./send-email.service").SendEmail;
  // Before Each Test, do this
  beforeEach(async () => {
    // Clear All Mocks
    vi.clearAllMocks();
    // Mock Nodemailer
    const MOCK_NODEMAILER = nodemailer as unknown as {
      createTransport: CreateMockTransport;
    };
    // Mock Send Mail
    sendMailMock = vi.fn();
    // Mock Transporter
    const MOCK_TRANSPORTER = {
      sendMail: sendMailMock,
    };
    // Mock Create Transport Return Value
    MOCK_NODEMAILER.createTransport.mockReturnValue(MOCK_TRANSPORTER);
    // Reset All Modules to Load new Environment Variables
    vi.resetModules();
    // Create Mock Environment Variables
    process.env.EMAIL = "test@example.com";
    process.env.PASSWORD = "123456";
    // Call Send Email with Dynamic Import to Load Environment Variables
    SendEmail = (await import("./send-email.service")).SendEmail;
  });
  // Test 1: Should Send an email without attachments
  it("send an email without attachments", async () => {
    // Set Mock Response
    const MOCK_RESPONSE: SentMessageInfo = {
      envelope: {},
      messageId: "123",
      accepted: [],
      rejected: [],
      pending: [],
      response: "OK",
    };
    sendMailMock.mockResolvedValue(MOCK_RESPONSE);
    // Get the Send Email Response
    const RESPONSE = await SendEmail("Hello", "<p>Test</p>");
    // Check if the mock was called with right values
    expect(sendMailMock).toHaveBeenCalledWith({
      from: "test@example.com",
      to: "test@example.com",
      subject: "Hello",
      html: "<p>Test</p>",
      attachments: undefined,
    });
    // Check if the response is the mock
    expect(RESPONSE).toEqual(MOCK_RESPONSE);
  });
  // Test 2: Send an email with attachments
  it("send an email with attachments", async () => {
    // Mock File
    const MOCK_FILE = CreateMockBufferImage();
    // Mock Response
    const MOCK_RESPONSE: SentMessageInfo = {
      envelope: {},
      messageId: "999",
      accepted: [],
      rejected: [],
      pending: [],
      response: "OK",
    };
    sendMailMock.mockResolvedValue(MOCK_RESPONSE);
    // Get the Send Email Response
    const RESPONSE = await SendEmail("With Attachments", "<p>Hi</p>", [MOCK_FILE]);
    // Check if the mock was called ones
    expect(sendMailMock).toHaveBeenCalledOnce();
    // If was called, get the call arguments
    const ARGUMENTS = sendMailMock.mock.calls[0][0];
    // Check Attachments in Arguments
    expect(ARGUMENTS.attachments?.length).toBe(1);
    expect(ARGUMENTS.attachments?.[0].filename).toBe("");
    expect(ARGUMENTS.attachments?.[0].content).toBeInstanceOf(Buffer);
    // Check if the response is the mock
    expect(RESPONSE).toEqual(MOCK_RESPONSE);
  });
});
