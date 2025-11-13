// Get Value Checked Main Function
export function GetCheckedValue(number: number | undefined) {
  // If it is not a number, return undefined string
  if (number !== undefined && isNaN(number)) {
    return "Sin Definir";
  }
  // If is infinite, return infinite symbol
  else if (number !== undefined && !isFinite(number)) {
    return "∞";
  }
  return number;
}
