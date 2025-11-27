// Variables Types
export type Variable = {
  name: string;
  example: string;
  id: string;
  validation: VariableValidation;
  disabledInModels: string[];
};
export type VariableValidation = "number" | "1-to-9";
// Variable Regular Expressions to use in Validations
export const VARIABLE_VALIDATION_REGEX: Record<string, RegExp> = {
  // Only Positive Numbers
  // Example: 8000 or 9502.43
  number: /^\d+(\.\d+)?$/,
  // Only Integer Numbers from 1 to 10
  // Example: 1 or 10
  "1-to-9": /^[1-9]$/,
};
