// Card Requirements
import React from "react";
import Link from "next/link";
import { LinkType } from "../config/links";
// Card Props
interface Props {
  readonly children: React.ReactNode;
  readonly link?: LinkType;
  readonly colored?: boolean;
}
// Card Main Function
function Card({ children, link, colored }: Props) {
  // Card Constants
  const LINK_CLASS = link
    ? "transition-shadow cursor-pointer hover:shadow-lg hover:border-primary dark:hover:border-primary-light"
    : "";
  const COLORED_CLASS =
    colored === true
      ? "bg-primary/5 dark:bg-primary/10 high-contrast:bg-white"
      : "bg-white dark:bg-gray-900";
  const CLASSES =
    `border border-primary/30 rounded-2xl p-6 space-y-6 high-contrast:border-primary ${COLORED_CLASS} ${LINK_CLASS}`.trimEnd();
  // Return Card Component
  return link ? (
    <Link
      href={link.href.startsWith("http") ? link.href : `/${link.href}`}
      target={link.newTab ? "_blank" : undefined}
    >
      <section className={CLASSES}>{children}</section>
    </Link>
  ) : (
    <section className={CLASSES}>{children}</section>
  );
}

export default Card;
