/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import { Playfair_Display } from "@next/font/google";
import { data } from "../../../utils/blogData";
import { useRouter } from "next/router";
import blogdata from "../../../utils/post.json";

import styles from "../blog.module.css";
import BlogCard from "../../../components/BlogCard";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const BlogEdit = () => {
  const router = useRouter();

  //   const blogView = (id) => {
  //     router.push(`/blog/${id}`);
  //   };

  console.log(blogdata);

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
      <main className={styles.main}>
        <section className={styles.sectionOne}>
          <div className={styles.container_sectionOne}>
            <div className={styles.title_sectionOne}>
              <h2 className={playfairDisplay.className}>Our Blog Edit</h2>

              <span></span>
            </div>

            <div className={styles.cardContainer_sectionOne}>
              {blogdata.map((item, index) => {
                return (
                  <BlogCard
                    id={item.id}
                    key={index}
                    image="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    date={item.updated_at}
                    title={item.title}
                    description={item.description}
                  />
                );
              })}
            </div>
            <div className={styles.pagination_sectionOne}></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogEdit;
