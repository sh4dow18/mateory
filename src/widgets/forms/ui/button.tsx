// Use this component as client component
"use client";
// Form Button Requirements
import { useButton } from "../model";
// Form Button Props
interface Props {
  readonly form: string;
  readonly display: string;
}
// Form Button Main Function
function Button({ form, display }: Props) {
  // Form Button Hook
  const { disabled, statusClasses } = useButton(form);
  // Return Form Button Component
  return (
    <button
      type="submit"
      form={form}
      className={`text-white font-semibold px-5 py-2 rounded-lg font-small:text-sm font-large:text-lg font-xlarge:text-xl ${statusClasses}`}
      disabled={disabled}
    >
      {display}
    </button>
  );
}

export default Button;
