// Summary Card Requirements
import React from "react";
import { Card } from "@/shared/ui";
import { IconType } from "react-icons";
// Summary Card Props
interface Props {
  readonly Icon: IconType;
  readonly title: string;
  readonly summary: string;
  readonly link?: string;
  readonly colored?: boolean;
  readonly wrapTitle?: boolean;
}
// Summary Card Main Function
function SummaryCard({ Icon, title, summary, link, colored, wrapTitle }: Props) {
  // Summary Card Constants
  const WRAP_CLASS = wrapTitle === true ? "flex-wrap" : "";
  // Return Summary Card Component
  return (
    <Card link={link} colored={colored}>
      {/* Summary Card Title Section */}
      <section
        className={`flex items-center gap-3 text-primary font-semibold mb-3 text-lg ${WRAP_CLASS}`.trimEnd()}
      >
        <Icon aria-label="icon" /> {title}
      </section>
      {/* Summary Card Summary */}
      <p className="text-gray-600 text-sm">{summary}</p>
    </Card>
  );
}

export default SummaryCard;
