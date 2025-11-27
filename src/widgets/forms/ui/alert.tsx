// Alert Requirements
import React from "react";
import { ALERT_STYLES_RECORD, AlertType } from "../config/alert";
// Alert Props
interface Props {
  readonly type: AlertType;
  readonly title: string;
  readonly message: string;
  readonly onClick: () => void;
}
// Alert Main Function
function Alert({ type, title, message, onClick }: Props) {
  // Alert Main Constants
  const { Icon, boxColorClasses, iconColorClasses } = ALERT_STYLES_RECORD[type];
  const ALERT_CLASSES = `fixed text-left top-4 right-4 z-50 max-w-sm rounded-xl border p-4 shadow-lg flex gap-4 select-none animate-slide-in cursor-pointer ${boxColorClasses}`;
  // Return Alert Component
  return (
    <button type="button" className={ALERT_CLASSES} onClick={onClick}>
      <Icon className={`w-6 h-6 ${iconColorClasses}`} />
      <section className="flex flex-col">
        <span className="text-lg font-semibold text-gray-900">{title}</span>
        <p className="text-sm mt-1">{message}</p>
      </section>
    </button>
  );
}

export default Alert;
