// Form Config Test Suite Requirements
import { describe, it, expect } from "vitest";
import { GetFormVariablesParams } from "../config/form";
// Form Config Test Suite
describe("Form Config", () => {
  // Needed Variables
  const VARIABLES_LIST = [
    { id: "demand", disabledInModels: [] },
    { id: "cost", disabledInModels: ["modelB"] },
    { id: "productionRate", disabledInModels: [] },
  ];
  // Function that allows to create a mock form
  function CreateForm() {
    // Create Form
    const FORM = document.createElement("form");
    // Add the Demand Input
    const DEMAND_INPUT = document.createElement("input");
    DEMAND_INPUT.name = "demand";
    DEMAND_INPUT.value = "100";
    FORM.appendChild(DEMAND_INPUT);
    // Add the Cost Input
    const COST_INPUT = document.createElement("input");
    COST_INPUT.name = "cost";
    COST_INPUT.value = "50";
    FORM.appendChild(COST_INPUT);
    // Add an Input without Name
    const NO_NAME_INPUT = document.createElement("input");
    NO_NAME_INPUT.value = "999";
    FORM.appendChild(NO_NAME_INPUT);
    // Add the Production Rate without value
    const EMPTY_INPUT = document.createElement("input");
    EMPTY_INPUT.name = "productionRate";
    EMPTY_INPUT.value = "";
    FORM.appendChild(EMPTY_INPUT);
    // Add an Input outside variables list
    const UNKNOWN_INPUT = document.createElement("input");
    UNKNOWN_INPUT.name = "unknownVar";
    UNKNOWN_INPUT.value = "10";
    FORM.appendChild(UNKNOWN_INPUT);
    return FORM;
  }
  // Test 1: Return only Model A Variables as numbers
  it("return only model a variables as numbers", () => {
    // Create Mock Form
    const FORM = CreateForm();
    // Get the Form Variables Params from Model A
    const RESULT = GetFormVariablesParams(FORM, VARIABLES_LIST, "modelA");
    // Check if are the right results
    expect(RESULT).toEqual({
      demand: 100,
      cost: 50,
    });
  });
  // Test 2: Return only Model B Variables as numbers without variables disabled for that model
  it("return only model b variables as numbers", () => {
    // Create Mock Form
    const FORM = CreateForm();
    // Get the Form Variables Params from Model B
    const RESULT = GetFormVariablesParams(FORM, VARIABLES_LIST, "modelB");
    // Check if are the right results
    expect(RESULT).toEqual({ demand: 100 });
  });
  // Test 3: Return an empty object if there is not valid inputs
  it("return an empty object if there is not valid inputs", () => {
    // Create a new Mock Form
    const FORM = document.createElement("form");
    // Get the Form Variables Params from Model A
    const RESULT = GetFormVariablesParams(FORM, VARIABLES_LIST, "modelA");
    // Check if result is empty
    expect(RESULT).toEqual({});
  });
  // Test 4: Return the variables in numbers, instead strings has spaces
  it("return variables in numbers, instead strings has spaces", () => {
    // Create a new Mock Form
    const FORM = document.createElement("form");
    // Create a new Mock Input and add it to Mock Form
    const INPUT = document.createElement("input");
    INPUT.name = "demand";
    INPUT.value = "  123  ";
    FORM.appendChild(INPUT);
    // Get the Form Variables Params from Model A
    const RESULT = GetFormVariablesParams(FORM, [{ id: "demand", disabledInModels: [] }]);
    // Check if are the right results
    expect(RESULT).toEqual({ demand: 123 });
  });
});
