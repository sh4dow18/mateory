// Use this hook as a client hook
"use client";
// Use Form Button Hook Requirements
import { useEffect, useState } from "react";
import { isSubmittingEvent, isValidEvent } from "../config/button";
// Use Form Button Hook Main Function
function useFormButton(formId: string) {
  // Use Form Button Hook Main Hooks
  const [disabled, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Use Form Button Hook Main Constants
  const STATUS_CLASSES = disabled
    ? "bg-gray-300 hover:cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 high-contrast:bg-black high-contrast:text-gray-300"
    : "bg-primary hover:cursor-pointer hover:bg-primary-light";
  // useEffect that will be executed when form id change
  useEffect(() => {
    // Function that allows to change button status according form input statuses
    const UpdateButtonStatus = (event: Event) => {
      // Get Form Custom Event
      const FORM_EVENT = event as CustomEvent<isValidEvent>;
      // Check if the form id from the event is the same as the form id sent in props
      if (FORM_EVENT.detail.formId === formId) {
        // Check if form is valid, if not, disable the button
        setDisabled(!FORM_EVENT.detail.isValid);
      }
    };
    // Function that allows to change button status according submitting status
    const UpdateSubmittingStatus = (event: Event) => {
      // Get Form Custom Event
      const FORM_EVENT = event as CustomEvent<isSubmittingEvent>;
      // Check if the form id from the event is the same as the form id sent in props
      if (FORM_EVENT.detail.formId === formId) {
        // Set submitting status
        const IS_SUBMITTING = FORM_EVENT.detail.isSubmitting;
        setDisabled(IS_SUBMITTING);
        setIsSubmitting(IS_SUBMITTING);
      }
    };
    // Set the Update Button Status as an Event Listener in Document
    document.addEventListener("formValidityChange", UpdateButtonStatus);
    // Set the Update Submitting Status as an Event Listener in Document
    document.addEventListener("formSubmittingChange", UpdateSubmittingStatus);
    // When useEffect finishes, unmount the event listener
    return () => {
      document.removeEventListener("formValidityChange", UpdateButtonStatus);
      document.removeEventListener("formSubmittingChange", UpdateSubmittingStatus);
    };
  }, [formId]);
  // Return Hook values
  return { disabled, statusClasses: STATUS_CLASSES, isSubmitting };
}

export default useFormButton;
