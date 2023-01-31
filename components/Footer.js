import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.left_container_sectionNine}>
            <Image
              className={styles.logo_sectionNine}
              src="/sectionNine/logo.png"
              alt="logo"
              width={113}
              height={34}
              priority
            />
            <h5>Arclif Technologies Pvt Ltd</h5>
            <p>© Copyright Arclif 2022 All Right Reserved</p>
            <Image
              className={styles.qr_sectionNine}
              src="/sectionNine/qr.svg"
              alt="logo"
              width={79}
              height={79}
              priority
            />
          </div>
          <div className={styles.center_container_sectionNine}>
            <ul>
              <span>Company</span>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <span>Social media</span>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
            <ul>
              <span>Links</span>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Terms</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className={styles.right_container_sectionNine}>
            <h5>Subscribe Newsletter</h5>
            <h6>Get updates of our products and software releases before anyone else.</h6>
            <div className={styles.inputContainer_sectionNine}>
              <input placeholder="Enter your email"></input>
              <button className={styles.buttonSend_sectionNine}>
                <Image
                  className={styles.arrow_sectionNine}
                  src="/sectionNine/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={9}
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
