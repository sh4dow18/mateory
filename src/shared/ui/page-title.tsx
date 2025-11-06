// Page Title Requirements
import React from "react";
import { MateoryLogo } from "@/widgets/images/ui";
// Page Title Props
interface Props {
  readonly title: string | { first: string; colored: string };
  readonly summary: string;
  readonly useLogo?: boolean;
}
// Page Title Main Function
function PageTitle({ title, summary, useLogo }: Props) {
  return (
    <section className="space-y-4">
      {/* Page Title Title Section */}
      <section className="flex flex-wrap gap-2 items-center sm:gap-4">
        <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 sm:text-4xl font-small:text-2xl font-small:sm:text-3xl font-large:text-4xl font-large:sm:text-5xl font-xlarge:text-5xl font-xlarge:sm:text-6xl">
          {typeof title === "string" ? (
            title
          ) : (
            <>
              {title.first} <span className="text-primary">{title.colored}</span>
            </>
          )}
        </h1>
        {useLogo === true && (
          <MateoryLogo
            width={288}
            height={48}
            className="w-48 h-8 font-large:sm:w-64 font-large:sm:h-10 font-xlarge:sm:w-72 font-xlarge:sm:h-12"
          />
        )}
      </section>
      {/* Page Title Sumarry Paragraph */}
      <p className="text-lg text-gray-700 dark:text-gray-400 high-contrast:text-black font-small:text-base font-large:text-xl font-xlarge:text-2xl">
        {summary}
      </p>
    </section>
  );
}

export default PageTitle;
