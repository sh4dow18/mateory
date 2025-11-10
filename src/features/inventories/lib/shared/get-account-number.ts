//  Get Account Number Requirements
import { CURRENCY_SYMBOL } from "../../config";
// Returns a string number in accounting format
// Example: "12000" to "$12,000.00"
export function GetAccountNumber(currency: number, number: number): string {
  return `${CURRENCY_SYMBOL[currency]}${number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
