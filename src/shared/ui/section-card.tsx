// Section Card Requirements
import React from "react";
import Card from "./card";
// Section Card Props
interface Props {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly nodeWithTitle?: React.ReactNode;
}
// Section Card Main Function
function SectionCard({ title, children, className, nodeWithTitle }: Props) {
  // Section Card Main Constants
  const TITLE_CLASSES =
    "text-lg font-semibold text-gray-700 dark:text-gray-300 high-contrast:text-black sm:text-xl font-small:text-base font-small:sm:text-lg font-large:text-xl font-large:sm:text-2xl font-xlarge:text-2xl font-xlarge:sm:text-3xl";
  // Return Section Card Component
  return (
    <Card>
      {nodeWithTitle ? (
        <div className="flex flex-col gap-3 min-[530px]:flex-row min-[530px]:justify-between">
          <h2 className={TITLE_CLASSES}>{title}</h2>
          {nodeWithTitle}
        </div>
      ) : (
        <h2 className={TITLE_CLASSES}>{title}</h2>
      )}
      <div className={className}>{children}</div>
    </Card>
  );
}

export default SectionCard;
