// Set this hook as a client hook
"use client";
// Use Queues Hook Requirements
import { FormEvent, useEffect, useState } from "react";
import { GetEnabledQueueResults, MODELS_LIST } from "../config";
import { ResultsValues } from "@/shared/config/results";
import { CalculateResults } from "./calculate-results";
// Use Queues Hook Main Function
function useQueues() {
  // Use Queues Hook Main Hooks
  const [selectedModel, setSelectedModel] = useState<string>(MODELS_LIST[0].id);
  const [results, setResults] = useState<ResultsValues>(GetEnabledQueueResults(selectedModel, "0"));
  // Execute this Use Effect when selected model change
  useEffect(() => {
    setResults(GetEnabledQueueResults(selectedModel, "0"));
  }, [selectedModel]);
  // Use Queues Main Functions
  const UpdateSelectedModel = (newSelectedModel: string) => setSelectedModel(newSelectedModel);
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    // Avoid refreshing the page
    event.preventDefault();
    // Get the Results
    const RESULTS = CalculateResults(selectedModel);
    // Set Results in Page
    setResults(RESULTS);
  };
  // Return new hook values and functions
  return { selectedModel, results, UpdateSelectedModel, onSubmitForm };
}

export default useQueues;
