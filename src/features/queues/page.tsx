// Use this component as a client component
"use client";
// Queues Page Requirements
import React from "react";
import { CalculationSection } from "@/shared/ui";
import { VARIABLES_LIST } from "./config/variables";
import { MODELS_LIST } from "./config/models";
import { RESULTS_LIST } from "./config/results";
import { ROUTES_MAP } from "@/shared/config/routes";
import { useQueues } from "./model";
import { RESULTS_CONFIG_LIST } from "./config";
// Queues Page Main Function
function QueuesPage() {
  // Queues Page Hooks
  const { selectedModel, results, UpdateSelectedModel, onSubmitForm } = useQueues();
  // Return Queues Page Component
  return (
    <CalculationSection
      title={{
        first: "Teoría de",
        colored: "Colas",
      }}
      summary={ROUTES_MAP["queues"].summary}
      selectedModel={selectedModel}
      modelsList={MODELS_LIST}
      variablesList={VARIABLES_LIST}
      resultsConfigList={RESULTS_CONFIG_LIST}
      resultsList={RESULTS_LIST}
      resultsValues={results}
      updateSelectedModel={UpdateSelectedModel}
      onSubmitForm={onSubmitForm}
      classNames={{
        modelsSection: "grid grid-cols-1 gap-3 min-[425px]:grid-cols-2 md:grid-cols-3",
        variablesSection:
          "grid gap-5 sm:grid-cols-2 font-large:sm:grid-cols-1 font-xlarge:sm:grid-cols-1",
        resultsConfigSection:
          "grid gap-5 sm:grid-cols-2 font-large:sm:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:sm:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2",
        resultsSection:
          "grid gap-5 md:grid-cols-2 lg:grid-cols-3 font-large:md:grid-cols-1 font-large:lg:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:md:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2",
      }}
    />
  );
}

export default QueuesPage;
