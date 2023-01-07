import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { StoreContext } from "../global/StoreContext";
import { useRouter } from "next/router";

import styles from "./header.module.css";

const Header = () => {
  const [Store] = useContext(StoreContext);
  const page = Store.page;
  const setPage = Store.setPage;

  const router = useRouter();

  const homeClick = () => {
    setPage("home");
    router.push("/");
  };

  const aboutClick = () => {
    setPage("about");
    router.push("/about");
  };

  const howItWorksClick = () => {
    setPage("howItWorks");
    router.push("/how-it-works");
  };

  const servicesClick = () => {
    setPage("services");
    router.push("/services");
  };

  const blogClick = () => {
    setPage("blog");
    router.push("/blog");
  };

  const careersClick = () => {
    setPage("careers");
    router.push("/careers");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.header_left}>
            <Image className={styles.logo} src="/header/logo.svg" alt="Arclif Logo" width={113} height={34} priority />
          </div>
          <div className={styles.header_right}>
            <nav className={styles.header_nav}>
              <ul>
                {page === "home" ? (
                  <li onClick={homeClick} className={styles.header_navActive}>
                    Home
                  </li>
                ) : (
                  <li onClick={homeClick}>Home</li>
                )}
                {page === "about" ? (
                  <li onClick={aboutClick} className={styles.header_navActive}>
                    About us
                  </li>
                ) : (
                  <li onClick={aboutClick}>About us</li>
                )}
                {page === "howItWorks" ? (
                  <li onClick={howItWorksClick} className={styles.header_navActive}>
                    How it works
                  </li>
                ) : (
                  <li onClick={howItWorksClick}>How it works</li>
                )}
                {page === "services" ? (
                  <li onClick={servicesClick} className={styles.header_navActive}>
                    Services
                  </li>
                ) : (
                  <li onClick={servicesClick}>Services</li>
                )}
                {page === "blog" ? (
                  <li onClick={blogClick} className={styles.header_navActive}>
                    Blog
                  </li>
                ) : (
                  <li onClick={blogClick}>Blog</li>
                )}
                {page === "careers" ? (
                  <li onClick={careersClick} className={styles.header_navActive}>
                    Careers
                  </li>
                ) : (
                  <li onClick={careersClick}>Careers</li>
                )}
              </ul>
            </nav>
            <div className={styles.header_buttons}>
              <div className={styles.loginButton}>Log in</div>
              <div className={styles.signUpButton}>Sign Up</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
