// Use this hook as a client hook
"use client";
// Use Form Button Hook Requirements
import { useEffect, useState } from "react";
// Use Form Button Hook Main Function
function useFormButton(formId: string) {
  // Use Form Button Hook Main Hooks
  const [disabled, setDisabled] = useState(true);
  // Use Form Button Hook Main Constants
  const STATUS_CLASSES = disabled
    ? "bg-gray-300 hover:cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 high-contrast:bg-black high-contrast:text-gray-300"
    : "bg-primary hover:cursor-pointer hover:bg-primary-light";
  // useEffect that will be executed when form id change
  useEffect(() => {
    // Function that allows to change button status according form input statuses
    const UpdateButtonStatus = (event: Event) => {
      // Get Form Custom Event
      const FORM_EVENT = event as CustomEvent<{ formId: string; isValid: boolean }>;
      // Check if the form id from the event is the same as the form id sent in props
      if (FORM_EVENT.detail.formId === formId) {
        // Check if form is valid, if not, disable the button
        setDisabled(!FORM_EVENT.detail.isValid);
      }
    };
    // Set the Update Button Status as an Event Listener in Document
    document.addEventListener("formValidityChange", UpdateButtonStatus);
    // When useEffect finishes, unmount the event listener
    return () => {
      document.removeEventListener("formValidityChange", UpdateButtonStatus);
    };
  }, [formId]);
  // Return Hook values
  return { disabled, statusClasses: STATUS_CLASSES };
}

export default useFormButton;
