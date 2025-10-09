// Benefits Requirements
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { TbClockCheck } from "react-icons/tb";
// Benefit Type
type Benefit = { id: number; Icon: IconType; title: string; summary: string };
// Home Page Benefits
export const BENEFITS_LIST: Benefit[] = [
  {
    id: 1,
    Icon: FaCheck,
    title: "Resultados precisos",
    summary: "Modelos EOQ con déficit y M/M/1:FIFO/∞/∞ para cálculos confiables.",
  },
  {
    id: 2,
    Icon: TbClockCheck,
    title: "Rápido y eficiente",
    summary: "Obtén resultados en segundos sin perder tiempo en cálculos manuales.",
  },
  {
    id: 3,
    Icon: HiAcademicCap,
    title: "Objetivo educativo",
    summary: "Consulta los modelos y fórmulas detrás de cada cálculo.",
  },
  {
    id: 4,
    Icon: MdDashboard,
    title: "Experiencia intuitiva",
    summary: "Diseñado modo dashboard para una funcionalidad clara y accesible.",
  },
];
