/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { StoreContext } from "../global/StoreContext";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./header.module.css";

const Header = () => {
  const router = useRouter();

  const [menu, setMenu] = useState(false);

  const [Store] = useContext(StoreContext);
  const page = Store.page;
  const setPage = Store.setPage;

  const homeClick = () => {
    setPage("home");
    router.push("/");
  };

  const aboutClick = () => {
    setPage("about");
    router.push("/about");
  };

  // const howItWorksClick = () => {
  //   setPage("howItWorks");
  //   router.push("/how-it-works");
  // };

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

  const menuClick = () => {
    setMenu(true);
  };

  const closeClick = () => {
    setMenu(false);
  };

  return (
    <>
      {!menu ? (
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.header_left}>
              <img className={styles.logo} src="/header/logo.svg" alt="Arclif Logo" />
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
                  {/* {page === "howItWorks" ? (
                    <li onClick={howItWorksClick} className={styles.header_navActive}>
                      How it works
                    </li>
                  ) : (
                    <li onClick={howItWorksClick}>How it works</li>
                  )} */}
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
              <div className={styles.headerMenu_mobile} onClick={menuClick}>
                <Image
                  className={styles.hamburger}
                  src="/header/hamburger.svg"
                  alt="menu"
                  width={16}
                  height={12}
                  priority
                />
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className={styles.headerMenuContainer}>
          <div className={styles.header_top_mobile}>
            <div className={styles.header_left}>
              <img className={styles.logo} src="/header/logo.svg" alt="Arclif Logo" />
            </div>
            <div className={styles.headerMenu_mobile} onClick={closeClick}>
              <Image className={styles.hamburger} src="/header/close.svg" alt="menu" width={14} height={14} priority />
            </div>
          </div>
          <nav className={styles.header_nav_mobile}>
            <ul>
              {page === "home" ? (
                <li onClick={homeClick} className={styles.header_navActive_mobile}>
                  <p>Home</p>
                </li>
              ) : (
                <li onClick={homeClick}>Home</li>
              )}
              {page === "about" ? (
                <li onClick={aboutClick} className={styles.header_navActive_mobile}>
                  <p>About us</p>
                </li>
              ) : (
                <li onClick={aboutClick}>About us</li>
              )}
              {/* {page === "howItWorks" ? (
                <li onClick={howItWorksClick} className={styles.header_navActive_mobile}>
                  How it works
                </li>
              ) : (
                <li onClick={howItWorksClick}>How it works</li>
              )} */}
              {page === "services" ? (
                <li onClick={servicesClick} className={styles.header_navActive_mobile}>
                  <p>Services</p>
                </li>
              ) : (
                <li onClick={servicesClick}>Services</li>
              )}
              {page === "blog" ? (
                <li onClick={blogClick} className={styles.header_navActive_mobile}>
                  <p>Blog</p>
                </li>
              ) : (
                <li onClick={blogClick}>Blog</li>
              )}
              {page === "careers" ? (
                <li onClick={careersClick} className={styles.header_navActive_mobile}>
                  <p>Careers</p>
                </li>
              ) : (
                <li onClick={careersClick}>Careers</li>
              )}
            </ul>
          </nav>
          <div className={styles.header_buttons_mobile}>
            <button className={styles.signUpButton}>Sign Up</button>
            <button className={styles.loginButton}>Log in</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
