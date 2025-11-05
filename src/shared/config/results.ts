// Results Object Record Type
export type ResultsValues = Record<string, string | number | undefined>;
// Result Type
export type Result = {
  id: string;
  name: string;
  disabledInModels: string[];
};
export type ResultValue = string | number;
// Function that allows to get the Enabled Results as Object in Selected Model with the same value
// Example Result: { example1: 0, example2: 0, ... }
export const GetEnabledResults = (
  resultsList: Result[],
  selectedModel: string,
  value: ResultValue,
) => {
  return Object.fromEntries(
    resultsList
      .filter((result) => !result.disabledInModels.includes(selectedModel))
      .map((result) => [result.id, value]),
  );
};
