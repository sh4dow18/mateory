// Report Bug Metadata Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import type { Metadata } from "next";
// Report Bug Page Data
const PAGE_DATA = ROUTES_MAP["report-bug"];
// Report Bug Metadata
export const REPORT_BUG_METADATA: Metadata = {
  title: PAGE_DATA.title,
  description: PAGE_DATA.summary,
};
