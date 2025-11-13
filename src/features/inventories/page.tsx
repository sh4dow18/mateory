// Use this component as a client component
"use client";
// Inventories Page Requirements
import React from "react";
import { CalculationSection } from "@/shared/ui";
import { VARIABLES_LIST } from "./config/variables";
import { MODELS_LIST } from "./config/models";
import { RESULTS_LIST } from "./config/results";
import { ROUTES_MAP } from "@/shared/config/routes";
import { useInventories } from "./model";
import { RESULTS_CONFIG_LIST } from "./config";
// Inventories Page Main Function
function InventoriesPage() {
  // Inventories Page Hooks
  const { selectedModel, results, UpdateSelectedModel, onSubmitForm } = useInventories();
  // Return Inventories Page Component
  return (
    <CalculationSection
      title={{
        first: "Teoría de",
        colored: "Inventarios",
      }}
      summary={ROUTES_MAP["inventories"].summary}
      selectedModel={selectedModel}
      modelsList={MODELS_LIST}
      variablesList={VARIABLES_LIST}
      resultsConfigList={RESULTS_CONFIG_LIST}
      resultsList={RESULTS_LIST}
      resultsValues={results}
      updateSelectedModel={UpdateSelectedModel}
      onSubmitForm={onSubmitForm}
      classNames={{
        modelsSection: "grid grid-cols-1 gap-3 min-[425px]:grid-cols-2 md:grid-cols-4",
        variablesSection:
          "grid gap-5 sm:grid-cols-2 xl:grid-cols-3 font-large:sm:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:sm:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2",
        resultsConfigSection:
          "grid gap-5 sm:grid-cols-2 font-large:sm:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:sm:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2",
        resultsSection:
          "grid gap-5 md:grid-cols-2 lg:grid-cols-3 font-large:md:grid-cols-1 font-large:lg:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:md:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2",
      }}
    />
  );
}

export default InventoriesPage;
