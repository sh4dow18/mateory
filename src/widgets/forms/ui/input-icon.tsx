// Input Icon Requirements
import React from "react";
import { FaCheck } from "react-icons/fa";
import { InputStatus } from "../config/input";
import { FaXmark } from "react-icons/fa6";
// Input Icon Props
interface Props {
  readonly status: InputStatus;
  readonly disabled?: boolean;
}
// Input Icon Main Function
function InputIcon({ status, disabled }: Props) {
  // If status is valid, return a Check Icon
  if (status === "Valid") {
    return (
      <FaCheck
        aria-disabled={disabled}
        className="hidden min-[360px]:block min-[360px]:w-6 min-[360px]:h-6 min-[360px]:fill-gray-500 aria-disabled:opacity-0"
      />
    );
  }
  // If status is invalid, return an X Mark Icon
  else if (status === "Invalid") {
    return (
      <FaXmark
        aria-disabled={disabled}
        className="hidden min-[360px]:block min-[360px]:w-6 min-[360px]:h-6 min-[360px]:fill-red-500 aria-disabled:opacity-0"
      />
    );
  }
  // If status is neutral, return a empty div
  return <div className="hidden min-[360px]:block min-[360px]:w-6 min-[360px]:h-6" />;
}

export default InputIcon;
