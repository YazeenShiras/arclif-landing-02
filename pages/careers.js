import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import styles from "./careers.module.css";
import { Playfair_Display } from "@next/font/google";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const Careers = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const fnCardOpen = () => {
    if (cardOpen) {
      setCardOpen(false);
    } else {
      setCardOpen(true);
    }
  };

  return (
    <>
      <Head>
        <title>Careers | Arclif</title>
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
            <div className={styles.title_sectionOne}>
              <h2 className={playfairDisplay.className}>Join our team</h2>
              <h3>
                Create the best living spaces for our customers allowing them to fully immerse themselves in designing
                the perfect living space for their needs, desires and lifestyle.
              </h3>
              <span></span>
            </div>
            <div className={styles.content_sectionOne}>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.cardImage_sectionOne}
                  src="/careers/img1.svg"
                  alt="gif"
                  width={45}
                  height={45}
                  priority
                />
                <div className={styles.right_card_sectionOne}>
                  <h3 className={playfairDisplay.className}>Work culture</h3>
                  <p>Create the best living spaces for our customers allowing them to fully immerse.</p>
                </div>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.cardImage_sectionOne}
                  src="/careers/img1.svg"
                  alt="gif"
                  width={45}
                  height={45}
                  priority
                />
                <div className={styles.right_card_sectionOne}>
                  <h3 className={playfairDisplay.className}>Growth</h3>
                  <p>Create the best living spaces for our customers allowing them to.</p>
                </div>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.cardImage_sectionOne}
                  src="/careers/img1.svg"
                  alt="gif"
                  width={45}
                  height={45}
                  priority
                />
                <div className={styles.right_card_sectionOne}>
                  <h3 className={playfairDisplay.className}>Learn more</h3>
                  <p>Create the best living spaces for our customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.container_sectionTwo}>
            <div className={styles.title_sectionTwo}>
              <h2 className={playfairDisplay.className}>
                Take a look at our current <span>3</span> openings
              </h2>
              <h3>Create the best living spaces for our customers allowing them</h3>
            </div>
            <div className={styles.cardContainer_sectionTwo}>
              <details className={styles.card_sectionTwo} onClick={fnCardOpen}>
                <summary>
                  <div className={styles.title_card_sectionTwo}>
                    <h4>Associate Software Engineer</h4>
                    <p>
                      26 -10-2022 <span className={styles.divider}></span> 2+ Year experience
                    </p>
                  </div>
                  <div className={styles.content_card_sectionTwo}>
                    <p>
                      Create the best living spaces for our customers allowing them to fully immerse themselves in
                      Create the best living spaces for our customers allowing them to fully immerse themselves in
                      designing the perfect living space for their.
                    </p>
                    {cardOpen ? (
                      <Image
                        className={styles.cardImageSectionTwo}
                        src="/careers/arrow2.svg"
                        alt="gif"
                        width={16}
                        height={8}
                        priority
                      />
                    ) : (
                      <Image
                        className={styles.cardImageSectionTwo}
                        src="/careers/arrow1.svg"
                        alt="gif"
                        width={16}
                        height={8}
                        priority
                      />
                    )}
                  </div>
                </summary>
                <div className={styles.expandContainer}>
                  <h5>Experience: 0 - 2 Years</h5>
                  <h5>The candidate should have hands-on experience in creating any Plugin</h5>
                  <h5>Responsibilities:</h5>
                  <ul>
                    <li>
                      Develop WordPress plugins by bringing in new ideas keeping in mind the trending requirements
                    </li>
                    <li>
                      Develop WordPress plugins by bringing in new ideas keeping in mind the trending requirements
                    </li>
                    <li>
                      Develop WordPress plugins by bringing in new ideas keeping in mind the trending requirements
                    </li>
                    <li>
                      Develop WordPress plugins by bringing in new ideas keeping in mind the trending requirements
                    </li>
                    <li>
                      Develop WordPress plugins by bringing in new ideas keeping in mind the trending requirements
                    </li>
                  </ul>
                  <h5>Requirements:</h5>
                  <ul>
                    <li>Develop WordPress plugins by bringing in new ideas</li>
                    <li>Develop WordPress plugins by bringing in new ideas</li>
                  </ul>
                  <h5>Software and Technical Knowledge:</h5>
                  <ul>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>MySql</li>
                  </ul>
                  <div className={styles.applyNow_button}>APPLY NOW</div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.container_sectionThree}>
            <div className={styles.title_sectionThree}>
              <h2 className={playfairDisplay.className}>Take a look at our current</h2>
              <h3>Say Hello by dropping your resume at hr@arclif.com</h3>
            </div>
            <button className={styles.getInTouch}>Get in touch</button>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Careers;
