// Currencies Requirements
import { SelectOption } from "@/widgets/forms/config/select";
// Currencies Ids Constants
export const CURRENCIES_IDS = {
  colon: 1,
  dolar: 2,
  euro: 3,
};
// Currencies Symbol Record
export const CURRENCY_SYMBOL: Record<number, string> = {
  [CURRENCIES_IDS.colon]: "₡",
  [CURRENCIES_IDS.dolar]: "$",
  [CURRENCIES_IDS.euro]: "€",
};
// Currencies List
export const CURRENCIES_LIST: SelectOption[] = [
  {
    display: "Colón (₡)",
    value: CURRENCIES_IDS.colon,
  },
  {
    display: "Dólar ($)",
    value: CURRENCIES_IDS.dolar,
  },
  {
    display: "Euro (€)",
    value: CURRENCIES_IDS.euro,
  },
];
