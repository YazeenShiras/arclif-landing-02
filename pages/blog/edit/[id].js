/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Playfair_Display } from "@next/font/google";
import data from "../../../utils/post.json";

import styles from "./blogDetailEdit.module.css";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const BlogDetail = () => {
  const [blogdata, setBlogData] = useState([]);
  const [blogId, setBlogId] = useState();
  const [blog, setBlog] = useState([]);

  const [edit, setEdit] = useState(false);

  const [titleNew, setTitleNew] = useState("");

  console.log(blogdata);

  /* GET Blog ID */
  function getParameters() {
    setBlogData(data);
    let urlString = window.location.href;
    let paramString = urlString.split("/")[5];
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
    console.log(blogId);
    const blogDta = blogdata.filter((item) => {
      return item.id == blogId;
    });
    console.log(blogDta);
    setBlog(blogDta[0]);
  }, [blogdata, blogId]);

  function setTitle(id, newTitle) {
    for (var i = 0; i < blogdata.length; i++) {
      if (blogdata[i].id === id) {
        blogdata[i].title = newTitle;
        return;
      }
    }
  }

  // Call as

  console.log(titleNew);

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
      <main className={styles.main}>
        {!edit ? (
          <section className={styles.sectionOne}>
            <div className={styles.container_sectionOne}>
              <div className={styles.blogCardContainer}>
                <div className={styles.blogcard}>
                  <h5>{blog?.updated_at}</h5>
                  <h3 contentEditable="true" className={playfairDisplay.className}>
                    {blog?.title}
                  </h3>
                  <img
                    className={styles.cardImage_blogEdit}
                    src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="image_blog"
                  />
                  <p>{blog?.description}</p>
                </div>
                <div className={styles.editButton} onClick={() => setEdit(true)}>
                  Edit
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.sectionOne}>
            <div className={styles.container_sectionOne}>
              <div className={styles.blogCardContainer}>
                <div className={styles.blogcard}>
                  <h5>{blog?.updated_at}</h5>
                  {/* <h3 className={playfairDisplay.className}>{blog?.title}</h3> */}
                  <input
                    onChange={(e) => setTitleNew(e.target.value)}
                    defaultValue={blog?.title}
                    type="text"
                    placeholder="title"
                  />
                  <img
                    className={styles.cardImage_blogEdit}
                    src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="image_blog"
                  />
                  {/* <p>{blog?.description}</p> */}
                  <textarea defaultValue={blog?.description} type="text" placeholder="description" />
                </div>

                <div
                  className={styles.editButton}
                  onClick={() => {
                    setEdit(false), setTitle(blogId, titleNew);
                  }}
                >
                  Save
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default BlogDetail;
