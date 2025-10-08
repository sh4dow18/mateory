// Card Requirements
import React from "react";
import Link from "next/link";
// Card Props
interface Props {
  readonly children: React.ReactNode;
  readonly link?: string;
  readonly colored?: boolean;
}
// Card Main Function
function Card({ children, link, colored }: Props) {
  // Card Constants
  const LINK_CLASS = link
    ? "transition-all cursor-pointer hover:shadow-lg hover:border-primary"
    : "";
  const COLORED_CLASS = colored === true ? "bg-primary/5" : "bg-white";
  const CLASSES =
    `border border-primary/30 rounded-2xl p-6 space-y-6 ${COLORED_CLASS} ${LINK_CLASS}`.trimEnd();
  // Return Card Component
  return link ? (
    <Link href={`/${link}`} className={CLASSES}>
      {children}
    </Link>
  ) : (
    <section className={CLASSES}>{children}</section>
  );
}

export default Card;
