// Form Variables Object Type
export type FormVariables = Record<string, number>;
// Function that allows to get automatically variables from form
export function GetFormVariablesParams(
  form: HTMLFormElement,
  variablesList: { id: string; disabledInModels?: string[] }[],
  selectedModel?: string,
): FormVariables {
  // Transform the array into an Form Variable Object
  return Object.fromEntries(
    Array.from(form.elements)
      // Filter all to only get Inputs, Selects and Text Areas that has a "name" prop
      // and is value is not empty
      .filter(
        (element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
          (element instanceof HTMLInputElement ||
            element instanceof HTMLSelectElement ||
            element instanceof HTMLTextAreaElement) &&
          Boolean(element.name) &&
          element.value !== "",
      )
      // Filter all to only get the valid variables according the selected model
      .filter((element) =>
        variablesList.some(
          (variable) =>
            variable.id === element.name &&
            (!selectedModel || !variable.disabledInModels?.includes(selectedModel)),
        ),
      )
      // Transform each element in a key-value pair
      .map((element) => {
        const VALUE = element.value.trim();
        const PARSED_VALUE = Number(VALUE);
        return [element.name, PARSED_VALUE];
      }),
  );
}
