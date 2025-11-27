// Form Component Test Suite Requirements
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";
import type { OnSubmitType } from "../config/form";
import { AlertSettings } from "../config/alert";
// Form Component Test Suite Mocks
const MockUpdateSettings = vi.fn();
const MockOnClick = vi.fn();
vi.mock("../model", () => ({
  useAlert: () => ({
    isOpen: true,
    type: "success",
    title: "Éxito",
    message: "Formulario enviado",
    onClick: MockOnClick,
    UpdateSettings: MockUpdateSettings,
  }),
  useForm: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: OnSubmitType,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    UpdateAlertSettings: (newSettings: AlertSettings) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    successMessage: string,
  ) => ({
    reference: { current: null },
    onSubmitComplete: vi.fn((event: React.FormEvent<HTMLFormElement>) => event.preventDefault()),
  }),
}));
// Form Component Test Suite
describe("Form Component", () => {
  // Form Component Test Suite Main Constants
  const PROPS = {
    id: "form1",
    onSubmit: vi.fn(),
    children: <input type="text" name="name" defaultValue="Ramsés" />,
    successAlertMessage: "Formulario enviado",
  };
  // Test 1: Renders Correctly
  it("renders correctly", () => {
    // Render Component in Fake DOM
    render(<Form {...PROPS} />);
    // Check if form is in the document
    expect(document.getElementById("form1")).toBeInTheDocument();
  });
  // Test 2: Display Alert if isOpen is true
  it("renders alert when is open prop is true", () => {
    // Render Component in Fake DOM
    render(<Form {...PROPS} />);
    // Check alert title and message
    expect(screen.getByText("Éxito")).toBeInTheDocument();
    expect(screen.getByText("Formulario enviado")).toBeInTheDocument();
  });
  // Test 3: onClick de la alerta se llama correctamente
  it("calls alert onClick when alert is clicked", async () => {
    // Render Component in Fake DOM
    render(<Form {...PROPS} />);
    // Get Alert Container
    const ALERT = screen.getByText("Éxito").parentElement;
    // Check if Exists Alert, if not, throw an error
    if (!ALERT) {
      throw new Error("Alerta No Encontrada");
    }
    // Check if onClick was called
    await userEvent.click(ALERT);
    expect(MockOnClick).toHaveBeenCalledOnce();
  });
});
