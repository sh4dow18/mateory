// Set this hook as a client hook
"use client";
// Use Form Hook Requirements
import { FormEvent, useEffect, useRef } from "react";
import { OnSubmitType } from "../config/form";
import { AlertSettings } from "../config/alert";
// Use Form Hook Main Function
function useForm(
  id: string,
  onSubmit: OnSubmitType,
  UpdateAlertSettings: (newSettings: AlertSettings) => void,
  successAlertMessage: string,
) {
  // Use Form Hook Main Hooks
  const FORM_REFERENCE = useRef<HTMLFormElement | null>(null);
  // useEffect that will be executed when page is loading
  useEffect(() => {
    // Check Form Valid function
    const CheckValid = () => {
      // If the Reference Exists, continue
      if (FORM_REFERENCE.current) {
        // First, get every Input and Select in the Form
        // Later, create a new key-value array with input name and aria-invalid attribute
        // Example: [ ["name", true], ["email", false] ]
        const INPUTS_LIST = Array.from(
          FORM_REFERENCE.current.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
            "input, select",
          ),
        )
          .filter((input) => !input.disabled)
          .map((input) => [input.name, input.getAttribute("aria-invalid") === "false"]);
        // Create a new object from a key-value array
        // Example: From [ ["name", true], ["email", false] ] to { name: true, email: false }
        const FORM_OBJECT = Object.fromEntries(INPUTS_LIST);
        // Get values from FORM_OBJECT to check if every value is true
        // If it is true, set false, if not, set true
        const IS_VALID = Object.values(FORM_OBJECT).every(Boolean);
        // Set a new Custom Event with "formValidityChange" name
        const NEW_EVENT = new CustomEvent("formValidityChange", {
          detail: { formId: id, isValid: IS_VALID },
        });
        // Add Event
        document.dispatchEvent(NEW_EVENT);
      }
    };
    // If there is a reference, call Check Valid Function
    if (FORM_REFERENCE.current) {
      CheckValid();
    }
    // If not, wait to exists
    else {
      const TIMEOUT = setTimeout(CheckValid, 0);
      return () => clearTimeout(TIMEOUT);
    }
    // Create a new observer for "aria invalid" attributes to update the disabled attribute on the Submit button
    // Mutation Observer can observe changes in the DOM
    const ARIA_INVALID_OBSERVER = new MutationObserver(CheckValid);
    // If the Reference Exists, continue
    if (FORM_REFERENCE.current) {
      // Aria Invalid Observer can observe attributes and subtrees, but focuses on the aria-invalid and sisabled
      // attributes and its children
      ARIA_INVALID_OBSERVER.observe(FORM_REFERENCE.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ["aria-invalid", "disabled"],
        childList: true,
      });
    }
    // When useEffect finishes, unmount the observer
    return () => {
      ARIA_INVALID_OBSERVER.disconnect();
    };
  }, [id]);
  // Form on Submit complete function
  const onSubmitComplete = async (event: FormEvent<HTMLFormElement>) => {
    // Avoid refreshing the page
    event.preventDefault();
    //
    document.dispatchEvent(
      new CustomEvent("formSubmittingChange", {
        detail: { formId: id, isSubmitting: true },
      }),
    );
    // Set Loading Alert Settings
    UpdateAlertSettings({
      isOpen: true,
      title: "Cargando",
      message: "Procesando...",
      type: "loading",
    });
    // Execute the on Submit Sent
    const RESPONSE = await onSubmit(event);
    // Check if the Response is an API Response
    if (RESPONSE instanceof Response) {
      // Get Ok Value
      const OK = RESPONSE.ok;
      // Update Alert Settings according Response
      UpdateAlertSettings({
        isOpen: true,
        title: OK ? "Éxito" : "Error",
        message: OK ? successAlertMessage : (await RESPONSE.json()).error,
        type: OK ? "success" : "error",
      });
    }
    // If not, means that is is a Normal Submit
    else {
      // Set Successful Alert Settings
      UpdateAlertSettings({
        isOpen: true,
        title: "Éxito",
        message: successAlertMessage,
        type: "success",
      });
    }
    //
    document.dispatchEvent(
      new CustomEvent("formSubmittingChange", {
        detail: { formId: id, isSubmitting: false },
      }),
    );
  };
  // Return Hook Values
  return { reference: FORM_REFERENCE, onSubmitComplete };
}

export default useForm;
