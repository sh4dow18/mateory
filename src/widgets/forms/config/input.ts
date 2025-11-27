// Input Config Requirements
import { VARIABLE_VALIDATION_REGEX, VariableValidation } from "@/shared/config/variables";
// Input Config Types
export type InputStatus = "Valid" | "Neutral" | "Invalid";
export type InputSettings = {
  example: string;
  validation: VariableValidation;
  maxLength: number;
};
export type InputValidation = "name" | "email";
// Input Help Messages to use in Inputs
export const HELP_MESSAGE: Record<string, string> = {
  // Only Positive Numbers
  // Example: 8000 or 9502.43
  number: "Solamente Números Positivos",
  // Only Integer Numbers from 1 to 9
  // Example: 1 or 9
  "1-to-9": "Solamente Números del 1 al 9",
  // Only valid names
  // Example: Ramsés Solano or John Smith
  name: "El Nombre es Requerido",
  // Only valid e-mails
  // Example: sh4dow18@mateory.com or example@example.com
  email: "Solo Correos Electrónicos Validos",
};
// Input Regular Expressions to use in Validations
const _INPUT_VALIDATION_REGEX: Record<string, RegExp> = {
  // Only valid names
  // Example: Ramsés Solano or John Smith
  name: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ']+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ']+)*$/,
  // Only valid e-mails
  // Example: sh4dow18@mateory.com or example@example.com
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
// Global Input Validation Regex
export const INPUT_VALIDATION_REGEX: Record<string, RegExp> = {
  ..._INPUT_VALIDATION_REGEX,
  ...VARIABLE_VALIDATION_REGEX,
};
