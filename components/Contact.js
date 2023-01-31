import Image from "next/image";
import styles from "./contact.module.css";
import { Playfair_Display } from "@next/font/google";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <>
      <section className={styles.sectionEight}>
        <div className={styles.container_sectionEight}>
          <div className={styles.leftConatiner_sectionEight}>
            <h2 className={playfairDisplay.className}>Connect with us</h2>
            <h3>See what our valuable customers are saying</h3>
            <h4>Arclif Technologies Pvt Ltd</h4>
            <h5>Unit 3B, 3rd Floor ,Sahya Government Cyberpark, Calicut Kerala 673014</h5>
            <span>
              <h5>
                Email: infoarclif@gmail.com <br /> Phone: +91 978086363
              </h5>
            </span>
            <button className={styles.contactButton_sectionEight}>
              <p>Contact</p>
              <Image
                className={styles.arrow_sectionEight}
                src="/sectionEight/contact.svg"
                alt="arrow"
                width={11}
                height={9}
                priority
              />
            </button>
          </div>
          <div className={styles.rightConatiner_sectionEight}>
            <div className={styles.innerRightContainer_sectionEight}>
              <h2 className={playfairDisplay.className}>Get free consultation </h2>
              <h3>See what our valuable customers are saying</h3>
              <div className={styles.formConatiner_sectionEight}>
                <div className={styles.inputConatiner_sectionEight}>
                  <input placeholder="Name" />
                  <input placeholder="Phone number" />
                  <input placeholder="Email" />
                  <input placeholder="Message" />
                </div>
                <button className={styles.sendButton_sectionEight}>
                  <Image
                    className={styles.gif1_sectionEight}
                    src="/sectionEight/gif1.gif"
                    alt="arrow"
                    width={66}
                    height={66}
                    priority
                  />
                  <p>SEND NOW</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
