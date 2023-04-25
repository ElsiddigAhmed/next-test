import { NavbarItemType, NavStyle } from "./navbar.types";

export interface HomePropsInterface {
  elements: Array<NavbarItemType>;
  navStyle: NavStyle;
}

export interface FormItemProps {
  children: React.ReactNode;
  value: string;
}
