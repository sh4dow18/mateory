// Set this hook as a client hook
"use client";
// Use Inventories Hook Requirements
import { FormEvent, useEffect, useState } from "react";
import { GetEnabledInventoryResults, MODELS_LIST } from "../config";
import { ResultsValues } from "@/shared/config/results";
import { CalculateResults } from "./calculate-results";
// Use Inventories Hook Main Function
function useInventories() {
  // Use Inventories Hook Main Hooks
  const [selectedModel, setSelectedModel] = useState<string>(MODELS_LIST[0].id);
  const [results, setResults] = useState<ResultsValues>(
    GetEnabledInventoryResults(selectedModel, "0"),
  );
  // Execute this Use Effect when selected model change
  useEffect(() => {
    setResults(GetEnabledInventoryResults(selectedModel, "0"));
  }, [selectedModel]);
  // Use Inventories Main Functions
  const UpdateSelectedModel = (newSelectedModel: string) => setSelectedModel(newSelectedModel);
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    // Get the entire form as a variable
    const FORM = event.target as HTMLFormElement;
    // Get the Results
    const RESULTS = CalculateResults(selectedModel, FORM);
    // Set Results in Page
    setResults(RESULTS);
  };
  // Return new hook values and functions
  return { selectedModel, results, UpdateSelectedModel, onSubmitForm };
}

export default useInventories;
