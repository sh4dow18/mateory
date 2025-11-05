// Use this component as a client component
"use client";
// Inventories Page Requirements
import { ModelButton, PageTitle, ResultCard, SectionCard } from "@/shared/ui";
import React from "react";
import { VARIABLES_LIST } from "./config/variables";
import { MODELS_LIST } from "./config/models";
import { RESULTS_LIST } from "./config/results";
import { Button, Form, Input, Select } from "@/widgets/forms/ui";
import { ROUTES_MAP } from "@/shared/config/routes";
import { useInventories } from "./model";
import { RESULTS_CONFIG_LIST } from "../../widgets/forms/config/results-settings";
// Inventories Page Main Function
function InventoriesPage() {
  // Inventories Page Hooks
  const { selectedModel, results, UpdateSelectedModel, onSubmitForm } = useInventories();
  // Return Inventories Page Component
  return (
    <>
      <PageTitle
        title={{
          first: "Teoría de",
          colored: "Inventarios",
        }}
        summary={ROUTES_MAP["inventories"].summary}
      />
      <Form id="variables-form" onSubmit={onSubmitForm} className="space-y-8">
        {/* Available Models Section Card */}
        <SectionCard
          title="Modelos Disponibles"
          className="grid grid-cols-1 gap-3 min-[425px]:grid-cols-2 md:grid-cols-4"
        >
          {MODELS_LIST.map((model) => (
            <ModelButton
              key={model.id}
              label={model.name}
              selected={selectedModel === model.id}
              onClick={() => UpdateSelectedModel(model.id)}
            />
          ))}
        </SectionCard>
        {/* Inputs Variables Section Card */}
        <SectionCard
          title="Variables"
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 font-large:sm:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:sm:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2"
        >
          {VARIABLES_LIST.map((variable) => (
            <Input
              key={variable.id}
              label={variable.name}
              example={variable.example}
              name={variable.id}
              validation={variable.validation}
              maxLength={9}
              disabled={variable.disabledInModels.includes(selectedModel)}
            />
          ))}
        </SectionCard>
        {/* Results Config Section Card */}
        <SectionCard
          title="Configuración de Resultados"
          className="grid gap-5 sm:grid-cols-2 font-large:sm:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:sm:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2"
        >
          {RESULTS_CONFIG_LIST.map((resultConfig) =>
            Array.isArray(resultConfig.settings) ? (
              <Select
                key={resultConfig.id}
                label={resultConfig.name}
                optionsList={resultConfig.settings}
                name={resultConfig.id}
              />
            ) : (
              <Input
                key={resultConfig.id}
                label={resultConfig.name}
                example={resultConfig.settings.example}
                name={resultConfig.id}
                validation={resultConfig.settings.validation}
                maxLength={resultConfig.settings.maxLength}
              />
            ),
          )}
        </SectionCard>
      </Form>
      {/* Results Section Card */}
      <SectionCard
        title="Resultados"
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 font-large:md:grid-cols-1 font-large:lg:grid-cols-1 font-large:xl:grid-cols-2 font-xlarge:md:grid-cols-1 font-xlarge:lg:grid-cols-1 font-xlarge:xl:grid-cols-2"
        nodeWithTitle={<Button form="variables-form" display="Obtener Resultados" />}
      >
        {RESULTS_LIST.map((result) => (
          <ResultCard
            key={result.id}
            label={result.name}
            value={
              !result.disabledInModels.includes(selectedModel) ? results[result.id] : undefined
            }
          />
        ))}
      </SectionCard>
    </>
  );
}

export default InventoriesPage;
