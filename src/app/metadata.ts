// Home Metadata Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import type { Metadata } from "next";
// Home Metadata
export const HOME_METADATA: Metadata = {
  title: ROUTES_MAP[""].title,
};
