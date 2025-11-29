// Set this component as a client component
"use client";
// Drag and Drop Requirements
import React from "react";
import { useDragAndDrop } from "../model";
import { Card } from "@/shared/ui";
// Drag and Drop Props
interface Props {
  readonly label: string;
  readonly name: string;
  readonly allowedExtensions: string[];
  readonly maxMegaBytes: number;
}
// Drag and Drop Main Function
function DragAndDrop({ label, name, allowedExtensions, maxMegaBytes }: Props) {
  // Drag and Drop Main Hooks
  const {
    invalid,
    message,
    reference,
    boxColorClasses,
    messageColorClasses,
    onChange,
    onClick,
    onDragOver,
    onDragLeave,
    onDrop,
  } = useDragAndDrop(allowedExtensions, maxMegaBytes);
  // Drag and Drop Constants
  const DRAG_AND_DROP_CLASSES = `cursor-pointer text-center rounded-md outline-1 w-full h-[70%] pt-15 pb-12 px-1 my-2 font-small:text-sm font-large:text-lg font-xlarge:text-xl min-[344px]:px-3 ${
    boxColorClasses
  }`;
  const ALLOWED_EXTENSIONS = allowedExtensions.join(", ");
  const HELP_MESSAGE = `Solo ${ALLOWED_EXTENSIONS}. Máximo ${maxMegaBytes} MB`;
  const MESSAGE_CLASSES = `${messageColorClasses} line-clamp-3`;
  // Returns Drag and Drop Component
  return (
    <Card>
      <label
        htmlFor={name}
        className="font-medium text-gray-700 aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-700 high-contrast:text-black high-contrast:aria-disabled:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      {/* Drag and Drop Container */}
      <button
        type="button"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={onClick}
        className={DRAG_AND_DROP_CLASSES}
      >
        {/* Drag and Drop Line */}
        <span className={MESSAGE_CLASSES}>{message}</span>
        {/* Main Input */}
        <input
          id={name}
          ref={reference}
          type="file"
          name={name}
          multiple
          aria-invalid={invalid}
          onChange={onChange}
          className="hidden"
        />
      </button>
      {/* Main Help */}
      <small className="dark:text-gray-300 font-small:text-sm font-large:text-lg font-xlarge:text-xl">
        {HELP_MESSAGE}
      </small>
    </Card>
  );
}

export default DragAndDrop;
