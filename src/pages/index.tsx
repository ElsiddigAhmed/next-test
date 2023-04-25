import React from "react";

import Navbar from "@/components/Navbar";
import styles from "@/styles/home.module.css";
import nav1 from "@/assets/imgs/nav1.png";
import nav2 from "@/assets/imgs/nav2.png";
import nav3 from "@/assets/imgs/nav3.png";
import Image from "next/image";

import { useEffect, useState } from "react";
import { FormItemProps, HomePropsInterface } from "@/types/home.types";
import { NavbarItemType } from "@/types/navbar.types";

export async function getServerSideProps() {
  const response = await fetch(
    "http://localhost:3000/api/custom-navbar-elements"
  );

  const jsonData = await response.json();
  return {
    props: {
      navStyle: jsonData.navStyle,
      elements: jsonData.elements,
    },
  };
}

export default function Home({ elements, navStyle }: HomePropsInterface) {
  const [customNavbarElements, setCustomNavbarElements]: Array<any> =
    useState();
  const [theme, setTheme]: any = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCustomNavbarElements(elements);
    setTheme(navStyle);
  }, [elements, navStyle]);

  const selectNavbarItem = (item: NavbarItemType) => {
    const restOfElements = customNavbarElements.map((oldItem: any) => {
      if (item.name === oldItem.name) {
        oldItem.display = !oldItem.display;
        return oldItem;
      } else {
        return oldItem;
      }
    });

    setCustomNavbarElements(restOfElements);
  };

  const handleChange = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://localhost:3000/api/update/set-navbar-elements", {
        method: "POST",
        body: JSON.stringify({
          navStyle: e.target.radio.value,
          elements: customNavbarElements,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTheme(e.target.radio.value);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      // ...
    }
  };

  return (
    <main>
      <Navbar navbarType={theme || navStyle} customeNavbarItems={elements} />

      <section className={styles.navbarSelectionWrapper}>
        <div className={styles.navbarSelection}>
          <h2 className={styles.title}>Select and Customize Your Navbar</h2>
          <div>
            <form onSubmit={handleChange}>
              <FormLabelItem value={"style_1"}>
                <Image
                  src={nav1}
                  className={styles.navbarSample}
                  alt="nav1"
                  priority
                />
              </FormLabelItem>

              <FormLabelItem value={"style_2"}>
                <Image
                  src={nav2}
                  className={styles.navbarSample}
                  alt="nav2"
                  priority
                />
              </FormLabelItem>

              <FormLabelItem value={"style_3"}>
                <Image
                  src={nav3}
                  className={styles.navbarSample}
                  alt="nav3"
                  priority
                />
              </FormLabelItem>
              <h4 className={styles.title}>Select navbar elements</h4>

              <div className={styles.elementsWrapper}>
                {customNavbarElements?.map((item: any, id: any) => (
                  <button
                    type="button"
                    key={id}
                    onClick={() => selectNavbarItem(item)}
                    className={
                      customNavbarElements.find(
                        (i: any) => i.name === item.name
                      ).display
                        ? styles.selected
                        : styles.notSelected
                    }
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className={styles.formSubmitWrapper}>
                <button type="submit" className={styles.formSubmit}>
                  {loading ? "saving..." : "Apply Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const FormLabelItem = (props: FormItemProps) => {
  return (
    <label className={styles.formControl}>
      <div className={styles.formInputWrapper}>
        <input
          type="radio"
          value={props.value}
          className={styles.formInput}
          name={"radio"}
        />
      </div>
      {props.children}
    </label>
  );
};
