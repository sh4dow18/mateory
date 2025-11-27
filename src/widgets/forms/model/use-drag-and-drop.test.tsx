// Use Drag and Drop Hook Test Suite Requirements
import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useDragAndDrop from "./use-drag-and-drop";
// Use Drag and Drop Hook Test Suite
describe("useDragAndDrop", () => {
  // Use Drag and Drop Hook Test Suite Main Constants
  const ALLOWED_EXTENSIONS = [".txt", ".pdf"];
  const MAX_MB = 1;
  // Test 1: Initial state is correct
  it("init correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Check initial values
    expect(result.current.invalid).toBe(undefined);
    expect(result.current.message).toBe("Haz clíc o arrastra archivos aquí");
    expect(result.current.boxColorClasses).toContain("bg-white");
    expect(result.current.messageColorClasses).toContain("text-gray-500");
    expect(result.current.reference.current).toBeNull();
  });
  // Test 2: onChange sets valid status correctly
  it("sets status to false when file is allowed and under max size", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Mock valid file
    const MOCK_FILE = new File(["content"], "test.txt", {
      type: "text/plain",
      lastModified: Date.now(),
    });
    // Set File Size Value
    Object.defineProperty(MOCK_FILE, "size", { value: 500 * 1024 });
    // Mock Event
    const MOCK_EVENT: React.ChangeEvent<HTMLInputElement> = {
      target: { files: [MOCK_FILE] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onChange(MOCK_EVENT);
    });
    // Check status and message
    expect(result.current.invalid).toBe(false);
    expect(result.current.message).toContain("1 archivo listo");
  });
  // Test 3: onChange sets invalid status correctly
  it("sets status to true when file exceeds max size", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Mock invalid file (too big)
    const MOCK_FILE = new File(["a".repeat(2 * 1024 * 1024)], "bigfile.txt", {
      type: "text/plain",
      lastModified: Date.now(),
    });
    // Set File Size Value
    Object.defineProperty(MOCK_FILE, "size", { value: 2 * 1024 * 1024 });
    // Mock Event
    const MOCK_EVENT: React.ChangeEvent<HTMLInputElement> = {
      target: { files: [MOCK_FILE] },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onChange(MOCK_EVENT);
    });
    // Check status and messageh
    expect(result.current.invalid).toBe(true);
    expect(result.current.message).toContain("es mayor a 1 MB");
  });
  // Test 4: onDragOver sets dragging state
  it("sets dragging state correctly", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Mock Event
    const MOCK_EVENT = { preventDefault: vi.fn() } as unknown as React.DragEvent<HTMLButtonElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onDragOver(MOCK_EVENT);
    });
    // Check if the values are the right ones
    expect(result.current.message).toBe("¡Suelta los archivos aquí!");
    expect(result.current.boxColorClasses).toContain("bg-primary-light");
  });
  // Test 5: onDragLeave resets dragging state
  it("resets dragging state correctly on onDragLeave", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Mock Event
    const MOCK_EVENT = { preventDefault: vi.fn() } as unknown as React.DragEvent<HTMLButtonElement>;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onDragOver(MOCK_EVENT);
      result.current.onDragLeave(MOCK_EVENT);
    });
    // Check if the values are the right ones
    expect(result.current.message).toBe("Haz clíc o arrastra archivos aquí");
    expect(result.current.boxColorClasses).toContain("bg-white");
  });
  // Test 6: onClick calls reference click
  it("calls reference click on onClick", () => {
    // Render Hook in Fake DOM
    const { result } = renderHook(() => useDragAndDrop(ALLOWED_EXTENSIONS, MAX_MB));
    // Mock Click
    const MOCK_CLICK = vi.fn();
    result.current.reference.current = { click: MOCK_CLICK } as unknown as HTMLInputElement;
    // Use Hook values that has to wait to check
    act(() => {
      result.current.onClick();
    });
    // Check if click was done
    expect(MOCK_CLICK).toHaveBeenCalledOnce();
  });
});
