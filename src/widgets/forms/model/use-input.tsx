// Set this hook as a client hook
"use client";
// Use Input Hook Requirements
import { ChangeEvent, useState } from "react";
import { INPUT_VALIDATION_REGEX, InputStatus } from "../config/input";
// Use Input Hook Main Function
function useInput(validation: string) {
  // Use Input Hook Main Hooks
  const [status, setStatus] = useState<InputStatus>("Neutral");
  // Input on Change Function
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Get Event Value
    const VALUE = event.target.value;
    // If Value is Empty, set Neutral
    if (VALUE.length == 0) {
      setStatus("Neutral");
    }
    // If is not empty, check if it is valid
    else {
      // If Value is Valid, set Valid
      if (INPUT_VALIDATION_REGEX[validation].test(VALUE)) {
        setStatus("Valid");
        return;
      }
      // If Value is not Valid, set Invalid
      setStatus("Invalid");
    }
  };
  // Return Hook Values
  return { status, onChange };
}

export default useInput;
