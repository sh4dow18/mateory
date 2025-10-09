// Switch Requirements
import React from "react";
// Switch Props
interface Props {
  readonly enabled: boolean;
  readonly onClick: () => void;
}
// Switch Main Function
function Switch({ enabled, onClick }: Props) {
  // Switch Constants
  const BACKGROUND_CLASS = enabled ? "bg-primary" : "bg-gray-300";
  const ANIMATION_CLASS = enabled ? "translate-x-5" : "";
  // Return Switch Component
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={onClick}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light ${BACKGROUND_CLASS}`}
    >
      <span
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${ANIMATION_CLASS}`.trimEnd()}
      />
    </button>
  );
}

export default Switch;
