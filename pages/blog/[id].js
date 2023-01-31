import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "./blogDetail.module.css";
import { Playfair_Display } from "@next/font/google";
import Image from "next/image";
import { data } from "../../utils/blogData";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const BlogDetail = () => {
  const [blogId, setBlogId] = useState("");
  const [blog, setBlog] = useState([]);

  /* GET Blog ID */
  function getParameters() {
    let urlString = window.location.href;
    let paramString = urlString.split("/")[4];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
      setBlogId(pair[0]);
      console.log(pair[0]);
    }
  }

  useEffect(() => {
    getParameters();
  }, []);

  useEffect(() => {
    console.log(data);
    const blogData = data.filter((item) => item.id === blogId);
    setBlog(blogData[0]);
  }, [blogId]);

  return (
    <>
      <Head>
        <title>Blog Details | Arclif</title>
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
            <div className={styles.blogCardContainer}>
              <div className={styles.blogcard}>
                <h5>{blog?.date}</h5>
                <h3 className={playfairDisplay.className}>{blog?.title}</h3>
                <Image
                  className={styles.cardImage_sectionOne}
                  src={blog?.image}
                  alt="image_blog"
                  width={887}
                  height={456}
                  priority
                />
                <p>{blog?.smallDescription}</p>

                <p>{blog?.longDescription}</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default BlogDetail;
