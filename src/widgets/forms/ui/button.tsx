// Use this component as client component
"use client";
// Form Button Requirements
import React from "react";
import { useButton } from "../model";
// Form Button Props
interface Props {
  readonly form: string;
  readonly display: string;
  readonly full?: boolean;
}
// Form Button Main Function
function Button({ form, display, full }: Props) {
  // Form Button Hook
  const { disabled, statusClasses, isSubmitting } = useButton(form);
  // Form Button Main Constants
  const WIDTH_CLASS = full === true ? "w-full" : "";
  const BUTTON_CLASSES =
    `text-white font-semibold px-5 py-2 rounded-lg font-small:text-sm font-large:text-lg font-xlarge:text-xl ${statusClasses} ${WIDTH_CLASS}`.trimEnd();
  const MESSAGE = isSubmitting ? "Procesando..." : display;
  // Return Form Button Component
  return (
    <button type="submit" form={form} className={BUTTON_CLASSES} disabled={disabled}>
      {MESSAGE}
    </button>
  );
}

export default Button;
