// Get Factorial of a Number
export function GetFactorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * GetFactorial(number - 1);
}
