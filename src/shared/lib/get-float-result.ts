// Function that allows to have a Number with the decimals that the user specifies
export function GetFloatResult(result: number, decimals: number) {
  return Number.parseFloat(result.toFixed(decimals));
}
