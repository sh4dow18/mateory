//  Get Account Number Requirements
import { GetCheckedValue } from "@/shared/lib";
import { CURRENCY_SYMBOL } from "../../config";
// Returns a string number in accounting format
// Example: "12000" to "$12,000.00"
export function GetAccountNumber(currency: number, number: number | undefined) {
  // Check if the number is undefined
  if (number === undefined || typeof GetCheckedValue(number) === "string") {
    return number;
  }
  return `${CURRENCY_SYMBOL[currency]}${number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
