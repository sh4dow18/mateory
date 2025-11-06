// Model Button Requirements
import React from "react";
// Model Button Props
interface Props {
  readonly label: string;
  readonly selected: boolean;
  readonly onClick: () => void;
}
// Model Button Main Function
function ModelButton({ label, selected, onClick }: Props) {
  // Model Button Main Constants
  const COLORED_CLASSES = selected
    ? "bg-primary text-white"
    : "bg-gray-200 text-gray-500 hover:cursor-pointer hover:bg-gray-300 dark:bg-gray-700 high-contrast:text-black";
  const TEXT_SIZE_CLASSES = "font-small:text-sm font-large:text-lg font-xlarge:text-xl";
  // Return Model Button Component
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-3 rounded-lg font-medium transition-all ${COLORED_CLASSES} ${TEXT_SIZE_CLASSES}`}
    >
      {label}
    </button>
  );
}

export default ModelButton;
