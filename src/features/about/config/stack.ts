// Stack Requirements
import { IconType } from "react-icons";
import { CgBrowser } from "react-icons/cg";
import { GrDeploy } from "react-icons/gr";
// Stack Types
type Stack = {
  id: number;
  title: string;
  summary: string;
  icon: IconType;
};
// Stack List
export const STACK_LIST: Stack[] = [
  {
    id: 1,
    title: "Página Web",
    summary: "Next.JS, TailwindCSS y Typescript",
    icon: CgBrowser,
  },
  {
    id: 2,
    title: "Despliegue",
    summary: "Vercel",
    icon: GrDeploy,
  },
];
