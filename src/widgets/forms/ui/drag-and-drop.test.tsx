// Drag and Drop Component Test Suite Requirements
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import DragAndDrop from "./drag-and-drop";
import userEvent from "@testing-library/user-event";
// Drag and Drop Component Test Suite Mocks
const MOCK_USE_DRAG_AND_DROP_RETURN = {
  invalid: undefined,
  message: "Haz clíc o arrastra archivos aquí",
  reference: { current: null },
  boxColorClasses: "bg-white",
  messageColorClasses: "text-gray-500",
  onChange: vi.fn(),
  onClick: vi.fn(),
  onDragOver: vi.fn(),
  onDragLeave: vi.fn(),
  onDrop: vi.fn(),
};
vi.mock("../model", () => ({
  useDragAndDrop: vi.fn(() => MOCK_USE_DRAG_AND_DROP_RETURN),
}));
// Drag and Drop Component Test Suite
describe("DragAndDrop Component", () => {
  // Drag and Drop Component Test Suite Main Constants
  const PROPS = {
    label: "Subir archivos",
    name: "file",
    allowedExtensions: [".txt", ".pdf"],
    maxMegaBytes: 1,
  };
  // Test 1: Renderiza correctamente label, message y help
  it("renders correctly", () => {
    // Render Component in Fake DOM
    render(<DragAndDrop {...PROPS} />);
    // Check that values are the right ones
    expect(screen.getByText("Subir archivos")).toBeInTheDocument();
    expect(screen.getByText("Haz clíc o arrastra archivos aquí")).toBeInTheDocument();
    expect(screen.getByText("Solo .txt, .pdf. Máximo 1 MB")).toBeInTheDocument();
  });
  // Test 2: Calls hook functions on drag and click events using userEvent
  it("calls hook functions on drag and click events using user event", async () => {
    // Render Component in Fake DOM
    render(<DragAndDrop {...PROPS} />);
    // Get the Container
    const CONTAINER = screen.getByText("Haz clíc o arrastra archivos aquí").parentElement;
    // Check if Container exists, if not, throw an error
    if (!CONTAINER) {
      throw new Error("Container is Null");
    }
    screen.debug(CONTAINER);
    // Get all functions from hook
    const { onClick, onDragOver, onDragLeave, onDrop } = MOCK_USE_DRAG_AND_DROP_RETURN;
    // Simulate Click and Check if the onClick function was called
    await userEvent.click(CONTAINER);
    expect(onClick).toHaveBeenCalledOnce();
    // Simulate Drag Over and Check if the onDragOver function was called
    fireEvent.dragOver(CONTAINER);
    expect(onDragOver).toHaveBeenCalledOnce();
    // Simulate Drag Leave and Check if the onDragLeave function was called
    fireEvent.dragLeave(CONTAINER);
    expect(onDragLeave).toHaveBeenCalledOnce();
    // Simulate Drop and Check if the onDrop function was called
    fireEvent.drop(CONTAINER);
    expect(onDrop).toHaveBeenCalledOnce();
  });
});
