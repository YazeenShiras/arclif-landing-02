import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import styles from "./blog.module.css";
import { data } from "../../utils/blogData";
import { useRouter } from "next/router";

import { Playfair_Display } from "@next/font/google";
import Image from "next/image";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const Blog = () => {
  const router = useRouter();

  const blogView = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <Head>
        <title>Blog | Arclif</title>
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
              <h2 className={playfairDisplay.className}>Our Blog</h2>
              <h3>
                Create the best living spaces for our customers allowing them to fully immerse themselves in designing
                the perfect living space for their needs, desires and lifestyle.
              </h3>
              <span></span>
            </div>
            <p>You should subscribe our news letter for getting latest updates</p>
            <div className={styles.inputContainer_sectionOne}>
              <input placeholder="Mail@sample.com" />
              <button>Subscribe</button>
            </div>
            <div className={styles.cardContainer_sectionOne}>
              {data.map((item, index) => {
                return (
                  <div key={index} className={styles.card_sectionOne} onClick={() => blogView(item.id)}>
                    <Image
                      className={styles.cardImage_sectionOne}
                      src={item.image}
                      alt="image_blog"
                      width={401}
                      height={164}
                      priority
                    />
                    <h5>{item.date}</h5>
                    <h4>{item.description}</h4>
                  </div>
                );
              })}
            </div>
            <div className={styles.pagination_sectionOne}>
              <span className={styles.pageArrow_sectionOne}>
                <Image src="/blog/arrow1.svg" alt="arrow_blog" width={5} height={10} priority />
              </span>
              <span className={styles.paginationNoActive}>1</span>
              <span className={styles.paginationActive}>2</span>
              <span className={styles.pageArrow_sectionOne}>
                <Image src="/blog/arrow2.svg" alt="arrow_blog" width={5} height={10} priority />
              </span>
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Blog;
