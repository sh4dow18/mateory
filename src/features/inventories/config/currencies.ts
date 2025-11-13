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
// Currencies Names Record
const CURRENCIES_NAMES: Record<string, string> = {
  [CURRENCIES_IDS.colon]: "Colón",
  [CURRENCIES_IDS.dolar]: "Dolar",
  [CURRENCIES_IDS.euro]: "Euro",
};
// Currencies List
export const CURRENCIES_LIST: SelectOption[] = Object.values(CURRENCIES_IDS).map((id) => ({
  display: `${CURRENCIES_NAMES[id]} (${CURRENCY_SYMBOL[id]})`,
  value: id,
}));
