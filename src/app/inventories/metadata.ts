// Inventories Metadata Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import type { Metadata } from "next";
// Inventories Page Data
const PAGE_DATA = ROUTES_MAP["inventories"];
// Inventories Metadata
export const INVENTORIES_METADATA: Metadata = {
  title: PAGE_DATA.title,
  description: PAGE_DATA.summary,
};
