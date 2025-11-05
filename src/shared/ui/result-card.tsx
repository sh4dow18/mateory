// Result Card Requirements
import React from "react";
import Card from "./card";
// Result Card Props
interface Props {
  readonly label: string;
  readonly value?: string | number;
}
// Result Card Main Function
function ResultCard({ label, value }: Props) {
  // Result Card Constants
  const DISABLED = value === undefined;
  const TEXT = DISABLED === true ? "No Aplica" : value;
  // Return Result Card Component
  return (
    <Card>
      {/* Result Card Title */}
      <span
        aria-disabled={DISABLED}
        className="capitalize text-gray-600 aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-600 high-contrast:text-black high-contrast:aria-disabled:text-black md:line-clamp-1 md:m-0 font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </span>
      {/* Result Card Valud */}
      <p
        aria-disabled={DISABLED}
        className="mt-1 text-2xl font-semibold text-gray-700 break-all aria-disabled:text-gray-400 dark:text-gray-300 dark:aria-disabled:text-gray-600 high-contrast:text-black high-contrast:aria-disabled:text-black font-small:text-xl font-large:text-3xl font-xlarge:text-4xl"
      >
        {TEXT}
      </p>
    </Card>
  );
}

export default ResultCard;
