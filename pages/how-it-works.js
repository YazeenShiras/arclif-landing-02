import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "./howItWorks.module.css";
import { Playfair_Display } from "@next/font/google";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>How it works | Arclif</title>
        <meta
          name="description"
          content="Arclif.com is an online architecture service platform founded in
                  2016 in vision to connect Architects, Designers, Engineers and
                  Building material suppliers closer to Home seekers with their
                  products and services, across the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionOne}>
          <div className={styles.container_sectionOne}>
            <div className={styles.left_sectionOne}>
              <Image
                className={styles.image_sectionOne}
                src="/howItWorks/img1.svg"
                alt="image"
                width={708}
                height={507}
                priority
              />
            </div>
            <div className={styles.right_sectionOne}>
              <Image
                className={styles.image_sectionOne}
                src="/howItWorks/gif1.gif"
                alt="image"
                width={95}
                height={95}
                priority
              />
              <h2 className={playfairDisplay.className}>Explore new ideas</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text
              </h3>
              <div className={styles.buttonContainer_sectionOne}>
                <div className={styles.exploreMore_button}>
                  Explore more{" "}
                  <Image
                    className={styles.arrow_sectionOne}
                    src="/howItWorks/arrow1.svg"
                    alt="arrow"
                    width={13}
                    height={12}
                    priority
                  />
                </div>
                <div className={styles.next_button}>Next</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.container_sectionTwo}>
            <div className={styles.left_sectionOne}>
              <Image
                className={styles.image_sectionOne}
                src="/howItWorks/img2.svg"
                alt="image"
                width={436}
                height={534}
                priority
              />
            </div>
            <div className={styles.right_sectionOne}>
              <Image
                className={styles.image_sectionOne}
                src="/howItWorks/gif1.gif"
                alt="image"
                width={95}
                height={95}
                priority
              />
              <h2 className={playfairDisplay.className}>Find best architect</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text
              </h3>
              <div className={styles.buttonContainer_sectionOne}>
                <div className={styles.back_button}>
                  <Image
                    className={styles.arrow_sectionTwo}
                    src="/howItWorks/arrow2.svg"
                    alt="arrow"
                    width={13}
                    height={12}
                    priority
                  />
                  Back
                </div>
                <div className={styles.next_button}>Next</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.container_sectionThree}>
            <div className={styles.left_sectionThree}>
              <Image
                className={styles.image_sectionThree}
                src="/howItWorks/img3.svg"
                alt="image"
                width={433}
                height={433}
                priority
              />
            </div>
            <div className={styles.right_sectionThree}>
              <Image
                className={styles.image_sectionOne}
                src="/howItWorks/gif3.gif"
                alt="gif"
                width={95}
                height={95}
                priority
              />
              <h2 className={playfairDisplay.className}>Send requirement</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text
              </h3>
              <div className={styles.buttonContainer_sectionOne}>
                <div className={styles.back_button2}>
                  <Image
                    className={styles.arrow_sectionTwo}
                    src="/howItWorks/arrow2.svg"
                    alt="arrow"
                    width={13}
                    height={12}
                    priority
                  />
                  Back
                </div>
                <div className={styles.next_button2}>Next</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionFour}>
          <div className={styles.container_sectionFour}>
            <div className={styles.top_sectionFour}>
              <div className={styles.left_sectionFour}>
                <Image
                  className={styles.image_sectionFour}
                  src="/howItWorks/img4.svg"
                  alt="image"
                  width={534}
                  height={534}
                  priority
                />
              </div>
              <div className={styles.right_sectionOne}>
                <Image
                  className={styles.image_sectionOne}
                  src="/howItWorks/gif1.gif"
                  alt="image"
                  width={95}
                  height={95}
                  priority
                />
                <h2 className={playfairDisplay.className}>Successfully completed</h2>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                  industry&apos;s standard dummy text
                </h3>
                <div className={styles.buttonContainer_sectionOne}>
                  <div className={styles.back_button}>
                    <Image
                      className={styles.arrow_sectionTwo}
                      src="/howItWorks/arrow2.svg"
                      alt="arrow"
                      width={13}
                      height={12}
                      priority
                    />
                    Back
                  </div>
                  <div className={styles.next_button}>Next</div>
                </div>
              </div>
            </div>
            <div className={styles.bottom_sectionFour}>
              <div className={styles.left_bottom_sectionFour}>
                <p>Privacy policy </p>
                <p>Terms</p>
                <p>FAQs</p>
              </div>
              <div className={styles.right_bottom_sectionFour}>
                <p>© Copyright Arclif 2022 All Right Reserved</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;
