// Routes Requirements
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
// Route Type
type Route = {
  readonly path: string;
  readonly label: string;
  readonly Icon: IconType;
};
// Routes List
export const ROUTES_LIST: Route[] = [{ path: "", label: "Inicio", Icon: FaHome }];
