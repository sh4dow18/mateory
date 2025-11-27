// Report Bug Route Requirements
import { ReportBug } from "@/modules/emails/services";
// Report Bug Post Function
export async function POST(request: Request) {
  return ReportBug(request);
}
