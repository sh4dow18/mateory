// Set this component as a client component
"use client";
// Input Requirements
import React from "react";
import { Card } from "@/shared/ui";
import { HELP_MESSAGE } from "../config/input";
import { useInput } from "../model";
import InputIcon from "./input-icon";
import { VariableValidation } from "@/shared/config/variables";
// Input Props
interface Props {
  readonly label: string;
  readonly example: string;
  readonly name: string;
  readonly validation: VariableValidation;
  readonly disabled?: boolean;
  readonly autoComplete?: string;
  readonly maxLength?: number;
}
// Input Main Function
function Input({ label, example, name, validation, disabled, autoComplete, maxLength }: Props) {
  // Input Main Hooks
  const { status, onChange } = useInput(validation);
  // Input Main Constants
  const ARIA_INVALID = status !== "Neutral" ? status === "Invalid" : undefined;
  const SMALL_COLORED_CLASSES =
    status === "Invalid"
      ? "text-red-500"
      : "aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-600 high-contrast:aria-disabled:text-black";
  // Return Input Component
  return (
    <Card>
      <label
        htmlFor={name}
        aria-disabled={disabled}
        className="font-medium text-gray-700 aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-700 high-contrast:text-black high-contrast:aria-disabled:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      {/* Input Content Container */}
      <div
        aria-disabled={disabled}
        className="flex place-content-between rounded-md outline-1 mt-2 mb-1 py-2 px-1 bg-white outline-gray-400 focus-within:outline-2 focus-within:outline-primary aria-disabled:bg-gray-200 aria-disabled:outline-gray-200 dark:bg-gray-800 dark:outline-gray-600 dark:aria-disabled:bg-gray-800 dark:aria-disabled:outline-gray-800 high-contrast:aria-disabled:bg-black font-small:text-sm font-large:text-lg font-xlarge:text-xl min-[344px]:px-3"
      >
        {/* Main Input */}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={`Ejemplo: ${example}`}
          onChange={onChange}
          aria-invalid={ARIA_INVALID}
          disabled={disabled}
          autoComplete={autoComplete || "on"}
          maxLength={maxLength || undefined}
          className="w-full bg-transparent outline-hidden text-black disabled:text-gray-600 disabled:placeholder:text-gray-400 disabled:hover:cursor-not-allowed dark:text-white dark:disabled:text-gray-600 dark:disabled:placeholder:text-gray-600 high-contrast:text-black high-contrast:placeholder:text-black"
          required
        />
        <InputIcon status={status} disabled={disabled} />
      </div>
      {/* Input Help Message */}
      <small
        aria-disabled={disabled}
        className={`${SMALL_COLORED_CLASSES} font-small:text-sm font-large:text-lg font-xlarge:text-xl`}
      >
        {HELP_MESSAGE[validation]}
      </small>
    </Card>
  );
}

export default Input;
