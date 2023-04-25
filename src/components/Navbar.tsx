import React from "react";
import { useEffect, useState } from "react";

// TODO: Import modules from indexing files will be more readable

// importing css modules
import style_1 from "@/styles/Nav1.module.css";
import style_2 from "@/styles/Nav2.module.css";
import style_3 from "@/styles/Nav3.module.css";

// imoprting svg modules
import Cart from "@/assets/svgs/cart.svg";
import Home from "@/assets/svgs/home.svg";
import Lang from "@/assets/svgs/lang.svg";
import User from "@/assets/svgs/user.svg";
import Location from "@/assets/svgs/location.svg";
import Logo from "@/assets/svgs/logo.svg";

// import types
import {
  NavbarItemsCompProps,
  NavbarPropsInterface,
} from "../types/navbar.types";

const Navbar = (props: NavbarPropsInterface) => {
  const [styles, setStyles] = useState(style_1);

  const stylesArr: Array<any> = [
    { name: "style_1", file: style_1 },
    { name: "style_2", file: style_2 },
    { name: "style_3", file: style_3 },
  ];

  useEffect(() => {
    setStyles(stylesArr?.find((item) => item.name === props.navbarType)?.file);
  }, [props.navbarType]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "logo")
              ?.display
          }
        >
          <a href="#">
            <div className={styles.logo}>
              <Logo width="38px" height="38px" />
            </div>
          </a>
        </li>
        <li
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "location")
              ?.display
          }
        >
          <div className={styles.log2o}>
            <Location width="20px" height="20px" />
            <span>location</span>
          </div>
        </li>

        <form action="" className={styles.navForm}>
          <input
            className={styles.navSearch}
            type="text"
            placeholder="Are you looking for something?"
          />
        </form>
        <NavbarItem
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "lang")
              ?.display
          }
          styles={styles}
          svg={Lang}
          title="ar"
          link="#"
        />
        <NavbarItem
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "account")
              ?.display
          }
          styles={styles}
          svg={User}
          title="elsiddig"
          link="#"
        />
        <NavbarItem
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "home")
              ?.display
          }
          styles={styles}
          svg={Home}
          title="home"
          link="#"
        />
        <NavbarItem
          hidden={
            !props.customeNavbarItems?.find((item) => item.name === "cart")
              ?.display
          }
          styles={styles}
          svg={Cart}
          title="cart"
          link="#"
        />
      </ul>
    </nav>
  );
};

const NavbarItem = (props: NavbarItemsCompProps) => {
  return (
    <li hidden={props.hidden} className={props.styles.navLink}>
      <a href={props.link}>
        <div className={props.styles.navItem}>
          <props.svg width="20px" height="20px" /> <span>{props.title}</span>
        </div>
      </a>
    </li>
  );
};

export default Navbar;
