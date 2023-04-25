export interface NavbarItemType {
  name: string;
  url: string;
  display: boolean;
}

export type NavStyle = "style_1" | "style_2" | "style_3";

export interface NavbarPropsInterface {
  navbarType: NavStyle;
  customeNavbarItems: Array<NavbarItemType>;
}

export interface NavbarItemsCompProps {
  svg: any;
  title: string;
  styles: any;
  link: string;
  hidden: boolean;
}
