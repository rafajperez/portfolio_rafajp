import { type IconType } from "react-icons";
import { HiHome, HiCode, HiUser, HiMail } from "react-icons/hi";

export interface NavLink {
  name: string;
  path: string;
  icon: IconType;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "/", icon: HiHome },
  { name: "Projetos", path: "/projects", icon: HiCode },
  { name: "Sobre", path: "/about", icon: HiUser },
  { name: "Contato", path: "/contact", icon: HiMail },
];
