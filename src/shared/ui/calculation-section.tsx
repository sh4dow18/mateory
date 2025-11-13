// Calculation Section Component
import { Button, Form, Input, Select } from "@/widgets/forms/ui";
import PageTitle from "./page-title";
import SectionCard from "./section-card";
import ModelButton from "./model-button";
import ResultCard from "./result-card";
import { FormEvent } from "react";
import { Model } from "../config/models";
import { Variable } from "../config/variables";
import { ResultConfig } from "@/widgets/forms/config/results-settings";
import { Result, ResultsValues } from "../config/results";
// Calculation Section Props
interface Props {
  readonly title: { first: string; colored: string };
  readonly summary: string;
  readonly selectedModel: string;
  readonly modelsList: Model[];
  readonly variablesList: Variable[];
  readonly resultsConfigList: ResultConfig[];
  readonly resultsList: Result[];
  readonly resultsValues: ResultsValues;
  readonly updateSelectedModel: (model: string) => void;
  readonly onSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
  readonly classNames?: {
    modelsSection?: string;
    variablesSection?: string;
    resultsConfigSection?: string;
    resultsSection?: string;
  };
}
// Calculation Section Main Section
function CalculationSection({
  title,
  summary,
  selectedModel,
  modelsList,
  variablesList,
  resultsConfigList,
  resultsList,
  resultsValues,
  updateSelectedModel,
  onSubmitForm,
  classNames,
}: Props) {
  return (
    <>
      <PageTitle title={title} summary={summary} />
      <Form id="variables-form" onSubmit={onSubmitForm} className="space-y-8">
        {/* Available Models Section Card */}
        <SectionCard title="Modelos Disponibles" className={classNames?.modelsSection}>
          {modelsList.map((model) => (
            <ModelButton
              key={model.id}
              label={model.name}
              selected={selectedModel === model.id}
              onClick={() => updateSelectedModel(model.id)}
            />
          ))}
        </SectionCard>
        {/* Inputs Variables Section Card */}
        <SectionCard title="Variables" className={classNames?.variablesSection}>
          {variablesList.map((variable) => (
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
          className={classNames?.resultsConfigSection}
        >
          {resultsConfigList.map((resultConfig) =>
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
        className={classNames?.resultsSection}
        nodeWithTitle={<Button form="variables-form" display="Obtener Resultados" />}
      >
        {resultsList.map((result) => (
          <ResultCard
            key={result.id}
            label={result.name}
            value={
              !result.disabledInModels.includes(selectedModel)
                ? resultsValues[result.id]
                : undefined
            }
          />
        ))}
      </SectionCard>
    </>
  );
}

export default CalculationSection;
