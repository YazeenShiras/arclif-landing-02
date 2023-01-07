/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";

import Header from "../components/Header";

import styles from "./about.module.css";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>About | Arclif</title>
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
              <h2 className={playfairDisplay.className}>Who Are We?</h2>
              <span></span>
            </div>
            <h3>
              Create the best living spaces for our customers allowing them to fully immerse themselves in designing the
              perfect living space for their needs, desires and lifestyle.
            </h3>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.container_sectionTwo}>
            <div className={styles.cardContainer_sectionTwo}>
              <div className={styles.card_sectionTwo}>
                <Image className={styles.userImage} src="/about/user1.png" alt="gif" width={98} height={98} priority />
                <div className={styles.textCard_sectionTwoMain}>
                  <h4>John Sullivan</h4>
                  <h5>Chairman</h5>
                </div>
              </div>
              <div className={styles.card_sectionTwoMain}>
                <Image className={styles.userImage} src="/about/user2.png" alt="gif" width={98} height={98} priority />
                <div className={styles.textCard_sectionTwoMain}>
                  <h4>John Sullivan</h4>
                  <h5>Chairman</h5>
                </div>
              </div>
              <div className={styles.card_sectionTwo}>
                <Image className={styles.userImage} src="/about/user3.png" alt="gif" width={98} height={98} priority />
                <div className={styles.textCard_sectionTwoMain}>
                  <h4>John Sullivan</h4>
                  <h5>Chairman</h5>
                </div>
              </div>
            </div>
            <div className={styles.whatWeDo_sectionTwo}>
              <span></span>
              <h2 className={playfairDisplay.className}>What We Do</h2>
              <h3>
                Create the best living spaces for our customers allowing them to fully immerse themselves in designing
                the perfect living space for their needs, desires and lifestyle. Designing a website or a visual design
                can take a lot of time when you do not have the content ready. However, with a lorem ipsum generator,
                you can generate a dummy text to test the final output .Create the best living spaces.
              </h3>
              <iframe
                width="100%"
                height="432"
                src="https://www.youtube.com/embed/f4QVsOnWLwY?rel=0&controls=0&autoplay=1&"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className={styles.cardsRowContainer_sectionTwo}>
              <div className={styles.cardsRow_sectionTwo}>
                <div className={styles.leftCardsRow_sectionTwo}>
                  <span></span>
                  <h2 className={playfairDisplay.className}>Our mission & vision</h2>
                  <h3>
                    Create the best living spaces for our customers allowing them to fully immerse themselves in
                    designing the perfect living space for their needs, desires and lifestyle. Designing a website or a
                    visual design can take a lot of time when you do not have the content ready. However, with a lorem
                    ipsum generator.
                  </h3>
                </div>
                <div className={styles.rightCardsRow_sectionTwo}>
                  <img src="/about/img1.png" alt="" className={styles.img1_sectionTwo} />
                </div>
              </div>
              <div className={styles.cardsRow_sectionTwo}>
                <div className={styles.leftCardsRow_sectionTwo2}>
                  <img src="/about/img1.png" alt="" className={styles.img2_sectionTwo} />
                </div>
                <div className={styles.rightCardsRow_sectionTwo2}>
                  <span></span>
                  <h2 className={playfairDisplay.className}>Our mission & vision</h2>
                  <h3>
                    Create the best living spaces for our customers allowing them to fully immerse themselves in
                    designing the perfect living space for their needs, desires and lifestyle. Designing a website or a
                    visual design can take a lot of time when you do not have the content ready. However, with a lorem
                    ipsum generator.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}></section>
      </main>
    </>
  );
}
