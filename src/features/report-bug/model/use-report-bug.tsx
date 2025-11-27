// Use Report Bug Hook Requirements
import { FormEvent } from "react";
// Use Report Bug Hook Main Function
function useReportBug() {
  // On Submit Form Function
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    // Get the entire form as a variable
    const FORM = new FormData(event.currentTarget);
    // Get the API Response
    return await fetch("/api/emails/report-bug", {
      method: "POST",
      body: FORM,
    });
  };
  // Return Hook Values
  return { onSubmitForm };
}

export default useReportBug;
