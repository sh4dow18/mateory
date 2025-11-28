// Report Bug Route Requirements
import { ReportBug } from "@/modules/emails/services";
// Force Node JS Runtime
export const runtime = "nodejs";
// Report Bug Post Function
export async function POST(request: Request) {
  return ReportBug(request);
}
