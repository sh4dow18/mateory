// Alert Config Requirements
import { IconType } from "react-icons";
import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
// Alert Config Types
type AlertStyles = {
  Icon: IconType;
  iconColorClasses: string;
  boxColorClasses: string;
};
export type AlertType = "success" | "loading" | "error";
export type AlertSettings = {
  isOpen: boolean;
  title: string;
  message: string;
  type: AlertType;
};
// Alert Styles Record
export const ALERT_STYLES_RECORD: Record<string, AlertStyles> = {
  success: {
    Icon: BiCheckCircle,
    iconColorClasses: "text-green-600",
    boxColorClasses: "border-green-300 bg-green-50",
  },
  loading: {
    Icon: BiInfoCircle,
    iconColorClasses: "text-blue-600",
    boxColorClasses: "border-blue-300 bg-blue-50",
  },
  error: {
    Icon: FiAlertTriangle,
    iconColorClasses: "text-red-600",
    boxColorClasses: "border-red-300 bg-red-50",
  },
};
// Default Alert Settings
export const DEFAULT_ALERT_SETTINGS: AlertSettings = {
  isOpen: false,
  title: "Cargando",
  message: "Obteniendo datos",
  type: "loading",
};
