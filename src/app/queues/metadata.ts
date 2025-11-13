// Queues Metadata Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import type { Metadata } from "next";
// Queues Page Data
const PAGE_DATA = ROUTES_MAP["queues"];
// Queues Metadata
export const QUEUES_METADATA: Metadata = {
  title: PAGE_DATA.title,
  description: PAGE_DATA.summary,
};
