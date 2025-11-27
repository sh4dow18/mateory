// Set this hook as a client hook
"use client";
// Use Textarea Hook Requirements
import { ChangeEvent, useState } from "react";
import { TextareaStatus } from "../config/textarea";
// Use Textarea Hook Main Function
function useTextarea() {
  // Use Textarea Main Hooks
  const [status, setStatus] = useState<TextareaStatus>("Neutral");
  const [length, setLength] = useState<number>(0);
  // Textarea On Change Function
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // Event Value
    const VALUE = event.target.value;
    // If Value is Empty, set Neutral, else Valid
    setStatus(VALUE.length === 0 ? "Neutral" : "Valid");
    // Set length
    setLength(VALUE.length);
  };
  // Return Hook Values
  return { status, length, onChange };
}

export default useTextarea;
