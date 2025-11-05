// Set this component as a client component
"use client";
// Select Requirements
import React from "react";
import { Card } from "@/shared/ui";
import { SelectOption } from "../config/select";
// Select Props
interface Props {
  readonly label: string;
  readonly optionsList: SelectOption[];
  readonly name: string;
}
// Select Main Function
function Select({ label, optionsList, name }: Props) {
  return (
    <Card>
      <label
        htmlFor={name}
        className="font-medium text-gray-700 dark:text-gray-300 high-contrast:text-black font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        aria-invalid={false}
        required
        className="my-2 w-full rounded-md outline-2 py-2 pl-2 bg-white text-black outline-gray-400 focus-within:outline-primary dark:bg-gray-800 dark:text-white dark:outline-gray-700 font-small:text-sm font-large:text-lg font-xlarge:text-xl"
      >
        {optionsList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
      {/* Select Help Message */}
      <small className="dark:text-gray-300 font-small:text-sm font-large:text-lg font-xlarge:text-xl">
        Se debe Seleccionar una Opción
      </small>
    </Card>
  );
}

export default Select;
