// Set this component as a client component
"use client";
// Textarea Requirements
import React from "react";
import { useTextarea } from "../model";
import { Card } from "@/shared/ui";
// Textarea Props
interface Props {
  readonly label: string;
  readonly name: string;
  readonly example: string;
  readonly maxLength?: number;
  readonly rows?: number;
}
// Textarea Main Function
function Textarea({ label, name, example, maxLength, rows }: Props) {
  // Textarea Main Hooks
  const { status, length, onChange } = useTextarea();
  // Textarea Main Constants
  const ARIA_INVALID = status === "Valid" ? false : undefined;
  const MAX_LENGTH = maxLength || 255;
  const LENGTH_MESSAGE = `${length} / ${MAX_LENGTH}`;
  const COLORED_CLASSES = "text-black dark:text-gray-300";
  const SMALL_CLASSES = `${COLORED_CLASSES} font-small:text-sm font-large:text-lg font-xlarge:text-xl`;
  // Returns Textarea component
  return (
    <Card>
      <label
        htmlFor={name}
        className="font-medium text-gray-700 aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-700 high-contrast:text-black high-contrast:aria-disabled:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      {/* Textarea Second Container */}
      <div className="rounded-md outline-1 mt-2 mb-1 py-2 px-1 bg-white outline-gray-400 focus-within:outline-2 focus-within:outline-primary dark:bg-gray-800 dark:outline-gray-600 font-small:text-sm font-large:text-lg font-xlarge:text-xl min-[344px]:px-3">
        {/* Main Textarea */}
        <textarea
          id={name}
          name={name}
          placeholder={`Ejemplo: ${example}`}
          maxLength={MAX_LENGTH}
          rows={rows || 4}
          onChange={onChange}
          aria-invalid={ARIA_INVALID}
          className="text-black dark:text-white high-contrast:placeholder:text-black w-full bg-transparent outline-hidden resize-none"
        />
        {/* Textarea Chars Container */}
        <div className="text-right mr-2">
          <small className={SMALL_CLASSES}>{LENGTH_MESSAGE}</small>
        </div>
      </div>
      {/* Textarea Help */}
      <small className={SMALL_CLASSES}>Máximo {MAX_LENGTH} caracteres</small>
    </Card>
  );
}

export default Textarea;
